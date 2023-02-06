import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ChevronUp = forwardRef(
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
          d="M18 15.75c-.19 0-.38-.07-.53-.22L12 10.06l-5.47 5.47c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l6-6c.29-.29.77-.29 1.06 0l6 6c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ChevronUp;
