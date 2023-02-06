import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CheckSquare = forwardRef(
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
          d="M18.5 21.25H5.69c-1.57 0-2.85-1.28-2.85-2.85V5.6c0-1.57 1.28-2.85 2.85-2.85h6.4c.41 0 .75.34.75.75s-.34.75-.75.75h-6.4c-.74 0-1.35.61-1.35 1.35v12.8c0 .74.61 1.35 1.35 1.35h12.8c.74 0 1.35-.61 1.35-1.35v-4.89c0-.41.34-.75.75-.75s.75.34.75.75v4.89c0 1.57-1.28 2.85-2.85 2.85zm-6.49-6.2a.75.75 0 01-.53-.22L7.7 11.05c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3.25 3.25 7.03-7.03c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7.56 7.56a.75.75 0 01-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CheckSquare;
