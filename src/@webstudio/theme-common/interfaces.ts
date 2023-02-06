import { themeCommon, ThemeConfig } from "./styles";
export type ThemeCommon = typeof themeCommon;
export type ThemeInterface = ReturnType<ThemeCommon>;
export type ThemeProps = keyof ThemeInterface;
export type Theme = { theme: ThemeInterface };
