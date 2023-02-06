import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MapPin = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <path d="M12 21.75c-.69 0-1.34-.27-1.82-.75l-4.2-4.2c-1.61-1.61-2.5-3.75-2.5-6.02s.89-4.42 2.5-6.02 3.75-2.5 6.02-2.5 4.41.89 6.02 2.5c1.61 1.61 2.5 3.75 2.5 6.02s-.89 4.42-2.5 6.02l-4.2 4.2c-.48.48-1.15.76-1.82.76zm0-18c-1.88 0-3.64.73-4.96 2.06-1.33 1.33-2.06 3.09-2.06 4.96s.73 3.64 2.06 4.96l4.2 4.2c.41.4 1.12.41 1.53 0l4.2-4.2c1.33-1.33 2.06-3.09 2.06-4.96s-.73-3.64-2.06-4.96a6.968 6.968 0 00-4.96-2.06z" />
        <path d="M12 21.75c-.69 0-1.34-.27-1.82-.75l-4.2-4.2c-1.61-1.61-2.5-3.75-2.5-6.02s.89-4.42 2.5-6.02 3.75-2.5 6.02-2.5 4.41.89 6.02 2.5c1.61 1.61 2.5 3.75 2.5 6.02s-.89 4.42-2.5 6.02l-4.2 4.2c-.48.48-1.15.76-1.82.76zm0-18c-1.88 0-3.64.73-4.96 2.06-1.33 1.33-2.06 3.09-2.06 4.96s.73 3.64 2.06 4.96l4.2 4.2c.41.4 1.12.41 1.53 0l4.2-4.2c1.33-1.33 2.06-3.09 2.06-4.96s-.73-3.64-2.06-4.96a6.968 6.968 0 00-4.96-2.06z" />
        <path d="M12 14.19c-1.88 0-3.42-1.53-3.42-3.42S10.11 7.35 12 7.35s3.42 1.53 3.42 3.42-1.53 3.42-3.42 3.42zm0-5.33a1.92 1.92 0 10.001 3.841A1.92 1.92 0 0012 8.86z" />
      </g>
    </StyledSVG>
  );
});

export default MapPin;
