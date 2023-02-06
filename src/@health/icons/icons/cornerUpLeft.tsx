import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CornerUpLeft = forwardRef(
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
          d="M9 14.75c-.19 0-.38-.07-.53-.22l-5-5a.754.754 0 010-1.06l5-5c.29-.29.77-.29 1.06 0s.29.77 0 1.06L5.06 9l4.47 4.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M20 20.75c-.41 0-.75-.34-.75-.75v-7c0-.87-.34-1.68-.95-2.3-.6-.6-1.44-.95-2.3-.95H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c1.27 0 2.46.49 3.36 1.39.9.9 1.39 2.09 1.39 3.36v7c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CornerUpLeft;
