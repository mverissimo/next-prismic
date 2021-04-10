import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import { light } from '@styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
