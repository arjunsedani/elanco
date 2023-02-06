import themeCommon, { ThemeInterface } from "@health/theme-common";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme
    extends ReturnType<typeof themeCommon>,
      ThemeCustomProps {}
}

export interface ThemeCustomProps {
  tabStripFirstChildLeftMargin: string;
  tabStripItemLeftRightMargin: string;
  tabStripItemTopBottomMargin: string;
  fontWeightSemiBold: number;
  fontWeightRegular: number;
  theme60: string;
  brandPrimary: string;
  tabStripBorderBottomColour: string;
  textTitle: string;
  slate10: string;
  slate20: string;
  slate50: string;
  slate60: string;
  slate110: string;
  red07: string;
  white: string;
  black: string;
  colourWhite: string;
  colourBlack5: string;
  brandPrimaryPaleHighlighted: string;
  colourBlack1: string;
  //TODO: replace these color codes with theme props once added there
  color_whitesmoke: string;
  color_green1: string;
  color_status_danger: string;
  color_status_warning: string;
  button_buy: string;
  button_sell: string;
}

export type ThemeProps = ThemeInterface & ThemeCustomProps;
