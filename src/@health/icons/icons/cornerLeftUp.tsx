import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CornerLeftUp = forwardRef(
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
          d="M14 9.75c-.19 0-.38-.07-.53-.22L9 5.06 4.53 9.53c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l5-5c.29-.29.77-.29 1.06 0l5 5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M20 20.75h-7c-1.27 0-2.46-.49-3.36-1.39-.9-.9-1.39-2.09-1.39-3.36V4c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .86.35 1.69.95 2.3.61.61 1.43.95 2.3.95h7c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CornerLeftUp;
