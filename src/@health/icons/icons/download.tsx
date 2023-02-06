import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Download = forwardRef(
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
          d="M17 21.75H7c-2.62 0-4.75-2.13-4.75-4.75 0-.41.34-.75.75-.75s.75.34.75.75c0 1.79 1.46 3.25 3.25 3.25h10c1.79 0 3.25-1.46 3.25-3.25 0-.41.34-.75.75-.75s.75.34.75.75c0 2.62-2.13 4.75-4.75 4.75zm-5-4a.75.75 0 01-.53-.22l-5-5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3.72 3.72V3c0-.41.34-.75.75-.75s.75.34.75.75v12.19l3.72-3.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5 5a.75.75 0 01-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Download;
