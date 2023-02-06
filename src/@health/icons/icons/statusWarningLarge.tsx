import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusWarning instead
 */
const StatusWarningLarge = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusWarningLarge", "statusWarning"]);
    return (
      <StyledSVG
        ref={ref}
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        {...props}
      >
        <path
          d="M20.4077 3.33418C21.871 0.346807 26.129 0.346806 27.5923 3.33418L45.179 39.2405C46.4807 41.8981 44.546 45 41.5868 45H6.41321C3.454 45 1.5193 41.8981 2.82096 39.2405L20.4077 3.33418Z"
          fill="#FFB024"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 13C22.8954 13 22 13.8954 22 15V28C22 29.1046 22.8954 30 24 30C25.1046 30 26 29.1046 26 28V15C26 13.8954 25.1046 13 24 13ZM24 40.2495C25.6569 40.2495 27 38.9063 27 37.2495C27 35.5926 25.6569 34.2495 24 34.2495C22.3431 34.2495 21 35.5926 21 37.2495C21 38.9063 22.3431 40.2495 24 40.2495Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusWarningLarge;
