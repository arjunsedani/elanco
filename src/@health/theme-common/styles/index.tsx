import { ThemeConfig } from "../interfaces";

export const LightMode = {
  body: "#FFFFFF",
  text: "#172733",
  background: "#FFFFFF",
};

export const DarkMode = {
  body: "#17181A",
  text: "#E9EEF2",
  background: "#E5E5E5",
};

export const colors = {
  // global
  color_black: "#17181A",
  color_white: "#FFFFFF",
  color_text: "#172733",
  color_HEALTH_primary: "#FF3E3E",
  color_POSB_primary: "#0077CC",

  // status
  color_status_access: "#458FFF",
  color_status_success: "#13C998",
  color_status_warning: "#FFB024",
  color_status_danger: "#FF4724",
  color_status_info: "#8657FF",

  // state
  color_state_hover: "#172733",
  color_state_pressed: "#455057",
  color_text_hover: "#6F7A81",
  color_text_disabled: "#FFFFFF",
  color_state_hover_brand_HEALTH: "#FF3E3E",
  color_state_pressed_brand_HEALTH: "#0077CC",

  // divider
  color_divider: "#DDE3E7",

  // backgrounds
  color_background_app: "#F5F7F9",
  color_background_sidebar: "#172733",

  // global color palettes
  color_slate00: "#f5f7f9",
  color_slate10: "#eef2f5",
  color_slate20: "#dde3e7",
  color_slate30: "#c7cfd5",
  color_slate40: "#b0b9c0",
  color_slate50: "#9ba4ab",
  color_slate60: "#858f96",
  color_slate70: "#6f7a81",
  color_slate80: "#59656d",
  color_slate90: "#455057",
  color_slate100: "#303c44",
  color_slate110: "#172733",

  // decorative
  color_goji: "#FFB5B9",
  color_goji_alt: "#FF1C27",
  color_ginger: "#FFDEB5",
  color_ginger_alt: "#FF991C",
  color_lemon: "#FFFEB4",
  color_lemon_alt: "#FFFC1C",
  color_lime: "#DBFFB4",
  color_lime_alt: "#92FF1C",
  color_melon: "#B4FFDB",
  color_melon_alt: "#1CFF91",
  color_mint: "#B4F8FF",
  color_mint_alt: "#1CEAFF",
  color_lavender: "#B4CCFF",
  color_lavender_alt: "#1C65FF",
  color_acai: "#ECB4FF",
  color_acai_alt: "#C61CFF",

  // data & analytics
  color_pink01: "#FFF3F6",
  color_pink02: "#FFD4DF",
  color_pink03: "#FFB5C6",
  color_pink04: "#FF95AC",
  color_pink05: "#FF7595",
  color_pink06: "#FF547D",
  color_pink07: "#FD3866",
  color_pink08: "#FF154C",
  color_pink09: "#E70237",
  color_pink10: "#AD0027",
  color_pink11: "#6A0019",

  color_red01: "#FFF4F4",
  color_red02: "#FFD6D6",
  color_red03: "#FFB8B8",
  color_red04: "#FF9898",
  color_red05: "#FF7A7A",
  color_red06: "#FF5C5C",
  color_red07: "#FF3E3E",
  color_red08: "#FF1E1E",
  color_red09: "#FF0000",
  color_red10: "#B90000",
  color_red11: "#740000",

  color_orange01: "#FFF4EE",
  color_orange02: "#FFD9C8",
  color_orange03: "#FFBC9B",
  color_orange04: "#FFA071",
  color_orange05: "#FF8446",
  color_orange06: "#FF722B",
  color_orange07: "#FF681D",
  color_orange08: "#FF5500",
  color_orange09: "#CA3F00",
  color_orange10: "#A63400",
  color_orange11: "#732400",

  color_deepOrange01: "#FFF4F2",
  color_deepOrange02: "#FFD7D1",
  color_deepOrange03: "#FFB9AC",
  color_deepOrange04: "#FF9B88",
  color_deepOrange05: "#FF7E65",
  color_deepOrange06: "#FF6042",
  color_deepOrange07: "#FF4421",
  color_deepOrange08: "#FA2700",
  color_deepOrange09: "#C31E00",
  color_deepOrange10: "#8E1600",
  color_deepOrange11: "#570F00",

  color_amber01: "#FFF7E8",
  color_amber02: "#FFDEA4",
  color_amber03: "#FFC866",
  color_amber04: "#FFB024",
  color_amber05: "#EC9A00",
  color_amber06: "#CE8600",
  color_amber07: "#AE7200",
  color_amber08: "#915D00",
  color_amber09: "#704900",
  color_amber10: "#523500",
  color_amber11: "#342100",

  color_green01: "#EFFBF9",
  color_green02: "#C2F2E5",
  color_green03: "#92EAD2",
  color_green04: "#5EE3BE",
  color_green05: "#32D9AB",
  color_green06: "#12CA98",
  color_green07: "#00B383",
  color_green08: "#00926B",
  color_green09: "#007354",
  color_green10: "#00533E",
  color_green11: "#003426",
  color_green12: "#a0e092",

  color_blue01: "#EFF9FF",
  color_blue02: "#C9EAFF",
  color_blue03: "#A0DBFF",
  color_blue04: "#76CAFF",
  color_blue05: "#50BCFF",
  color_blue06: "#28ACFF",
  color_blue07: "#009DFF",
  color_blue08: "#0080D0",
  color_blue09: "#0066A6",
  color_blue10: "#004976",
  color_blue11: "#002D4A",

  color_indigo01: "#F5F7FF",
  color_indigo02: "#DAE2FF",
  color_indigo03: "#BECCFF",
  color_indigo04: "#A1B5FF",
  color_indigo05: "#859FFF",
  color_indigo06: "#6B8BFF",
  color_indigo07: "#4E74FF",
  color_indigo08: "#335EFD",
  color_indigo09: "#1948F4",
  color_indigo10: "#0333E0",
  color_indigo11: "#02208C",

  color_violet01: "#F8F5FF",
  color_violet02: "#E5DBFF",
  color_violet03: "#D3C2FF",
  color_violet04: "#BEA6FF",
  color_violet05: "#AC8CFF",
  color_violet06: "#9972FF",
  color_violet07: "#8657FF",
  color_violet08: "#723DFD",
  color_violet09: "#5F23FD",
  color_violet10: "#4A0DEB",
  color_violet11: "#3200B3",

  color_purple01: "#FDF3FB",
  color_purple02: "#F5D6EF",
  color_purple03: "#F3B6E5",
  color_purple04: "#F392DD",
  color_purple05: "#F36FD5",
  color_purple06: "#F04ECB",
  color_purple07: "#E930BF",
  color_purple08: "#D918AD",
  color_purple09: "#B20E8D",
  color_purple10: "#850969",
  color_purple11: "#550443",
  
  color_gray01: "#FFFFFF",
  color_gray02: "#FCFCFC",
  color_gray03: "#FAFAFA",
  color_gray04: "#F3F3F3",
  color_gray05: "#ECECEC",
  color_gray06: "#DCDCDC",
  color_gray07: "#C0C0C0",
  color_gray08: "#909090",
  color_gray09: "#656565",
  color_gray10: "#484848",
  color_gray11: "#000000",

  // overlay
  color_overlay: "rgba(23, 39, 51, 0.6)",

  // dark mode palette

  color_night00: "#0B0B0D",
  color_night10: "#18191C",
  color_night20: "#212126",
  color_night30: "#2B2D33",
  color_night40: "#363840",
  color_night50: "#41434D",
  color_night60: "#575966",
  color_night70: "#737580",
  color_night80: "#9598A6",
  color_night90: "#C0C2CC",
  color_night100: "#D8DAE5",
  color_night110: "#E6E8F0",

  color_ruby00: "#260909",
  color_ruby10: "#330C0C",
  color_ruby20: "#400F0F",
  color_ruby30: "#4D1212",
  color_ruby40: "#661818",
  color_ruby50: "#8C2222",
  color_ruby60: "#CF2929",
  color_ruby70: "#FF3E3E",
  color_ruby80: "#FF8080",
  color_ruby90: "#FFA6A6",
  color_ruby100: "#FFCCCC",
  color_ruby110: "#FFE6E6",

  color_sky00: "#001626",
  color_sky10: "#001E33",
  color_sky20: "#002540",
  color_sky30: "#002D4D",
  color_sky40: "#003459",
  color_sky50: "#004B80",
  color_sky60: "#0077CC",
  color_sky70: "#0095FF",
  color_sky80: "#66BFFF",
  color_sky90: "#99D5FF",
  color_sky100: "#CCEAFF",
  color_sky110: "#E5F4FF",

  color_gold00: "#191100",
  color_gold10: "#241700",
  color_gold20: "#2E1E00",
  color_gold30: "#332100",
  color_gold40: "#3B2600",
  color_gold50: "#573800",
  color_gold60: "#8A5900",
  color_gold70: "#AD7000",
  color_gold80: "#F0A61F",
  color_gold90: "#FFC65C",
  color_gold100: "#FFDC9C",
  color_gold110: "#FFF4E0",

  color_sand: "#785A32",
  color_candle: "#855811",
};

