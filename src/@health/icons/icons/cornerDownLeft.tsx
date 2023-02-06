import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CornerDownLeft = forwardRef(
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
          d="M9 20.75c-.19 0-.38-.07-.53-.22l-5-5a.754.754 0 010-1.06l5-5c.29-.29.77-.29 1.06 0s.29.77 0 1.06L5.06 15l4.47 4.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M16 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.86 0 1.69-.35 2.3-.95s.95-1.43.95-2.3V4c0-.41.34-.75.75-.75s.75.34.75.75v7c0 1.27-.49 2.46-1.39 3.36s-2.11 1.39-3.36 1.39z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CornerDownLeft;
