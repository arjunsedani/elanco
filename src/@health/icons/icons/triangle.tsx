import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Triangle = forwardRef(
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
            d="M19.43 20.75H4.57c-1.01 0-1.91-.53-2.4-1.41a2.74 2.74 0 01.05-2.78L9.65 4.4c.5-.82 1.38-1.32 2.35-1.32s1.84.49 2.35 1.32l7.43 12.16c.53.86.54 1.9.05 2.78a2.71 2.71 0 01-2.4 1.4zM12 4.59c-.45 0-.83.22-1.07.6L3.5 17.35c-.24.39-.25.86-.02 1.26.22.4.63.64 1.09.64h14.87c.46 0 .87-.24 1.09-.64.22-.4.22-.87-.02-1.26L13.07 5.18c-.23-.38-.62-.6-1.07-.6zm-1.71.21z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default Triangle;
