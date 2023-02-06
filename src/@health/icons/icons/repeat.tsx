import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Repeat = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <clipPath id="prefix__b">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <g fill="#9ba4ab" clipPath="url(#prefix__b)">
          <path d="M4.72 16.73c-.19 0-.38-.07-.53-.22a6.544 6.544 0 01-1.94-4.66c0-3.64 2.96-6.6 6.6-6.6l7.15.02c.41 0 .75.34.75.75s-.34.75-.75.75l-7.15-.02c-2.81 0-5.1 2.29-5.1 5.1 0 1.35.53 2.63 1.5 3.6.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z" />
          <path d="M14 8.77c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.47-1.47-1.47-1.47c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22zM15.15 18.75L8 18.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l7.15.02c2.81 0 5.1-2.29 5.1-5.1 0-1.35-.53-2.63-1.5-3.6a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0a6.544 6.544 0 011.94 4.66c0 3.64-2.96 6.6-6.6 6.6z" />
          <path d="M10 20.73c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z" />
        </g>
      </g>
    </StyledSVG>
  );
});

export default Repeat;
