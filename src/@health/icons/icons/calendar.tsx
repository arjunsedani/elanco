import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Calendar = forwardRef(
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
            d="M18 21.75H6c-2.07 0-3.75-1.68-3.75-3.75V7.5c0-2.07 1.68-3.75 3.75-3.75h.75V3c0-.41.34-.75.75-.75s.75.34.75.75v.75h7.5V3c0-.41.34-.75.75-.75s.75.34.75.75v.75H18c2.07 0 3.75 1.68 3.75 3.75V18c0 2.07-1.68 3.75-3.75 3.75zM3.75 10.25V18c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-7.75H3.75zm0-1.5h16.5V7.5c0-1.24-1.01-2.25-2.25-2.25h-.75V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75h-7.5V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75H6c-1.24 0-2.25 1.01-2.25 2.25v1.25z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default Calendar;
