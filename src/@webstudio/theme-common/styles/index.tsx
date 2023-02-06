// import logger from "@webstudio/logger";
import { ThemeInterface } from "../interfaces";
export interface ThemeConfig {
  baseFontSize?: number;
}

const elevations = {
  // box-shadow properties
  elevation1: "none",
  elevation2: "0 2px 4px 0 rgba(23,39,51,0.11)",
  elevation3: "0 5px 8px 0 rgba(23,39,51,0.16)",
  elevation4:
    "0 10px 16px 0 rgba(23,39,51,0.11), 0 5px 32px 4px rgba(23,39,51,0.08)",
  elevation5:
    "0 25px 32px 0 rgba(23,39,51,0.10), 0 10px 64px 8px rgba(23,39,51,0.10)",
};

export const colours = {
  // Canopy naming system
  white: "#ffffff",
  black: "#17181a",
  info: "#8657ff",
  success: "#13c998",
  warning: "#ffb024",
  danger: "#ff4724",

  slate00: "#f5f7f9",
  slate10: "#eef2f5",
  slate20: "#dde3e7",
  slate30: "#c7cfd5",
  slate40: "#b0b9c0",
  slate50: "#9ba4ab",
  slate60: "#858f96",
  slate70: "#6f7a81",
  slate80: "#59656d",
  slate90: "#455057",
  slate100: "#303c44",
  slate110: "#172733",

  theme00: "#fff2f2",
  theme10: "#ffe6e6",
  theme20: "#ffcccc",
  theme30: "#ffa6a6",
  theme40: "#ff8080",
  theme50: "#ff5959",
  theme60: "#ff3e3e",
  theme70: "#cf2929",
  theme80: "#b32b2b",
  theme90: "#8c2222",
  theme100: "#661818",
  theme110: "#400f0f",

  sand: "#cc9955",
  candle: "#ffaa22",

  goji: "#ffb5b9",
  ginger: "#ffdeb5",
  lemon: "#fffeb4",
  lime: "#dbffb4",
  melon: "#b4ffdb",
  mint: "#b4f8ff",
  lavender: "#b4ccff",
  acai: "#ecb4ff",

  // Figma naming system - Data & Analytics Colours
  pink01: "#FFF3F6",
  pink02: "#FFD4DF",
  pink03: "#FFB5C6",
  pink04: "#FF95AC",
  pink05: "#FF7595",
  pink06: "#FF547D",
  pink07: "#FD3866",
  pink08: "#FF154C",
  pink09: "#E70237",
  pink10: "#AD0027",
  pink11: "#6A0019",
  red01: "#FFF4F4",
  red02: "#FFD6D6",
  red03: "#FFB8B8",
  red04: "#FF9898",
  red05: "#FF7A7A",
  red06: "#FF5C5C",
  red07: "#FF3E3E",
  red08: "#FF1E1E",
  red09: "#FF0000",
  red10: "#B90000",
  red11: "#740000",
  orange01: "#FFF4EE",
  orange02: "#FFD9C8",
  orange03: "#FFBC9B",
  orange04: "#FFA071",
  orange05: "#FF8446",
  orange06: "#FF722B",
  orange07: "#FF681D",
  orange08: "#FF5500",
  orange09: "#CA3F00",
  orange10: "#A63400",
  orange11: "#732400",
  deepOrange01: "#FFF4F2",
  deepOrange02: "#FFD7D1",
  deepOrange03: "#FFB9AC",
  deepOrange04: "#FF9B88",
  deepOrange05: "#FF7E65",
  deepOrange06: "#FF6042",
  deepOrange07: "#FF4421",
  deepOrange08: "#FA2700",
  deepOrange09: "#C31E00",
  deepOrange10: "#8E1600",
  deepOrange11: "#570F00",
  amber01: "#FFF7E8",
  amber02: "#FFDEA4",
  amber03: "#FFC866",
  amber04: "#FFB024",
  amber05: "#EC9A00",
  amber06: "#CE8600",
  amber07: "#AE7200",
  amber08: "#915D00",
  amber09: "#704900",
  amber10: "#523500",
  amber11: "#342100",
  green01: "#EFFBF9",
  green02: "#C2F2E5",
  green03: "#92EAD2",
  green04: "#5EE3BE",
  green05: "#32D9AB",
  green06: "#12CA98",
  green07: "#00B383",
  green08: "#00926B",
  green09: "#007354",
  green10: "#00533E",
  green11: "#003426",
  green12: "#a0e092",
  blue01: "#EFF9FF",
  blue02: "#C9EAFF",
  blue03: "#A0DBFF",
  blue04: "#76CAFF",
  blue05: "#50BCFF",
  blue06: "#28ACFF",
  blue07: "#009DFF",
  blue08: "#0080D0",
  blue09: "#0066A6",
  blue10: "#004976",
  blue11: "#002D4A",
  indigo01: "#F5F7FF",
  indigo02: "#DAE2FF",
  indigo03: "#BECCFF",
  indigo04: "#A1B5FF",
  indigo05: "#859FFF",
  indigo06: "#6B8BFF",
  indigo07: "#4E74FF",
  indigo08: "#335EFD",
  indigo09: "#1948F4",
  indigo10: "#0333E0",
  indigo11: "#02208C",
  violet01: "#F8F5FF",
  violet02: "#E5DBFF",
  violet03: "#D3C2FF",
  violet04: "#BEA6FF",
  violet05: "#AC8CFF",
  violet06: "#9972FF",
  violet07: "#8657FF",
  violet08: "#723DFD",
  violet09: "#5F23FD",
  violet10: "#4A0DEB",
  violet11: "#3200B3",
  purple01: "#FDF3FB",
  purple02: "#F5D6EF",
  purple03: "#F3B6E5",
  purple04: "#F392DD",
  purple05: "#F36FD5",
  purple06: "#F04ECB",
  purple07: "#E930BF",
  purple08: "#D918AD",
  purple09: "#B20E8D",
  purple10: "#850969",
  purple11: "#550443",
  gray01: "#FFFFFF",
  gray02: "#FCFCFC",
  gray03: "#FAFAFA",
  gray04: "#F3F3F3",
  gray05: "#ECECEC",
  gray06: "#DCDCDC",
  gray07: "#C0C0C0",
  gray08: "#909090",
  gray09: "#656565",
  gray10: "#484848",
  gray11: "#000000",

  // Legacy naming system
  colourBlack1: "#172633",
  colourBlack2: "#303b44",
  colourBlack3: "#454f57",
  colourBlack4: "#59646d",
  colourBlack5: "#6f7981",
  colourBlack6: "#858f96", // deprecated by Canopy
  colourBlack7: "#9ba4ab", // deprecated by Canopy
  colourBlack8: "#b0b9c0", // deprecated by Canopy
  colourBlack9: "#c7cfd5", // deprecated by Canopy
  colourBlack10: "#dde3e7", // deprecated by Canopy
  colourBlack11: "#f5f7f9", // deprecated by Canopy
  colourBlack12: "#E5E5E5",
  colourBlack13: "#e9edf0",
  colourRed1: "#ff3e3e", // deprecated by Canopy
  colourRed2: "#cf2929",
  colourRed3: "#ff4724", // deprecated by Canopy
  colourGreen1: "#259b24",
  colourGreen2: "#13c998",
  colorGreen3: "#00b383", // deprecated by Canopy
  colorGreen4: "#00926B", // deprecated by Canopy
  colourBlue1: "#0077cc",
  colourYellow1: "#ffaa22", // deprecated by Canopy
  colourYellow2: "#ffb024", // deprecated by Canopy
  colourGold1: "#cc9955", // deprecated by Canopy
  colourWhite: "#ffffff", // deprecated by Canopy
  colourGrey1: "#f6f7f9",
  colourGrey2: "#eff2f5",
  colourOrange1: "#ff681d", // deprecated by Canopy
  colourOrange2: "#ec9A00", // deprecated by Canopy
  colourOrange3: "#ff8446", // deprecated by Canopy
  colourOrange4: "#ff6042", // deprecated by Canopy

  // As per DLS spec - these colours do not follow the numerical naming system above.
  colourSidebar: "#17181A", // deprecated by Canopy
  colourSidebarHover: "#2A2C2F",

  // DLS have the shade in colour plalette, but no colour name for now
  datePickerHoverHighlight: "#ff7a7a",
  datePickerHover: "#ffb8b8", // deprecated by Canopy
};
const toFixedUp3 = (num = 0) => Number(num.toFixed(3));

