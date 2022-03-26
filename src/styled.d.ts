// import original module declarations
import 'styled-components';

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: stirng;
    bgColor: string;
    boardColor: string;
    cardBgColor: string;
    cardShadowColor: string;
  }
}