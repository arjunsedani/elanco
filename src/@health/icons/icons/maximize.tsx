import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Maximize = forwardRef(
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
        <path
          d="M21 7.75c-.41 0-.75-.34-.75-.75V3.75H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M15 9.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6-6c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22zM7 21.75H3c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H7c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M3 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6-6c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22zM4 11.75c-.41 0-.75-.34-.75-.75V6c0-1.52 1.23-2.75 2.75-2.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.69 0-1.25.56-1.25 1.25v5c0 .41-.34.75-.75.75zM18 20.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.69 0 1.25-.56 1.25-1.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 1.52-1.23 2.75-2.75 2.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Maximize;
