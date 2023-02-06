import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LoanDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M20.9076 16.8711L12.15 20.581L7.16565 18.1015L10.8577 18.613L12.15 17.4329"
          stroke="#59656D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5905 4.47434C15.5905 3.05356 14.1663 2.76868 13.1327 2.76868M13.1327 2.76868C11.8407 2.76868 10.5615 3.36874 10.5615 4.88655C10.5615 7.62928 15.5905 6.20564 15.5905 8.8713C15.5905 10.242 14.9951 11.2412 13.1327 11.2412M13.1327 2.76868V1.5M13.1327 11.2412C11.2702 11.2412 10.5615 10.2797 10.5615 9.22856M13.1327 11.2412V12.2734"
          stroke="#858F96"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="3.49838" cy="18" r="1" fill="#59656D" stroke="#59656D" />
      </StyledSVG>
    );
  },
);

export default LoanDuotone;
