import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const GitBranch = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        useFillColorOnly
        {...props}
      >
        <path
          d="M6,15.75c-.41,0-.75-.34-.75-.75V3c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V15c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M18,9.75c-2.07,0-3.75-1.68-3.75-3.75s1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75Zm0-6c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.01,2.25-2.25-1.01-2.25-2.25-2.25Z"
          fill="#9BA4AB"
        />
        <path
          d="M6,21.75c-2.07,0-3.75-1.68-3.75-3.75s1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75Zm0-6c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.01,2.25-2.25-1.01-2.25-2.25-2.25Z"
          fill="#9BA4AB"
        />
        <path
          d="M9,18.75c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75c2.2,0,4.28-.86,5.83-2.42,1.56-1.56,2.42-3.63,2.42-5.83,0-.41,.34-.75,.75-.75s.75,.34,.75,.75c0,2.6-1.01,5.05-2.86,6.89-1.84,1.85-4.29,2.86-6.89,2.86Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default GitBranch;