function fontSizes(baseSize: number) {
  // If a project cannot adjust their body font size to 16px, this is the escape hatch
  const multiplier = 16 / baseSize;
  return {
    xl: `${toFixedUp3(multiplier * 3.5)}rem`,
    lg: `${toFixedUp3(multiplier * 3)}rem`,
    regular: `${toFixedUp3(multiplier * 2)}rem`,
    sm: `${toFixedUp3(multiplier * 1.5)}rem`,
    xs: `${toFixedUp3(multiplier * 1.25)}rem`,
    xxs: `${toFixedUp3(multiplier)}rem`,
    xxxs: `${toFixedUp3(multiplier * 0.875)}rem`,
    textPageTitle: `${toFixedUp3(multiplier * 3.5)}rem`,
    textSectionTitle: `${toFixedUp3(multiplier * 3)}rem`,
    textH1: `${toFixedUp3(multiplier * 2)}rem`,
    textH2: `${toFixedUp3(multiplier * 1.75)}rem`,
    textSmallSectionTitle: `${toFixedUp3(multiplier * 1.5)}rem`,
    textH3: `${toFixedUp3(multiplier * 1.25)}rem`,
    textH4: `${toFixedUp3(multiplier * 1.125)}rem`,
    textTitle: `${toFixedUp3(multiplier)}rem`,
    textSubtitle: `${toFixedUp3(multiplier * 0.875)}rem`,
    textSmallLabel: `${toFixedUp3(multiplier * 0.75)}rem`,
    textTinyLabel: `${toFixedUp3(multiplier * 0.625)}rem`, // 10px
  };
}

