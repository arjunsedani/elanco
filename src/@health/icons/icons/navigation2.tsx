import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Navigation2 = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M19,21.75c-.13,0-.26-.03-.37-.1l-6.63-3.79-6.63,3.79c-.27,.16-.61,.12-.86-.08-.24-.2-.33-.54-.22-.83L11.3,1.74c.11-.29,.39-.49,.7-.49s.6,.2,.7,.49l7,19c.11,.3,.02,.63-.22,.83-.14,.12-.31,.18-.48,.18Zm-7-5.5c.13,0,.26,.03,.37,.1l5.21,2.98L12,4.17l-5.58,15.16,5.21-2.98c.12-.07,.24-.1,.37-.1Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default Navigation2;
