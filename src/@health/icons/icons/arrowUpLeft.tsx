import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowUpLeft = forwardRef(
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
          d="M17 17.75c-.19 0-.38-.07-.53-.22l-10-10c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10 10c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M7 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75H7.75V17c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ArrowUpLeft;
