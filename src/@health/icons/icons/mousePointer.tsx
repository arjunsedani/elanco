import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MousePointer = forwardRef(
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
          d="M13.79 20.47c-.16 0-.31-.03-.46-.08-.38-.12-.68-.38-.86-.74l-1.73-3.41-2.92 1.83c-.22.14-.5.15-.73.02a.723.723 0 01-.37-.63V5.01c0-.56.32-1.07.83-1.32.5-.25 1.1-.2 1.55.14l9.9 7.44c.21.16.32.41.28.67a.75.75 0 01-.45.58l-3.2 1.27 1.73 3.41c.37.73.07 1.62-.65 1.98l-2.25 1.14c-.21.11-.44.16-.67.16zm-2.76-5.98c.06 0 .13 0 .19.03.2.05.36.19.45.37l2.08 4.12 2.29-1.12-2.07-4.16a.731.731 0 01-.03-.58c.07-.19.22-.34.41-.42l2.74-1.09-8.87-6.66-.05 11.18 2.48-1.55c.12-.07.25-.11.38-.11z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default MousePointer;
