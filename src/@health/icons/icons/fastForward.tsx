import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FastForward = forwardRef(
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
        <g fill="#9ba4ab" clipPath="url(#prefix__a)">
          <path d="M4.69 18.4c-.27 0-.54-.06-.79-.19-.59-.3-.96-.9-.96-1.56v-9.3a1.754 1.754 0 012.79-1.41l6.31 4.65c.45.33.71.85.71 1.41s-.26 1.08-.71 1.41l-6.31 4.65c-.31.23-.67.34-1.04.34zm0-11.3s-.09.02-.12.03c-.05.03-.14.09-.14.22v9.29c0 .13.09.2.14.22s.15.06.26-.02l6.31-4.65c.09-.07.1-.15.1-.2s-.01-.14-.1-.2l-6.3-4.64a.226.226 0 00-.15-.05z" />
          <path d="M13 18.4c-.27 0-.54-.06-.79-.19-.59-.3-.96-.9-.96-1.56v-9.3a1.754 1.754 0 012.79-1.41l6.31 4.65c.45.33.71.85.71 1.41s-.26 1.08-.71 1.41l-6.31 4.65c-.31.23-.67.34-1.04.34zm0-11.3s-.09.02-.12.03c-.05.03-.14.09-.14.22v9.29c0 .13.09.2.14.22s.15.06.26-.02l6.31-4.65c.09-.07.1-.15.1-.2s-.01-.14-.1-.2l-6.31-4.65a.226.226 0 00-.15-.05z" />
        </g>
      </StyledSVG>
    );
  },
);

export default FastForward;
