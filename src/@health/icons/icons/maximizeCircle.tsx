import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MaximizeCircle = forwardRef(
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
          d="M12 21.75c-2.5 0-4.99-.95-6.89-2.85-1.84-1.84-2.86-4.29-2.86-6.89s1.01-5.05 2.86-6.89c3.8-3.8 9.99-3.8 13.79 0 3.8 3.8 3.8 9.99 0 13.79-1.9 1.9-4.4 2.85-6.89 2.85zm0-17.99c-2.11 0-4.23.8-5.83 2.41C4.61 7.73 3.75 9.8 3.75 12s.86 4.28 2.42 5.83c3.22 3.21 8.45 3.22 11.67 0s3.22-8.45 0-11.67a8.214 8.214 0 00-5.83-2.41z"
          fill="#9ba4ab"
        />
        <path
          d="M7.05 13.46c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.66 5.66c-.15.15-.34.22-.53.22zM14.12 17.7h-2.83c-.41 0-.75-.34-.75-.75v-2.83c0-.41.34-.75.75-.75s.75.34.75.75v2.08h2.08c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M11.29 17.7c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.66 5.66c-.15.15-.34.22-.53.22zM12.71 10.63c-.41 0-.75-.34-.75-.75V7.8H9.88c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.83c.41 0 .75.34.75.75v2.83c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default MaximizeCircle;
