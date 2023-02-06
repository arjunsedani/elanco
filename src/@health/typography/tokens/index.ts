import { DesignTokens } from "@health/design-tokens";
import { Theme } from "@health/theme-common";

import untypeStyled, {
  ThemeProviderComponent,
  ThemedStyledInterface,
  ThemeProvider as untypeThemeProvider,
} from "styled-components";

type CustomTheme = Partial<DesignTokens["theme"] & Theme["theme"]>;

interface CustomThemeProp {
  theme: CustomTheme;
}

export const styled = untypeStyled as unknown as ThemedStyledInterface<CustomTheme>;
export const ThemeProvider =
  untypeThemeProvider as unknown as ThemeProviderComponent<CustomTheme>;

export const Tokens = {
  title: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.title.default.default.default.fontSize ??
      p.theme.font_size_title,
  },
  h1: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h1.default.default.default.fontSize ??
      p.theme.font_size_h1,
  },
  h2: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h2.default.default.default.fontSize ??
      p.theme.font_size_h2,
  },
  h3: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h3.default.default.default.fontSize ??
      p.theme.font_size_h3,
  },
  h4: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h4.default.default.default.fontSize ??
      p.theme.font_size_h4,
  },
  h5: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h5.default.default.default.fontSize ??
      p.theme.font_size_h5,
  },
  h6: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.h6.default.default.default.fontSize ??
      p.theme.font_size_h6,
  },
  text: {
    base: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.text.default.default.default.fontSize ??
        p.theme.font_size_base,
    },
    sm: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.smallText.default.default.default.fontSize ??
        p.theme.font_size_base_sm,
    },
    xs: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.footnoteText.default.default.default.fontSize ??
        p.theme.font_size_sm,
    },
    tiny: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.tinyText.default.default.default.fontSize ??
        p.theme.font_size_tiny,
    },
    footnote: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.footnoteText.default.default.default.fontSize ??
        p.theme.font_size_footnote,
    },
  },
  paragraph: {
    fontSize: (p: CustomThemeProp) =>
      p.theme.component?.paragraph.default.default.default.fontSize ??
      p.theme.paragraph_base,
    fontWeight: (p: CustomThemeProp) =>
      p.theme.component?.paragraph.default.default.default.fontWeight ??
      p.theme.font_weight_regular,
    baseSmall: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.smallParagraph.default.default.default.fontSize ??
        p.theme.paragraph_base_sm,
    },
    footnote: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.footnoteParagraph.default.default.default.fontSize ??
        p.theme.paragraph_footnote,
    },
    small: {
      fontSize: (p: CustomThemeProp) =>
        p.theme.component?.footnoteParagraph.default.default.default.fontSize ??
        p.theme.paragraph_sm,
    },
  },
  baseFont: {
    fontWeight: (p: CustomThemeProp) =>
      p.theme.theme?.typography.fontWeight.default ??
      p.theme.font_weight_regular,
    color: (p: CustomThemeProp) =>
      p.theme.theme?.color.neutral.default ?? p.theme.color_slate110,
    primary: {
      color: (p: CustomThemeProp) =>
        p.theme.theme?.color.product.default ?? p.theme.color_primary,
    },
    info: {
      color: (p: CustomThemeProp) =>
        p.theme.theme?.color.info.default ?? p.theme.color_status_info,
    },
    warning: {
      color: (p: CustomThemeProp) =>
        p.theme.theme?.color.warning.default ?? p.theme.color_status_warning,
    },
    success: {
      color: (p: CustomThemeProp) =>
        p.theme.theme?.color.success.default ?? p.theme.color_status_success,
    },
    danger: {
      color: (p: CustomThemeProp) =>
        p.theme.theme?.color.danger.default ?? p.theme.color_status_danger,
    },
  },
};
