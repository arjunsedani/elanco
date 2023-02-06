import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Info241 = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#9BA4AB"
          strokeWidth={1.5}
          fill="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12V16"
          stroke="#9BA4AB"
          strokeWidth={1.5}
          fill="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8H12.01"
          stroke="#9BA4AB"
          strokeWidth={1.5}
          fill="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default Info241;
