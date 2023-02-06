import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Twitter = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M3 17.3a.75.75 0 01-.74-.62c-.06-.38.17-.74.53-.85.12-.04.91-.3 1.6-.53-2.44-3.17-2.57-7.58-.21-10.88.15-.21.4-.33.66-.31.26.02.49.17.61.39.93 1.72 2.5 3.18 4.1 3.85.48-2.54 2.48-4.25 5.14-4.25 1.74 0 3.05.59 3.99 1.8h2.31c.28 0 .53.15.66.4.13.24.12.54-.04.77l-1.8 2.7c-.23.34-.69.44-1.04.21a.755.755 0 01-.21-1.04l1.02-1.53h-1.3c-.25 0-.49-.13-.63-.34-.68-1.02-1.56-1.46-2.97-1.46-2.17 0-3.68 1.52-3.75 3.77 0 .23-.12.44-.3.57-.18.14-.41.19-.63.13-1.93-.47-3.88-1.91-5.22-3.8-1.5 2.91-.98 6.41 1.43 8.85.18.18.26.45.2.7s-.25.46-.49.54c-2.73.91-2.73.92-2.81.93-.04 0-.08.01-.13.01z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Twitter;
