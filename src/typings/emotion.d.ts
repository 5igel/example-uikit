import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      danger: string;
      success: string;
      background: string;
      foreground: string;
    },
    fontSizes: number[];
    fontWeights: number[];
    space: number[];
    borders: number[];
    radii: number[];
  }
}
