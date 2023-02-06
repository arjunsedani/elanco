import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const SkipBackward = forwardRef(
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
            d="M6 18c-.41 0-.75-.34-.75-.75V6.75c0-.41.34-.75.75-.75s.75.34.75.75v10.5c0 .41-.34.75-.75.75zm11.96-.25a1.8 1.8 0 01-.95-.27l-6.34-3.96c-.53-.33-.84-.89-.84-1.51s.31-1.19.84-1.52l6.34-3.96c.55-.34 1.25-.36 1.81-.05.57.31.92.91.92 1.56v7.92a1.772 1.772 0 01-1.78 1.78zm0-10s-.1.01-.15.04l-6.34 3.96c-.12.07-.13.18-.13.24s.02.17.13.24l6.34 3.96c.12.08.24.04.29 0 .06-.03.15-.1.15-.25V8.02c0-.15-.09-.22-.15-.25a.259.259 0 00-.14-.04zm-6.89 3.37z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default SkipBackward;
