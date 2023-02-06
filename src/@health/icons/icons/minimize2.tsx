import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Minimize2 = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M10,20.75c-.41,0-.75-.34-.75-.75v-5.25H4c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h6c.41,0,.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M20,10.75h-6c-.41,0-.75-.34-.75-.75V4c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v5.25h5.25c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M14,10.75c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06l7-7c.29-.29,.77-.29,1.06,0s.29,.77,0,1.06l-7,7c-.15,.15-.34,.22-.53,.22Z"
          fill="#9BA4AB"
        />
        <path
          d="M3,21.75c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06l7-7c.29-.29,.77-.29,1.06,0s.29,.77,0,1.06l-7,7c-.15,.15-.34,.22-.53,.22Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default Minimize2;
