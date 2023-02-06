import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Check = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M9 18.25c-.19 0-.38-.07-.53-.22l-5-5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L9 16.44 19.47 5.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-11 11c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Check;
