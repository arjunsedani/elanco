import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusError instead
 */
const StatusErrorLarge = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusErrorLarge", "statusError"]);
    return (
      <StyledSVG
        ref={ref}
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        {...props}
      >
        <path
          d="M20.4077 5.33418C21.871 2.34681 26.129 2.34681 27.5923 5.33418L45.179 41.2405C46.4807 43.8981 44.546 47 41.5868 47H6.41321C3.454 47 1.5193 43.8981 2.82096 41.2405L20.4077 5.33418Z"
          fill="#FF4724"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 14.333C22.8954 14.333 22 15.2284 22 16.333V28.6663C22 29.7709 22.8954 30.6663 24 30.6663C25.1046 30.6663 26 29.7709 26 28.6663V16.333C26 15.2284 25.1046 14.333 24 14.333ZM24 40.7497C25.6569 40.7497 27 39.4065 27 37.7497C27 36.0928 25.6569 34.7497 24 34.7497C22.3431 34.7497 21 36.0928 21 37.7497C21 39.4065 22.3431 40.7497 24 40.7497Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusErrorLarge;
