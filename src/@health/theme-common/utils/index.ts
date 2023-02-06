import defaultThemeTokens from "../theme/tokens/health-light-base.json";
import posbLightBaseTokens from "../theme/tokens/posb-light-base.json";
import iwealthLightBaseTokens from "../theme/tokens/iwealth-light-base.json";

interface GetThemeTokenOptions {
  brand: "health" | "posb" | "iwealth";

  /**
   * @default "light"
   */
  polarity?: "light" | "dark";

  /**
   * @default "base"
   */
  contrast?: "base" | "high";
}

/**
 * @deprecated
 * Since version 1.0.0.
 * Starting from v1.0.0, we recommend project team to implement its own theme switching function instead.
 * DLS and WebStudio team will be maintaining a seperate design tokens at `@health/design-tokens`.
 *
 * Please reach out to WebStudio team if you are using this function so that we can keep you updated on
 * the migration steps.
 *
 * @returns
 */
export const getThemeToken = (themeObj: GetThemeTokenOptions) => {
  const { brand, polarity = "light", contrast = "base" } = themeObj;
  if (brand === "health") {
    if (polarity === "light") {
      return defaultThemeTokens;
    }
    return defaultThemeTokens;
  }
  if (brand === "posb") {
    if (polarity === "light") {
      return posbLightBaseTokens;
    }
    return posbLightBaseTokens;
  }
  if (brand === "iwealth") {
    if (polarity === "light") {
      return iwealthLightBaseTokens;
    }
    return iwealthLightBaseTokens;
  }
  throw new Error("brand is either empty or incorrectly specified");
};
