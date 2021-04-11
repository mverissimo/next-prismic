import React from 'react';

import { initializeApollo } from 'utils/apollo';
import { QUERY_HOME } from 'graphql/queries/home';

function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { homepage },
  } = await apolloClient.query({
    query: QUERY_HOME,
    variables: {
      uid: 'home',
      lang: 'en-us',
    },
  });

  return {
    props: homepage,
  };
}

export default Home;
