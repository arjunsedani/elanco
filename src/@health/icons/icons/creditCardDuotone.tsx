import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CreditCardDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M2.625 3C1.17525 3 0 4.17525 0 5.625V18.375C0 19.8248 1.17525 21 2.625 21H21.375C22.8248 21 24 19.8248 24 18.375V5.625C24 4.17525 22.8248 3 21.375 3H2.625ZM21.75 7.5V5.625C21.75 5.41789 21.5821 5.25 21.375 5.25H2.625C2.4179 5.25 2.25 5.41789 2.25 5.625V7.5H21.75ZM2.25 9.75H21.75V18.375C21.75 18.5821 21.5821 18.75 21.375 18.75H2.625C2.4179 18.75 2.25 18.5821 2.25 18.375V9.75Z"
          fill="#59656D"
        />
        <path
          d="M15 14.625C15 14.0037 15.5037 13.5 16.125 13.5H18.375C18.9963 13.5 19.5 14.0037 19.5 14.625C19.5 15.2463 18.9963 15.75 18.375 15.75H16.125C15.5037 15.75 15 15.2463 15 14.625Z"
          fill="#858F96"
        />
      </StyledSVG>
    );
  },
);

export default CreditCardDuotone;
