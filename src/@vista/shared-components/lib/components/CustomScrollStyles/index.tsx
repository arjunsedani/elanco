import { css } from "@health/theme-common";

/**  Container styles
 *   need overflow property
 *   height or  width mandatory to scroll
 */

/**
 * Page Scrolling Container Styles
 * height=100vh, width=100vw
 * overflow-y: auto, overflow-x: auto
 */
export enum Direction {
  X = "X",
  Y = "Y",
  XY = "XY",
}

export enum ScrollBarDir {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

const DEFAULT_SCROLLBAR_WIDTH = 40;
const DEFAULT_THUMB_BORDER_WIDTH = 15;

export interface CustomScrollBarProps {
  scrollDirection: Direction;
  scrollBarWidthX?: number;
  scrollBarWidthY?: number;
  trackBarColorX?: string;
  trackBarColorY?: string;
  /*
   * trackBarStyles can take only border
   */
  trackBarStylesX?: string;
  trackBarStylesY?: string;
  scrollCornerStyles?: string;
  scrollBarColorX?: string;
  scrollBarColorY?: string;
  scrollBarThumbWidthX?: number;
  scrollBarThumbWidthY?: number;
  isScrollBarCurved?: boolean;
  showScrollOnHoverX?: boolean;
  showScrollOnHoverY?: boolean;
}

const scrollBarThumbBgX = css<CustomScrollBarProps>`
  background-color: ${(props) =>
    props.trackBarColorX || props.theme.color_slate20};
`;

const scrollBarThumbBgY = css<CustomScrollBarProps>`
  background-color: ${(props) =>
    props.trackBarColorY || props.theme.color_slate20};
`;

const getBorderProp = (propWidth?: number) => {
  const borderWidth = propWidth || DEFAULT_THUMB_BORDER_WIDTH;
  return `${borderWidth}px solid transparent`;
};

const scrollBarMapCss = css<CustomScrollBarProps>`
  border-radius: 100px;
  background-clip: content-box;
`;

const scrollBarThumbX = css<CustomScrollBarProps>`
  ${scrollBarThumbBgX};
  border: ${(props) => getBorderProp(props.scrollBarThumbWidthX)};
  ${scrollBarMapCss};
`;

const scrollBarThumbY = css<CustomScrollBarProps>`
  ${scrollBarThumbBgY};
  border: ${(props) => getBorderProp(props.scrollBarThumbWidthY)};
  ${scrollBarMapCss};
`;

const scrollBarTrackBgX = css<CustomScrollBarProps>`
  background-color: ${(props) =>
    props.scrollBarColorX || props.theme.color_white};
`;

const scrollBarTrackBgY = css<CustomScrollBarProps>`
  background-color: ${(props) =>
    props.scrollBarColorY || props.theme.color_white};
`;

const scrollBarTrackX = css<CustomScrollBarProps>`
  ${scrollBarTrackBgX};
  border-radius: ${(props) => (props.isScrollBarCurved ? "100px" : "0px")};
  ${(props) => props.trackBarStylesX};
`;

const scrollBarTrackY = css<CustomScrollBarProps>`
  ${scrollBarTrackBgY};
  border-radius: ${(props) => (props.isScrollBarCurved ? "100px" : "0px")};
  ${(props) => props.trackBarStylesY};
`;

const isDesiredDirection = (
  direct: Direction,
  scrollDir: ScrollBarDir,
  showScrollOnHover?: boolean
) => {
  const hoverVal = showScrollOnHover === undefined || showScrollOnHover;

  return direct === Direction.XY && hoverVal
    ? true
    : scrollDir === ScrollBarDir.HORIZONTAL &&
      direct === Direction.X &&
      hoverVal
    ? true
    : scrollDir === ScrollBarDir.VERTICAL && direct === Direction.Y && hoverVal;
};

const setScrollBarWidth = (
  scrollBarWidth: number,
  scrollDirection: Direction,
  augDirection: ScrollBarDir
) =>
  isDesiredDirection(scrollDirection, augDirection)
    ? `${scrollBarWidth}px`
    : "0px";

export const CustomScrollBarStylesCss = css<CustomScrollBarProps>`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ${(props) => {
    return props.showScrollOnHoverX !== undefined ||
      props.showScrollOnHoverY !== undefined
      ? `-ms-overflow-style: -ms-autohiding-scrollbar;`
      : ``;
  }}

  ::-webkit-resizer {
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${(props) =>
      props.scrollBarColorX || props.theme.color_white};
    ${(props) => props.scrollCornerStyles};
  }

  ::-webkit-scrollbar:vertical {
    width: ${(props) => {
      const width = props.scrollBarWidthY || DEFAULT_SCROLLBAR_WIDTH;
      return setScrollBarWidth(
        width,
        props.scrollDirection,
        ScrollBarDir.VERTICAL
      );
    }};
  }

  ::-webkit-scrollbar:horizontal {
    height: ${(props) => {
      const height = props.scrollBarWidthX || DEFAULT_SCROLLBAR_WIDTH;
      return setScrollBarWidth(
        height,
        props.scrollDirection,
        ScrollBarDir.HORIZONTAL
      );
    }};
  }

  ::-webkit-scrollbar-thumb:vertical {
    ${(props) =>
      isDesiredDirection(
        props.scrollDirection,
        ScrollBarDir.VERTICAL,
        props.showScrollOnHoverY
      ) && scrollBarThumbY};
  }

  ::-webkit-scrollbar-thumb:horizontal {
    ${(props) => {
      return (
        isDesiredDirection(
          props.scrollDirection,
          ScrollBarDir.HORIZONTAL,
          props.showScrollOnHoverX
        ) && scrollBarThumbX
      );
    }};
  }

  ::-webkit-scrollbar-track:vertical {
    ${(props) =>
      isDesiredDirection(props.scrollDirection, ScrollBarDir.VERTICAL) &&
      scrollBarTrackY};
  }

  ::-webkit-scrollbar-track:horizontal {
    ${(props) =>
      isDesiredDirection(props.scrollDirection, ScrollBarDir.HORIZONTAL) &&
      scrollBarTrackX};
  }
`;
