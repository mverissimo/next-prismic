import React from 'react';
import Head from 'next/head';

import { Button } from '@components/Button';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>Button</Button>
    </React.Fragment>
  );
}
