#!make

REPOSITORY = "nextj--prismic"

override API_ENDPOINT = "https://${REPOSITORY}.prismic.io/api/v2"
override GRAPHQL_ENDPOINT = "https://${REPOSITORY}.prismic.io/graphql"

ifndef MASTER_REF
override MASTER_REF = $(shell curl -G "${API_ENDPOINT}" -H "Content-Type: application/json" -H "Accept: application/json" --silent | jq '.refs[] | select(.id == "master") | .ref')
endif

.PHONY: generate-types
generate-types:
	@ echo Downloading schema from ${GRAPHQL_ENDPOINT}
	@ curl -G ${GRAPHQL_ENDPOINT} \
		-H "Content-Type: application/json" \
		-H "Accept: application/json" \
		-H "Prismic-Ref: ${MASTER_REF}" \
		--data-urlencode 'query=query IntrospectionQuery { __schema { queryType { name } mutationType { name } subscriptionType { name } types { ...FullType } directives { name description locations args { ...InputValue } } } } fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue } fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } } }' \
		--silent \
		| jq .data > src/graphql/schema/schema.json
	@ echo Defining \`possibleTypes\` manually...
	@ echo → See more at: https://www.apollographql.com/docs/react/data/fragments/#defining-possibletypes-manually
	@ cat src/graphql/schema/schema.json \
		| jq -r 'reduce (.__schema.types[] | select(.possibleTypes != null)) as $$type ({}; .[$$type.name] = [$$type.possibleTypes[]?.name])' \
		> src/graphql/schema/possibleTypes.json
	@ echo Generating TypeScript types...
	@ npx apollo client:codegen \
		--localSchemaFile src/graphql/schema/schema.json \
		--target typescript \
    --excludes "node_modules" \
		--includes "src/graphql/queries/**/*.ts" \
		--globalTypesFile src/graphql/generated/globalTypes.ts \
    --outputFlat "src/graphql/generated"
