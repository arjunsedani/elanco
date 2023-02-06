import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Move = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M7 21.75H3c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H7c.41 0 .75.34.75.75s-.34.75-.75.75zM3 7.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H3.75V7c0 .41-.34.75-.75.75zM21 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V17c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
      <path
        d="M21 21.75c-.19 0-.38-.07-.53-.22l-18-18c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l18 18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
      <path
        d="M3 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l18-18c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-18 18c-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
      <path
        d="M21 7.75c-.41 0-.75-.34-.75-.75V3.75H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Move;
