import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const AccessibilityDarkmode = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M11.94,19.75c-2.07,0-4-.79-5.45-2.24-1.47-1.47-2.27-3.45-2.24-5.55,.03-2.1,.87-4.09,2.37-5.59,1-1,2.26-1.72,3.64-2.08,.45-.12,.93,.04,1.23,.39,.29,.35,.36,.83,.16,1.24-.89,1.91-.54,4.14,.87,5.55,1.41,1.42,3.64,1.77,5.55,.88h0c.41-.19,.89-.13,1.24,.16,.36,.3,.51,.78,.4,1.23-.36,1.38-1.08,2.64-2.08,3.64-1.5,1.5-3.49,2.35-5.59,2.37-.04,0-.07,0-.11,0Zm-1.91-13.82c-.88,.32-1.69,.83-2.35,1.5-1.23,1.23-1.91,2.84-1.94,4.55-.02,1.7,.62,3.29,1.8,4.47s2.79,1.87,4.47,1.8c1.71-.02,3.32-.71,4.55-1.93,.66-.66,1.17-1.46,1.5-2.35-2.32,.81-4.9,.27-6.6-1.44-1.7-1.7-2.24-4.28-1.43-6.6Zm8.68,7.78h0Zm-.32-.68h0Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default AccessibilityDarkmode;
