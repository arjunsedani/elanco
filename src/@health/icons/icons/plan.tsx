import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Plan = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M7.09 8.42c-.17-.39-.08-.83.21-1.13.3-.29.74-.38 1.12-.21l9.98 4.41c.39.17.63.58.6 1.01-.03.43-.34.79-.75.9l-3.74.99a.18.18 0 00-.12.12l-.99 3.74c-.11.42-.47.72-.9.75-.43.03-.83-.21-1.01-.6l-4.4-9.98zM8.4 8.4l3.98 9 .83-3.17c.13-.5.52-.89 1.02-1.02l3.17-.83-9-3.98zM12 22.5c5.8 0 10.5-4.7 10.5-10.5S17.8 1.5 12 1.5 1.5 6.2 1.5 12 6.2 22.5 12 22.5zm0 1.5C5.37 24 0 18.63 0 12S5.37 0 12 0s12 5.37 12 12-5.37 12-12 12z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Plan;
