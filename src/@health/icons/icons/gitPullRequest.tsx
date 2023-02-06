import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const GitPullRequest = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M18,21.75c-2.07,0-3.75-1.68-3.75-3.75s1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75Zm0-6c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.01,2.25-2.25-1.01-2.25-2.25-2.25Z"
          fill="#9BA4AB"
        />
        <path
          d="M6,9.75c-2.07,0-3.75-1.68-3.75-3.75s1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75Zm0-6c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25,2.25-1.01,2.25-2.25-1.01-2.25-2.25-2.25Z"
          fill="#9BA4AB"
        />
        <path
          d="M18,15.75c-.41,0-.75-.34-.75-.75v-7c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37h-3c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h3c.73,0,1.42,.29,1.94,.81s.81,1.21,.81,1.94v7c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M6,21.75c-.41,0-.75-.34-.75-.75V9c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v12c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default GitPullRequest;
