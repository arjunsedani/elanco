import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RotateCounterClockwise = forwardRef(
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
          d="M12 21.75c-4.55 0-8.25-3.7-8.25-8.25 0-1.32.32-2.62.92-3.78.19-.37.64-.51 1.01-.32s.51.64.32 1.01c-.5.96-.75 2-.75 3.1 0 3.72 3.03 6.75 6.75 6.75s6.75-3.03 6.75-6.75S15.72 6.76 12 6.76h-1.69l1.72 1.72c.29.29.29.77 0 1.06s-.77.29-1.06 0l-3-3a.633.633 0 01-.16-.24.717.717 0 010-.58c.04-.09.09-.17.16-.24l3-3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.72 1.72H12c4.55 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default RotateCounterClockwise;
