import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowRight = forwardRef(
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
          d="M19 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M12 19.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L17.94 12l-6.47-6.47c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l7 7c.29.29.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ArrowRight;
