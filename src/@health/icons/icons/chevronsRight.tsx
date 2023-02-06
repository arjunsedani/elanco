import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ChevronsRight = forwardRef(
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
          d="M13 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L16.94 12l-4.47-4.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5 5c.29.29.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22zM6 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L9.94 12 5.47 7.53c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l5 5c.29.29.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ChevronsRight;
