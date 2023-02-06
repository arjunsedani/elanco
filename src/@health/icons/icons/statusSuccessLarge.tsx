import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusSuccess instead
 */
const StatusSuccessLarge = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusSuccessLarge", "statusSuccess"]);
    return (
      <StyledSVG
        ref={ref}
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        {...props}
      >
        <circle cx="24" cy="24" r="24" fill="#13C998" />
        <path
          d="M32 19L21 30L16 25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default StatusSuccessLarge;
