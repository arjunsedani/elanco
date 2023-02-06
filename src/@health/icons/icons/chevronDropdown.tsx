import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ChevronDropdown = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
        <circle cx={12} cy={12} r={12} fill="#f5f7f9" />
        <path
          d="M12,17.47c-.25,0-.5-.09-.69-.29l-6-6c-.38-.38-.38-1,0-1.38s1-.38,1.38,0l5.31,5.31,5.31-5.31c.38-.38,1-.38,1.38,0s.38,1,0,1.38l-6,6c-.19,.19-.44,.29-.69,.29Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default ChevronDropdown;
