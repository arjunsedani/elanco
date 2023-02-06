import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const InsuranceDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M3 3.30977L7.56822 2.64991C10.5075 2.22535 13.4925 2.22535 16.4318 2.64991L21 3.30977V12.04C21 15.0574 19.3022 17.8181 16.6094 19.1795L12 21.5098L7.39059 19.1795C4.69776 17.8181 3 15.0574 3 12.04V3.30977Z"
          stroke="#59656D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.75 8.00977C12.75 7.59555 12.4142 7.25977 12 7.25977C11.5858 7.25977 11.25 7.59555 11.25 8.00977V10.2598H9C8.58579 10.2598 8.25 10.5956 8.25 11.0098C8.25 11.424 8.58579 11.7598 9 11.7598H11.25V14.0098C11.25 14.424 11.5858 14.7598 12 14.7598C12.4142 14.7598 12.75 14.424 12.75 14.0098V11.7598H15C15.4142 11.7598 15.75 11.424 15.75 11.0098C15.75 10.5956 15.4142 10.2598 15 10.2598H12.75V8.00977Z"
          fill="#858F96"
        />
      </StyledSVG>
    );
  },
);

export default InsuranceDuotone;
