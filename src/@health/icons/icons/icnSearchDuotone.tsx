import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const IcnSearchDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M18 18L22 22"
          stroke="#9BA4AB"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 11C19 13.2713 18.0535 15.3216 16.5333 16.7778C15.0964 18.1543 13.147 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#59656D"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M15.5 12C15.5 12.9937 15.0859 13.8907 14.4208 14.5278C13.7922 15.13 12.9393 15.5 12 15.5"
          stroke="#EEF2F5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default IcnSearchDuotone;
