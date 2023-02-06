import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Plus = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          d="M12.75 8c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5 8c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM16 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-8-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zM11.25 8v8h1.5V8h-1.5zM16 11.25H8v1.5h8v-1.5z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Plus;
