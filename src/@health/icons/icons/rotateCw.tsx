import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RotateCw = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M23,10.75h-6c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h5.25V4c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v6c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M11.99,21.75c-.19,0-.37,0-.56-.02-2.1-.12-4.13-.94-5.74-2.3-1.6-1.36-2.74-3.24-3.2-5.28-.46-2.05-.25-4.23,.62-6.15,.86-1.92,2.35-3.53,4.19-4.54,1.84-1.01,4-1.41,6.08-1.12,2.08,.29,4.04,1.28,5.53,2.76l4.61,4.34c.3,.28,.32,.76,.03,1.06s-.76,.32-1.06,.03l-4.63-4.36c-1.27-1.27-2.93-2.1-4.69-2.35-1.76-.25-3.59,.08-5.14,.94-1.56,.86-2.81,2.22-3.54,3.84-.73,1.62-.91,3.47-.52,5.2,.39,1.73,1.36,3.32,2.71,4.47,1.36,1.15,3.08,1.84,4.85,1.94,1.78,.11,3.57-.38,5.05-1.36,1.48-.98,2.62-2.45,3.21-4.12,.14-.39,.57-.6,.96-.46,.39,.14,.59,.57,.46,.96-.7,1.98-2.05,3.71-3.8,4.87-1.59,1.06-3.49,1.63-5.41,1.63Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default RotateCw;
