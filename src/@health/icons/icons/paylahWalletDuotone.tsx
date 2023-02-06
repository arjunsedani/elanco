import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PaylahWalletDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.625 6C2.625 4.96447 3.46447 4.125 4.5 4.125H16.875V6.375H2.625V6ZM2.625 8.625V12V19.5C2.625 19.7071 2.79289 19.875 3 19.875H21C21.2071 19.875 21.375 19.7071 21.375 19.5V9C21.375 8.79289 21.2071 8.625 21 8.625H18H2.625ZM19.125 6.375V3C19.125 2.37868 18.6213 1.875 18 1.875H4.5C2.22183 1.875 0.375 3.72183 0.375 6V7.5V12V19.5C0.375 20.9497 1.55025 22.125 3 22.125H21C22.4497 22.125 23.625 20.9497 23.625 19.5V9C23.625 7.55025 22.4497 6.375 21 6.375H19.125Z"
          fill="#59656D"
        />
        <path
          d="M18 13.5H15"
          stroke="#858F96"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default PaylahWalletDuotone;
