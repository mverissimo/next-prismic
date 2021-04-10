import '@emotion/react';

import { Theme as ThemeBase } from '@styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeBase {}
}

export interface StyleProps {
  theme: ThemeBase;
}
