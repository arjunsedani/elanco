import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Facebook = forwardRef(
  (props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
            d="M16.5 21.75h-9c-2.89 0-5.25-2.35-5.25-5.25v-9c0-2.9 2.35-5.25 5.25-5.25h9c2.89 0 5.25 2.35 5.25 5.25v9.01c0 2.89-2.35 5.25-5.25 5.25zm-2.85-1.5h2.85c2.07 0 3.75-1.68 3.75-3.75v-9c0-2.07-1.68-3.75-3.75-3.75h-9c-2.07 0-3.75 1.68-3.75 3.75v9c0 2.07 1.68 3.75 3.75 3.75h4.65v-6.6H11.1a.749.749 0 110-1.5h1.05v-1.09c0-1.88 1.53-3.41 3.4-3.41h.95c.41 0 .75.34.75.75s-.34.75-.75.75h-.95c-1.05 0-1.91.85-1.91 1.91v1.09h2.85c.41 0 .75.34.75.75s-.34.75-.75.75h-2.85v6.6z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default Facebook;
