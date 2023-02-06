import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowDown = forwardRef(
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
          d="M12 19.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M12 19.75c-.19 0-.38-.07-.53-.22l-7-7c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 17.94l6.47-6.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ArrowDown;
