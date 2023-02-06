import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DivideCircle = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12,22.75c-5.93,0-10.75-4.82-10.75-10.75S6.07,1.25,12,1.25s10.75,4.82,10.75,10.75-4.82,10.75-10.75,10.75Zm0-20C6.9,2.75,2.75,6.9,2.75,12s4.15,9.25,9.25,9.25,9.25-4.15,9.25-9.25S17.1,2.75,12,2.75Z"
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

export default DivideCircle;
