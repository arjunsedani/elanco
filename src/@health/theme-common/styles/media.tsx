import { css } from "styled-components";

export const breakpoints = {
  ipadLandscape: 1440,
  tabletLandscape: 1280,
  ipadPortrait: 1024,
  mobile: 768,
};

/**
 * // style for desktop screens
 * ${media.query.ipadLandscape`
 * // style related to ipad landscape
 * `}
 * ${media.query.ipadPortrait`
 * // style related to ipad portrait
 * `}
 * ${media.query.mobile`
 * // style related to mobile
 * `}
 */

/**
 * Break points
 * desktop : 1440 and above
 * ipad landscape : 1439 - 1024
 * tablet landscape : 1280 - 800
 * ipad portrait : 1023 - 768
 * mobile : 767 and below
 */
// generate string tamplate for media queries
const getMediaBreakpoints = function () {
  const getBreakpoint =
    (range: "max" | "min", value: number) =>
    (literals: TemplateStringsArray, ...args: any[]) =>
      css`
        @media (${range}-width: ${value}px) {
          ${css(literals, ...args)}
        }
      `;

  const mediaBreakpoints = (
    Object.keys(breakpoints) as Array<keyof typeof breakpoints>
  ).reduce<QueryType>((media, breakpoint) => {
    media[breakpoint] = getBreakpoint("max", breakpoints[breakpoint] - 1);
    return media;
  }, {} as QueryType);

  mediaBreakpoints.upToMediumSize = getBreakpoint("max", breakpoints.mobile);
  mediaBreakpoints.fromMediumSize = getBreakpoint("min", breakpoints.mobile);
  mediaBreakpoints.upToLargeSize = getBreakpoint(
    "max",
    breakpoints.tabletLandscape,
  );
  mediaBreakpoints.fromLargeSize = getBreakpoint(
    "min",
    breakpoints.tabletLandscape,
  );

  return mediaBreakpoints;
};
type QueryType = {
  [key in
    | keyof typeof breakpoints
    | "upToMediumSize"
    | "fromMediumSize"
    | "upToLargeSize"
    | "fromLargeSize"]: Function;
};
export const query: QueryType = getMediaBreakpoints();

export const isMobileDevice = () => window.innerWidth < breakpoints.mobile; // TODO this matches better with the mobile capability !window.matchMedia( "(hover: none)" ).matches
