import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Twitch = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M8 21.75a.753.753 0 01-.75-.75v-3.25H5c-.96 0-1.75-.79-1.75-1.75V7.41c0-.46.19-.91.51-1.24l3.41-3.41c.33-.33.77-.51 1.24-.51H19c.96 0 1.75.79 1.75 1.75v8.59c0 .47-.18.91-.51 1.24l-3.41 3.41c-.33.33-.78.51-1.24.51h-3.28l-3.78 3.78c-.14.14-.34.22-.53.22zm.41-18c-.07 0-.13.03-.18.07L4.82 7.23s-.07.11-.07.18V16c0 .14.11.25.25.25h3c.41 0 .75.34.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h3.59c.07 0 .13-.03.18-.07l3.41-3.41s.07-.11.07-.18V4c0-.14-.11-.25-.25-.25H8.41zm7.59 7c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zm-4 0c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Twitch;
