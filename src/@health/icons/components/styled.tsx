import { styled, css } from "@health/theme-common";
import { StyledSvgProps } from "../interfaces";

export const StyledSVG = styled.svg<StyledSvgProps>`
  fill: none;
  ${({ useFillColorOnly, fill, stroke }) => {
    if (useFillColorOnly)
      return css`
        stroke: none;
        path {
          ${(stroke ?? fill) && `fill: ${stroke ?? fill};`}
        }
      `;

    return css`
      path {
        ${fill && `fill: ${fill};`}
        ${stroke && `stroke: ${stroke};`}
      }
    `;
  }}
`;
