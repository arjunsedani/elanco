import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const BarChart2 = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M18,20.75c-.41,0-.75-.34-.75-.75V10c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v10c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M12,20.75c-.41,0-.75-.34-.75-.75V4c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V20c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M6,20.75c-.41,0-.75-.34-.75-.75v-6c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default BarChart2;
