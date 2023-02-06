import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TypeErrorSizeLarge48Px = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 48 48"
        fill="none"
        {...props}
      >
        <circle cx={24} cy={24} r={24} fill="#FF4724" />
        <path
          d="M19.86 14H28.14L34 19.86V28.14L28.14 34H19.86L14 28.14V19.86L19.86 14Z"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 20V24"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 28H24.01"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default TypeErrorSizeLarge48Px;
