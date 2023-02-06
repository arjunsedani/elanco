import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";

/**
 * @deprecated use statusWarning instead
 */
const StatusWarningMedium = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    warnDeprecated([props.name, "statusWarningMedium", "statusWarning"]);
    return (
      <StyledSVG
        ref={ref}
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        {...props}
      >
        <path
          d="M17.0041 3.14159C18.2216 0.645698 21.7784 0.64569 22.9959 3.14158L37.6611 33.2052C38.7412 35.4195 37.1289 38 34.6652 38H5.33479C2.87111 38 1.25876 35.4195 2.3389 33.2053L17.0041 3.14159Z"
          fill="#FFB024"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10.9995C19.0796 10.9995 18.3334 11.7457 18.3334 12.6662V23.3328C18.3334 24.2533 19.0796 24.9995 20 24.9995C20.9205 24.9995 21.6667 24.2533 21.6667 23.3328V12.6662C21.6667 11.7457 20.9205 10.9995 20 10.9995ZM20 33.4993C21.3807 33.4993 22.5 32.3801 22.5 30.9993C22.5 29.6186 21.3807 28.4993 20 28.4993C18.6193 28.4993 17.5 29.6186 17.5 30.9993C17.5 32.3801 18.6193 33.4993 20 33.4993Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusWarningMedium;
