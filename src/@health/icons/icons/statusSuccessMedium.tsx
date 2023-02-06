import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusSuccess instead
 */
const StatusSuccessMedium = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusSuccessMedium", "statusSuccess"]);
    return (
      <StyledSVG
        ref={ref}
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        {...props}
      >
        <circle cx="20" cy="20" r="20" fill="#13C998" />
        <path
          d="M28 15L17 26L12 21"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSVG>
    );
  },
);

export default StatusSuccessMedium;
