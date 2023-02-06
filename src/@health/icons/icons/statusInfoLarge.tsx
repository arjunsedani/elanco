import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusInfo instead
 */
const StatusInfoLarge = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusInfoLarge", "statusInfo"]);
    return (
      <StyledSVG
        ref={ref}
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        {...props}
      >
        <path
          d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C47.9857 10.7511 37.2489 0.0143297 24 0ZM24.5 10C26.1569 10 27.5 11.3431 27.5 13C27.5 14.6569 26.1569 16 24.5 16C22.8431 16 21.5 14.6569 21.5 13C21.5 11.3431 22.8431 10 24.5 10ZM29 37H21C19.8954 37 19 36.1046 19 35C19 33.8954 19.8954 33 21 33H22.5C22.7761 33 23 32.7761 23 32.5V23.5C23 23.2239 22.7761 23 22.5 23H21C19.8954 23 19 22.1046 19 21C19 19.8954 19.8954 19 21 19H23C25.2091 19 27 20.7909 27 23V32.5C27 32.7761 27.2239 33 27.5 33H29C30.1046 33 31 33.8954 31 35C31 36.1046 30.1046 37 29 37Z"
          fill="#8657FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.5 13C27.5 11.3431 26.1569 10 24.5 10C22.8431 10 21.5 11.3431 21.5 13C21.5 14.6569 22.8431 16 24.5 16C26.1569 16 27.5 14.6569 27.5 13ZM31 35C31 33.8954 30.1046 33 29 33H27.5C27.2239 33 27 32.7761 27 32.5V23C27 20.7909 25.2091 19 23 19H21C19.8954 19 19 19.8954 19 21C19 22.1046 19.8954 23 21 23H22.5C22.7761 23 23 23.2239 23 23.5V32.5C23 32.7761 22.7761 33 22.5 33H21C19.8954 33 19 33.8954 19 35C19 36.1046 19.8954 37 21 37H29C30.1046 37 31 36.1046 31 35Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusInfoLarge;
