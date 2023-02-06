import * as styledComponents from "styled-components";
// import logger from "@webstudio/logger";

import {
  themeCommon,
  ThemeHEALTH,
  ThemePOSB,
  ThemeBronze,
  LightMode,
  DarkMode,
  colors,
  fontSizes,
  unitConversion,
  spacing,
  elevations,
  motion,
  borderRadius,
} from "./styles";

import * as media from "./styles/media";

import { ThemeConfig, ThemeType } from "./interfaces";
import Token from "./theme/tokens/health-light-base.json";
import { getThemeToken } from "./utils";

type DesignTokens = Partial<typeof Token>;
type DesignTokensTheme = { theme: DesignTokens };
export type ThemeCommon = typeof themeCommon;
type ThemeInterface = ReturnType<ThemeCommon>;
export type ThemeProps = keyof ThemeInterface;
export type Theme = { theme: ThemeInterface };

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<any> as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

const prop = function <I = ThemeInterface>(key: keyof I) {
  return function <V extends { theme: I }>(props: V): any {
    if (!props.theme[key])
      // logger.warn(`Color name ${String(key)} is undefined in ThemeCommon`);
      console.log("dsdds")

    return props.theme[key];
  };
};

export {
  prop,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  type ThemeInterface,
  styled,
  type ThemeConfig,
  withTheme,
  type ThemeType,
  ThemeHEALTH,
  ThemePOSB,
  ThemeBronze,
  LightMode,
  DarkMode,
  colors,
  fontSizes,
  unitConversion,
  spacing,
  elevations,
  motion,
  borderRadius,
  media,
  getThemeToken,
  type DesignTokens,
  type DesignTokensTheme,
};

export default themeCommon;
