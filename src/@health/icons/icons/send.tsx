import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Send = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <path d="M11.63 21.75c-.1 0-.2 0-.3-.02-.76-.12-1.36-.69-1.53-1.44l-1.72-7.76L3 7.45a1.873 1.873 0 011.32-3.2h15.55c.68 0 1.29.36 1.63.95.34.6.33 1.3-.03 1.89l-8.25 13.75c-.34.57-.95.91-1.6.91zm-7.31-16c-.23 0-.32.16-.35.23-.03.07-.08.25.08.41l5.23 5.23c.1.1.17.23.2.37l1.77 7.97c.05.22.23.28.31.29.08 0 .26.02.38-.18l8.25-13.75c.1-.17.04-.32 0-.38a.363.363 0 00-.33-.19H4.32z" />
        <path d="M8.75 12.9c-.27 0-.52-.14-.66-.39-.2-.36-.06-.82.3-1.02L20.48 4.9c.37-.2.82-.06 1.02.3.2.36.06.82-.3 1.02L9.11 12.81c-.11.06-.24.09-.36.09z" />
      </g>
    </StyledSVG>
  );
});

export default Send;
