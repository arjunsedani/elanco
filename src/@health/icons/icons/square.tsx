import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Square = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M18.42 21H5.58C4.16 21 3 19.84 3 18.42V5.58C3 4.16 4.16 3 5.58 3h12.83c1.42 0 2.58 1.16 2.58 2.58v12.83c0 .69-.27 1.34-.76 1.83s-1.14.76-1.83.76zM5.58 4.5c-.6 0-1.08.49-1.08 1.08v12.83c0 .6.49 1.08 1.08 1.08h12.83c.29 0 .56-.11.77-.32.2-.21.32-.48.32-.77V5.58c0-.6-.49-1.08-1.08-1.08H5.58z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Square;
