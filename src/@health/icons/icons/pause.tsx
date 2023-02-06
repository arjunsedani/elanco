import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Pause = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <g fill="#9ba4ab" clipPath="url(#prefix__a)">
        <path d="M16 18.75c-1.24 0-2.25-1.01-2.25-2.25v-9c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v9c0 1.24-1.01 2.25-2.25 2.25zm0-12c-.41 0-.75.34-.75.75v9c0 .41.34.75.75.75s.75-.34.75-.75v-9c0-.41-.34-.75-.75-.75zM8 18.75c-1.24 0-2.25-1.01-2.25-2.25v-9c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v9c0 1.24-1.01 2.25-2.25 2.25zm0-12c-.41 0-.75.34-.75.75v9c0 .41.34.75.75.75s.75-.34.75-.75v-9c0-.41-.34-.75-.75-.75z" />
      </g>
    </StyledSVG>
  );
});

export default Pause;
