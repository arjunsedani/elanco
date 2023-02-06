import { ThemeInterface } from "@health/theme-common";

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
}

export interface ThemeProps extends ThemeInterface, ThemeCustomProps {}
