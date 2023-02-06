import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const WindowsIcon = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 22 22"
        fill="none"
        {...props}
      >
        <path
          d="M9.28711 3.28516H3.28711V9.28516H9.28711V3.28516Z"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7148 3.28516H12.7148V9.28516H18.7148V3.28516Z"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7148 12.7139H12.7148V18.7139H18.7148V12.7139Z"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.28711 12.7139H3.28711V18.7139H9.28711V12.7139Z"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default WindowsIcon;
