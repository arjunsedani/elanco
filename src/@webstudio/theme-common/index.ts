import * as styledComponents from "styled-components";
import { themeCommon, ThemeConfig, prop } from "./styles";
import { ThemeInterface, Theme } from "./interfaces";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = (styledComponents as styledComponents.ThemedStyledComponentsModule<any>) as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export {
  prop,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  type ThemeInterface,
  styled,
  type Theme,
  type ThemeConfig,
  withTheme,
};

export default themeCommon;
