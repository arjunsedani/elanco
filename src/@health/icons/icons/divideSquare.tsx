import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DivideSquare = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        useFillColorOnly
        {...props}
      >
        <path
          d="M19,21.75H5c-1.52,0-2.75-1.23-2.75-2.75V5c0-1.52,1.23-2.75,2.75-2.75h14c1.52,0,2.75,1.23,2.75,2.75v14c0,1.52-1.23,2.75-2.75,2.75ZM5,3.75c-.69,0-1.25,.56-1.25,1.25v14c0,.69,.56,1.25,1.25,1.25h14c.69,0,1.25-.56,1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5Z"
          fill="#9BA4AB"
        />
        <path
          d="M16,12.75H8c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h8c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default DivideSquare;
