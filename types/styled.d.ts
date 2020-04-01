// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      darkblue: string;
      lightpurple: string;
      purple: string;
      white: string;
      lightergray: string;
      lightgray: string;
      textgray: string;
      black: string;
      lightblack: string;
      red: string;
      rose: string;
      green: string;
      yellow: string;
    };
    bs: string;
    bsHover: string;
    maxWidth: string;
  }
}
