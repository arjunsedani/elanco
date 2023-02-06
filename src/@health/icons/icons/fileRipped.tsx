import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FileRipped = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <g
          stroke="#9BA4AB"
          strokeWidth={1.3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="scale(1.55)"
        >
          <path d="M5 4H9" />
          <path d="M5 7H9" />
          <path d="M2 2C2 1.44772 2.44772 1 3 1H11C11.5523 1 12 1.44772 12 2V13L9.5 11.5L7 13L4.5 11.5L2 13V2Z" />
        </g>
      </StyledSVG>
    );
  },
);

export default FileRipped;
