import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { PrismicLink } from 'apollo-link-prismic';

const GRAPHQL_URL = process.env.PRISMIC_GRAPHQL_ENDPOINT;

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new PrismicLink({
      uri: GRAPHQL_URL,
    }),
    cache: new InMemoryCache({
      possibleTypes: require('../graphql/schema/possibleTypes.json'),
    }),
  });
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = React.useMemo(() => initializeApollo(initialState), [
    initialState,
  ]);

  return store;
}
