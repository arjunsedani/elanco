import themeCommon from "@health/theme-common";
import _themeCommon from "@webstudio/theme-common";

import { ThemeCustomProps, ThemeProps } from "./interface";

const _themeObj = _themeCommon();

export const _theme: ThemeCustomProps = {
  tabStripFirstChildLeftMargin: _themeObj.tabStripFirstChildLeftMargin,
  tabStripItemLeftRightMargin: _themeObj.tabStripItemLeftRightMargin,
  tabStripItemTopBottomMargin: _themeObj.tabStripItemTopBottomMargin,
  fontWeightSemiBold: _themeObj.fontWeightSemiBold,
  fontWeightRegular: _themeObj.fontWeightRegular,
  theme60: _themeObj.theme60,
  brandPrimary: _themeObj.brandPrimary,
  tabStripBorderBottomColour: _themeObj.tabStripBorderBottomColour,
  textTitle: _themeObj.textTitle,
  slate10: _themeObj.slate10,
  slate20: _themeObj.slate20,
  slate50: _themeObj.slate50,
  slate60: _themeObj.slate60,
  slate110: _themeObj.brandPrimaryPaleHighlighted,
  red07: _themeObj.red07,
  white: _themeObj.white,
  black: _themeObj.black,
  colourWhite: _themeObj.colourWhite,
  colourBlack5: _themeObj.brandPrimaryPaleHighlighted,
  brandPrimaryPaleHighlighted: _themeObj.brandPrimaryPaleHighlighted,
  colourBlack1: _themeObj.colourBlack1,
  //TODO: replace these color codes with theme props once added there
  color_whitesmoke: "#F5F5F5",
  color_green1: "#0C8363",
  color_status_danger: "#E52500",
  color_status_warning: "#A36700",
};

export const getStyleTheme = (): ThemeProps => {
  return { ...themeCommon(), ..._theme };
};

export const theme = getStyleTheme();
