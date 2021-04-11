import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';

import { light } from '@styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Head>
        <title>Next Prismic</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A sample next prismic" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
