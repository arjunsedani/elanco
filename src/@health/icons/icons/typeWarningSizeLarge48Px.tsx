import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TypeWarningSizeLarge48Px = React.forwardRef<
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
      <circle cx={24} cy={24} r={24} fill="#FFB024" />
      <path
        d="M22.29 14.8602L13.82 29.0002C13.6454 29.3026 13.553 29.6455 13.552 29.9947C13.551 30.3439 13.6415 30.6873 13.8144 30.9907C13.9874 31.2941 14.2367 31.547 14.5377 31.7241C14.8387 31.9012 15.1808 31.9964 15.53 32.0002H32.47C32.8192 31.9964 33.1613 31.9012 33.4623 31.7241C33.7633 31.547 34.0127 31.2941 34.1856 30.9907C34.3585 30.6873 34.449 30.3439 34.448 29.9947C34.4471 29.6455 34.3547 29.3026 34.18 29.0002L25.71 14.8602C25.5318 14.5663 25.2807 14.3233 24.9812 14.1547C24.6817 13.9861 24.3438 13.8975 24 13.8975C23.6563 13.8975 23.3184 13.9861 23.0188 14.1547C22.7193 14.3233 22.4683 14.5663 22.29 14.8602V14.8602Z"
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
});

export default TypeWarningSizeLarge48Px;
