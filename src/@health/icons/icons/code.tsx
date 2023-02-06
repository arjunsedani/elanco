import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Code = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10.22 20.75c-.05 0-.11 0-.16-.02a.756.756 0 01-.57-.9l3.56-15.99c.09-.4.5-.66.9-.57.4.09.66.49.57.9l-3.56 16c-.08.35-.39.59-.73.59zm7.78-4c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L20.94 12l-3.47-3.47c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l4 4c.29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22zm-12 0c-.19 0-.38-.07-.53-.22l-4-4a.754.754 0 010-1.06l4-4c.29-.29.77-.29 1.06 0s.29.77 0 1.06L3.06 12l3.47 3.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Code;
