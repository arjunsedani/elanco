import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CornerUpRight = forwardRef(
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
          d="M15 14.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L18.94 9l-4.47-4.47c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l5 5c.29.29.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M4 20.75c-.41 0-.75-.34-.75-.75v-7c0-1.27.49-2.46 1.39-3.36.9-.9 2.09-1.39 3.36-1.39h12c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.87 0-1.68.34-2.3.95-.61.61-.95 1.43-.95 2.3v7c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CornerUpRight;
