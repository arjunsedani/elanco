import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ChevronDown = forwardRef(
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
            d="M12 15.75c-.19 0-.38-.07-.53-.22l-6-6c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 13.94l5.47-5.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default ChevronDown;
