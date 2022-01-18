import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgc: string;
    ele:string;
    txt:string;
    inpt:string;
    colors?: {
      main: string;
      secondary: string;
    };
  }
}
