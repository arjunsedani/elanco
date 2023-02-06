import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const InvestmentChartDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          opacity="0.6"
          d="M3.98938 21H20.1449C20.6971 21 21.1449 20.5523 21.1449 20V19.75C21.1449 19.1977 20.6971 18.75 20.1449 18.75H3.98938C3.4371 18.75 2.98938 19.1977 2.98938 19.75V20C2.98938 20.5523 3.4371 21 3.98938 21Z"
          fill="#858F96"
        />
        <path
          d="M16.5 15.375C16.5 15.9963 17.0037 16.5 17.625 16.5C18.2463 16.5 18.75 15.9963 18.75 15.375V4.125C18.75 3.5037 18.2463 3 17.625 3C17.0037 3 16.5 3.5037 16.5 4.125V15.375Z"
          fill="#59656D"
        />
        <path
          d="M6.375 16.5C5.75368 16.5 5.25 15.9963 5.25 15.375V7.125C5.25 6.50368 5.75368 6 6.375 6C6.99632 6 7.5 6.50368 7.5 7.125V15.375C7.5 15.9963 6.99632 16.5 6.375 16.5Z"
          fill="#59656D"
        />
        <path
          d="M10.875 15.375C10.875 15.9963 11.3787 16.5 12 16.5C12.6213 16.5 13.125 15.9963 13.125 15.375V10.125C13.125 9.50368 12.6213 9 12 9C11.3787 9 10.875 9.50368 10.875 10.125V15.375Z"
          fill="#59656D"
        />
      </StyledSVG>
    );
  },
);

export default InvestmentChartDuotone;