export const ThemeHEALTH = {
  // crimson (HEALTH) theme (HEALTH brand color is equivalant to the theme60 colour)
  color_theme00: "#FFF2F2",
  color_theme10: "#FFE6E6",
  color_theme20: "#FFCCCC",
  color_theme30: "#FFA6A6",
  color_theme40: "#FF8080",
  color_theme50: "#FF5959",
  color_theme60: "#FF3E3E",
  color_theme70: "#CF2929",
  color_theme80: "#B32B2B",
  color_theme90: "#8C2222",
  color_theme100: "#661818",
  color_theme110: "#400F0F",
  color_primary: "#FF3E3E",
};

export const ThemePOSB = {
  // azule (POSB) theme (POSB brand color is equivalant to the theme70 colour)
  color_theme00: "#F2FAFF",
  color_theme10: "#E5F4FF",
  color_theme20: "#CCEAFF",
  color_theme30: "#99D5FF",
  color_theme40: "#66BFFF",
  color_theme50: "#33AAFF",
  color_theme60: "#0095FF",
  color_theme70: "#0077CC",
  color_theme80: "#0061A6",
  color_theme90: "#004B80",
  color_theme100: "#003459",
  color_theme110: "#002540",
  color_primary: "#0077CC",
};

export const ThemeBronze = {
  // bronze theme (Primary color is equivalant to the theme50 colour)
  color_theme00: "#FFF4E0",
  color_theme10: "#FFE9BF",
  color_theme20: "#FFDC9C",
  color_theme30: "#FFC65C",
  color_theme40: "#FFB121",
  color_theme50: "#E59500",
  color_theme60: "#C47F00",
  color_theme70: "#A36A00",
  color_theme80: "#805300",
  color_theme90: "#613F00",
  color_theme100: "#472E00",
  color_theme110: "#2E1E00",
  color_primary: "#E59500",
};

