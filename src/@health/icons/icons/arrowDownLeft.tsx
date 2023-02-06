import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowDownLeft = forwardRef(
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
          d="M7 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l10-10c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-10 10c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M17 17.75H7c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v9.25H17c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ArrowDownLeft;
