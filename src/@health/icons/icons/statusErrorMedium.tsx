import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusError instead
 */
const StatusErrorMedium = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusErrorMedium", "statusError"]);
    return (
      <StyledSVG
        ref={ref}
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        {...props}
      >
        <path
          d="M17.0041 4.14159C18.2216 1.6457 21.7784 1.64569 22.9959 4.14158L37.6611 34.2052C38.7412 36.4195 37.1289 39 34.6652 39H5.33479C2.87111 39 1.25876 36.4195 2.3389 34.2053L17.0041 4.14159Z"
          fill="#FF4724"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 11.6665C19.0796 11.6665 18.3334 12.4127 18.3334 13.3332V23.6665C18.3334 24.587 19.0796 25.3332 20 25.3332C20.9205 25.3332 21.6667 24.587 21.6667 23.6665V13.3332C21.6667 12.4127 20.9205 11.6665 20 11.6665ZM20 33.7497C21.3807 33.7497 22.5 32.6304 22.5 31.2497C22.5 29.869 21.3807 28.7497 20 28.7497C18.6193 28.7497 17.5 29.869 17.5 31.2497C17.5 32.6304 18.6193 33.7497 20 33.7497Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusErrorMedium;