export const elevations = {
  // box-shadow properties
  elevation_1: "0px 1px 0px rgba(0, 0, 0, 0.05)",
  elevation_2:
    "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.05)",
  elevation_3:
    "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.05)",
  elevation_4:
    "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 8px 8px rgba(0, 0, 0, 0.08)",
  elevation_5:
    "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 12px 24px rgba(0, 0, 0, 0.2)",
  elevation_drawer:
    "-1px 0px 1px rgba(0, 0, 0, 0.1), -8px 0px 10px rgba(0, 0, 0, 0.05)",
  elevation_primary_button: "inset 0px -1px 0px #CC0000",
};

export const spacing = {
  space_0: "0px",
  space_2: "2px",
  space_4: "4px",
  space_8: "8px",
  space_12: "12px",
  space_16: "16px",
  space_20: "20px",
  space_24: "24px",
  space_32: "32px",
  space_40: "40px",
  space_48: "48px",
};

export const motion = {
  // timing functions
  motion_ease_in: "cubic-bezier(0.4, 0, 0.7, 0.2)",
  motion_ease_out: "cubic-bezier(0, 0, 0.2, 1)",
  motion_ease_in_out: "cubic-bezier(0.4, 0, 0.2, 1)",

  // duration
  motion_duration_ultra_fast: "50ms",
  motion_duration_fast: "150ms",
  motion_duration_medium: "300ms",
  motion_duration_slow: "600ms",
  motion_duration_ultra_slow: "1000ms",
}

export const borderRadius = {
  border_radius_sm: "2px",
  border_radius_m: "4px",
  border_radius_l: "8px",
  border_radius_circle: "50%",
  border_radius_pill: "9999px",
}

export const fontSizes = (baseSize: number) => {
  // If a project cannot adjust their body font size to 16px, this is the escape hatch
  const multiplier = baseSize / 16;
  return {
    font_size_tiny: `${multiplier * 0.625}rem`, // 10px
    font_size_footnote: `${multiplier * 0.8125}rem`, // 13px
    font_size_sm: `${multiplier * 0.8125}rem`, // 13px
    font_size_base_sm: `${multiplier * 0.875}rem`, // 14px
    font_size_base: `${multiplier * 1}rem`, // 16px
    font_size_title: `${multiplier * 1.125}rem`, // 18px
    font_size_h6: `${multiplier * 1.25}rem`, // 20px
    font_size_h5: `${multiplier * 1.5}rem`, // 24px
    font_size_h4: `${multiplier * 2}rem`, // 32px
    font_size_h3: `${multiplier * 2.5}rem`, // 40px
    font_size_h2: `${multiplier * 3}rem`, // 48px
    font_size_h1: `${multiplier * 3.75}rem`, // 60px
    paragraph_footnote: `${multiplier * 0.8125}rem`, // 13px
    paragraph_sm: `${multiplier * 0.8125}rem`, // 13px
    paragraph_base_sm: `${multiplier * 0.875}rem`, // 14px
    paragraph_base: `${multiplier * 1}rem`, // 16px
  };
};

export const unitConversion = (baseSize: number) => {
  return {
    pxToRem: (value: number): string => {
      const convert = parseInt(String(value), 10);
      return `${convert / baseSize}rem`;
    },
  };
};

const fontWeight = {
  font_weight_regular: 400,
  font_weight_medium: 500,
  font_weight_semibold: 600,
  font_weight_bold: 700,
};

export const themeCommon = ({ baseFontSize = 16 }: ThemeConfig = {}) => ({
  colors,
  elevations,
  spacing,
  ...colors,
  ...elevations,
  ...spacing,
  ...motion,
  ...borderRadius,
  ...fontSizes(baseFontSize),
  ...fontWeight,
  ...unitConversion(baseFontSize),
  ...ThemeHEALTH, //default to HEALTH Theme
});
