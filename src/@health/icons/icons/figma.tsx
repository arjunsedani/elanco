import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Figma = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M9 21.75A3.751 3.751 0 016.75 15c-.91-.68-1.5-1.77-1.5-3s.59-2.32 1.5-3A3.751 3.751 0 019 2.25h6c2.07 0 3.75 1.68 3.75 3.75 0 1.22-.59 2.31-1.5 3 .14.11.28.22.4.35.71.71 1.1 1.65 1.1 2.65s-.39 1.94-1.1 2.65c-1.29 1.29-3.47 1.43-4.9.35v3c0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S7.76 20.25 9 20.25s2.25-1.01 2.25-2.25v-2.25H9zM12.75 12c0 .6.23 1.17.66 1.59.85.85 2.33.85 3.18 0 .42-.42.66-.99.66-1.59s-.23-1.17-.66-1.59c-.85-.85-2.33-.85-3.18 0-.43.42-.66.99-.66 1.59zM9 14.25h2.25v-4.5H9c-1.24 0-2.25 1.01-2.25 2.25S7.76 14.25 9 14.25zm6-6c1.24 0 2.25-1.01 2.25-2.25S16.24 3.75 15 3.75h-2.25v4.5H15zm-6 0h2.25v-4.5H9C7.76 3.75 6.75 4.76 6.75 6S7.76 8.25 9 8.25z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Figma;
