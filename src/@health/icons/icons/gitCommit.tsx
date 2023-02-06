import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const GitCommit = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12,16.75c-2.62,0-4.75-2.13-4.75-4.75s2.13-4.75,4.75-4.75,4.75,2.13,4.75,4.75-2.13,4.75-4.75,4.75Zm0-8c-1.79,0-3.25,1.46-3.25,3.25s1.46,3.25,3.25,3.25,3.25-1.46,3.25-3.25-1.46-3.25-3.25-3.25Z"
          fill="#9BA4AB"
        />
        <path
          d="M7,12.75H1.05c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75H7c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M22.96,12.75h-5.95c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h5.95c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default GitCommit;
