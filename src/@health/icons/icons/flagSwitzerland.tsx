import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Switzerland = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <g clip-path="url(#clip0_878:104978)">
          <path d="M0 5H24V18.5H0V5Z" fill="#DA291C" />
          <path
            d="M10.735 7.53125H13.2663V10.485H16.22V13.0162H13.2663V15.97H10.735V13.0162H7.78125V10.485H10.735V7.53125Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 5.3C1.06112 5.3 0.3 6.06112 0.3 7V16.5C0.3 17.4389 1.06112 18.2 2 18.2H22C22.9389 18.2 23.7 17.4389 23.7 16.5V7C23.7 6.06112 22.9389 5.3 22 5.3H2ZM0 7C0 5.89543 0.89543 5 2 5H22C23.1046 5 24 5.89543 24 7V16.5C24 17.6046 23.1046 18.5 22 18.5H2C0.89543 18.5 0 17.6046 0 16.5V7Z"
            fill="#C7CFD5"
          />
        </g>
        <defs>
          <clipPath id="clip0_878:104978">
            <rect y="5" width="24" height="13.5" rx="2" fill="white" />
          </clipPath>
        </defs>
      </StyledSVG>
    );
  },
);

export default Switzerland;
