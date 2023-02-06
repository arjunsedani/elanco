import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TypeSuccessSizeLarge48Px = React.forwardRef<
  SVGSVGElement,
  StyledSvgProps
>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <circle cx={24} cy={24} r={24} fill="#13C998" />
      <path
        d="M32 19L21 30L16 25"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSVG>
  );
});

export default TypeSuccessSizeLarge48Px;
