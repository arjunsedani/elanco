import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Norway = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_878:104975)">
        <path
          d="M24.0261 3.50342H-0.0251465V20.9947H24.0261V3.50342Z"
          fill="#EF2B2D"
        />
        <path
          d="M10.9062 3.50342H6.53369V20.9947H10.9062V3.50342Z"
          fill="white"
        />
        <path
          d="M24.0261 10.0635H-0.0251465V14.436H24.0261V10.0635Z"
          fill="white"
        />
        <path
          d="M9.81394 3.50342H7.62769V20.9947H9.81394V3.50342Z"
          fill="#002868"
        />
        <path
          d="M24.0261 11.1562H-0.0251465V13.3425H24.0261V11.1562Z"
          fill="#002868"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 5.8C1.06112 5.8 0.3 6.56112 0.3 7.5V17C0.3 17.9389 1.06112 18.7 2 18.7H22C22.9389 18.7 23.7 17.9389 23.7 17V7.5C23.7 6.56112 22.9389 5.8 22 5.8H2ZM0 7.5C0 6.39543 0.89543 5.5 2 5.5H22C23.1046 5.5 24 6.39543 24 7.5V17C24 18.1046 23.1046 19 22 19H2C0.89543 19 0 18.1046 0 17V7.5Z"
          fill="#C7CFD5"
        />
      </g>
      <defs>
        <clipPath id="clip0_878:104975">
          <rect y="5.5" width="24" height="13.5" rx="2" fill="white" />
        </clipPath>
      </defs>
    </StyledSVG>
  );
});

export default Norway;
