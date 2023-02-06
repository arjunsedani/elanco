import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StopTimer = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 48 48"
        fill="none"
        {...props}
      >
        <path
          d="M31.8957 27.3339C31.3505 28.6235 30.4976 29.7598 29.4116 30.6436C28.3257 31.5274 27.0398 32.1317 25.6664 32.4037C24.293 32.6758 22.8738 32.6072 21.533 32.204C20.1922 31.8009 18.9706 31.0754 17.9749 30.0911C16.9792 29.1067 16.2399 27.8934 15.8214 26.5573C15.403 25.2212 15.3182 23.8029 15.5745 22.4265C15.8309 21.05 16.4205 19.7573 17.2918 18.6614C18.1631 17.5654 19.2896 16.6996 20.5729 16.1396"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5714 23.9992C32.5714 22.8735 32.3497 21.759 31.919 20.719C31.4882 19.6791 30.8568 18.7342 30.0609 17.9382C29.265 17.1423 28.3201 16.511 27.2801 16.0802C26.2402 15.6494 25.1256 15.4277 24 15.4277V23.9992H32.5714Z"
          stroke="#FF3E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default StopTimer;
