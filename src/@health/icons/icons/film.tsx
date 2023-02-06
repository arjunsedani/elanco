import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Film = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h14c1.52 0 2.75 1.23 2.75 2.75v14c0 1.52-1.23 2.75-2.75 2.75zm-1.25-1.5H19c.69 0 1.25-.56 1.25-1.25v-1.25h-2.5v2.5zm-10 0h8.5v-7.5h-8.5v7.5zm-4-2.5V19c0 .69.56 1.25 1.25 1.25h1.25v-2.5h-2.5zm14-1.5h2.5v-3.5h-2.5v3.5zm-14 0h2.5v-3.5h-2.5v3.5zm14-5h2.5v-3.5h-2.5v3.5zm-10 0h8.5v-7.5h-8.5v7.5zm-4 0h2.5v-3.5h-2.5v3.5zm14-5h2.5V5c0-.69-.56-1.25-1.25-1.25h-1.25v2.5zm-14 0h2.5v-2.5H5c-.69 0-1.25.56-1.25 1.25v1.25z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Film;
