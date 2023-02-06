import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RotateClockwise = forwardRef(
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
          d="M12 21.75c-4.55 0-8.25-3.7-8.25-8.25S7.45 5.25 12 5.25h1.69l-1.72-1.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3 3c.07.07.13.15.16.24a.717.717 0 010 .58c-.04.09-.09.17-.16.24l-3 3c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l1.72-1.72H12c-3.72 0-6.75 3.03-6.75 6.75s3.03 6.75 6.75 6.75 6.75-3.03 6.75-6.75c0-1.09-.25-2.13-.75-3.1a.746.746 0 01.32-1.01c.37-.19.82-.05 1.01.32.6 1.16.92 2.47.92 3.78 0 4.55-3.7 8.25-8.25 8.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default RotateClockwise;
