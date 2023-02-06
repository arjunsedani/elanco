import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LogOut = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
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
        d="M9,21.75H5c-.73,0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V5c0-.73,.29-1.42,.81-1.94s1.21-.81,1.94-.81h4c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75H5c-.33,0-.65,.13-.88,.37s-.37,.55-.37,.88v14c0,.33,.13,.65,.37,.88s.55,.37,.88,.37h4c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
        fill="#9BA4AB"
      />
      <path
        d="M16,17.75c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06l4.47-4.47-4.47-4.47c-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0l5,5c.29,.29,.29,.77,0,1.06l-5,5c-.15,.15-.34,.22-.53,.22Z"
        fill="#9BA4AB"
      />
      <path
        d="M21,12.75H9c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h12c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
        fill="#9BA4AB"
      />
    </StyledSVG>
  );
});

export default LogOut;