const unitConversion = (baseSize: number) => {
  return {
    pxToRem: (value: number): string => {
      const convert = parseInt(String(value), 10);
      return `${convert / baseSize}rem`;
    },
  };
};

const fontWeight = {
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
};
export const prop = function <I = ThemeInterface>(
  key: keyof I,
  fallbackColor: string = "no_color_defined"
) {
  return function <V extends { theme: I }>(props: V): any {
    const color = props.theme[key];
    if (typeof color === "undefined")
      // logger.warn(`Color name key is not defined in given ThemeProvider`);
      console.log("dasdada")
    return props.theme[key] || (props.theme as any)[fallbackColor];
  };
};
export const themeCommon = ({ baseFontSize = 16 }: ThemeConfig = {}) => ({
  ...colours,
  ...elevations,
  ...fontSizes(baseFontSize),
  ...fontWeight,
  ...unitConversion(baseFontSize),

  // Radius
  buttonBorderRadius: "4px",
  containerBorderRadius: "8px",
  textAreaBorderRadius: "4px",
  snackbarBorderRadius: "4px",
  toastBorderRadius: "4px",

  hoverShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",

  // defaults
  brandPrimary: colours.colourRed1,
  buttonPressed: colours.colourRed2,
  buttonTextColour: colours.colourWhite,
  capsuleButtonSolid: colours.colourBlack5,
  capsuleButtonSolidPressed: colours.colourBlack4,
  buttonHeightLg: "48px",
  buttonHeightMd: "40px",
  buttonHeightSm: "28px",
  buttonHeightCapsule: "32px",
  capsuleRadius: "16px",
  starRatingColour: colours.colourYellow2,
  checkboxIconHeight: "20px",
  radioButtonIconHeight: "20px",
  brandPrimaryPaleHighlighted: colours.datePickerHoverHighlight,
  brandPrimaryPale: colours.datePickerHover,

  // table
  tableHeaderShadow: "0 2px 4px 0 rgba(23, 38, 51, 0.04)",
  tableBackground: colours.colourWhite,
  tableBorderRaduis: "4px",
  tablDataRowPadding: "24px",
  tableDataRowHeight: "64px",
  tableHeaderHeight: "56px",
  tableRowSeperator: colours.colourBlack10,
  tableRowHover: colours.colourBlack10,

  // Toggle
  toggleBackgroundColor: colours.colourBlack5,
  toggleCircleColor: colours.colourWhite,
  toggleCircleBorderColor: "rgba(23, 38, 51, 0.08)",
  toggleTransitionSpeed: ".4s",

  // Switch
  switchCircleColor: colours.colourWhite,
  switchTransitionSpeed: ".4s",
  switchOffBackgroundColor: colours.colourWhite,
  switchOnBackgroundColor: colours.colourGreen2,

  // Modal
  modalMaxWidth: "660px",

  // Progress Bar
  progressBarFillColor: colours.colourYellow2,
  progressBarBackgroundColor: colours.colourBlack10,
  progressBarDefaultHeight: 4,

  // Header
  headerShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.08)",
  headerHeight: "64px",
  headerPadding: "20px",
  headerMaxWidth: "972px",
  ipadLandscapeHeaderMaxWidth: "884px",
  mobileHeaderPadding: "16px",
  mobileHeaderHeight: "60px",
  headerBackgroundColor: colours.colourWhite,
  actionButtonsContainerShadow: "0 -2px 4px 0 rgba(23, 38, 51, 0.08)",

  // Step
  borderColor: colours.colourBlack10,
  textColour: colours.colourBlack3,
  stepHeight: "49px",
  stepPadding: "14px",

  // Search
  searchBorder: "1px solid rgba(23, 38, 51, 0.08)",
  searchBorderShadow: "0 4px 12px 0 rgba(23, 38, 51, 0.16)",

  //Wizard form
  formContainerPadding: "20px",
  formContainerMaxWidth: "730px",
  ipadLandscapeFormContainerMaxWidth: "884px",
  mobileFormContainerPadding: "16px",

  //form panel
  panelShadow: "0 2px 2px 0 rgba(23, 38, 51, 0.04)",

  dotFooterFontSize: "25px",

  //form description
  formFooteDescriptionPaddingBottom: "24px",
  formFooteDescriptionMarginBottom: "40px",
  mobileFormFooteDescriptionMarginBottom: "24px",

  // tabs
  tabStripFirstChildLeftMargin: "24px",
  tabStripItemLeftRightMargin: "12px",
  tabStripItemTopBottomMargin: "20px",
  tabStripBorderBottomColour: colours.colourBlack10,

  // Common
  panelBorder: "1px solid rgba(23, 38, 51, 0.08)",
  boxShadow: "0px 4px 12px 0px rgba(23, 38, 51, 0.16)",
  mobileBoxShadow: "0px 2px 4px 0px rgba(23, 38, 51, 0.08)",

  //Gradient for image
  imageBackgroundGradient:
    "linear-gradient(-180deg, rgba(23, 38, 51, 0) 0%, rgba(23, 38, 51, 0.16) 50%, rgba(23, 38, 51, 0.8) 100%)",
});
