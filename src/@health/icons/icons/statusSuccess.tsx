import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StatusSuccess = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <circle cx="12" cy="12" r="12" fill="#13C998" />
        <path
          d="M17.3334 8.5L10.0001 15.8333L6.66675 12.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default StatusSuccess;
