import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Drag = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={ref}
      width="1.5em"
      height="1.5em"
      useFillColorOnly
      {...props}
    >
      <path
        d="M5.5 13.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm13 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-13-5.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm13 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-13 4h13v-1.5h-13v1.5zm0-4h13v-1.5h-13v1.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Drag;
