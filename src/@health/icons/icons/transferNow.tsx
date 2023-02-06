import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TransferNow = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M4.718 15.979C3.658 14.919 3 13.457 3 11.849C3 8.632 5.632 6 8.849 6L16 6.021"
          stroke="#9BA4AB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 8.021L16 6.021L14 4.021"
          stroke="#9BA4AB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.282 8.021C20.342 9.081 21 10.543 21 12.151C21 15.368 18.368 18 15.151 18L8 17.979"
          stroke="#9BA4AB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 15.979L8 17.979L10 19.979"
          stroke="#9BA4AB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </StyledSVG>
    );
  },
);
export default TransferNow;
