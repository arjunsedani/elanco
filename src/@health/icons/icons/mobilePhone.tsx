import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MobilePhone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M8.25098 1.5C7.00834 1.5 6.00098 2.50736 6.00098 3.75V20.25C6.00098 21.4926 7.00834 22.5 8.25098 22.5H15.751C16.9936 22.5 18.001 21.4926 18.001 20.25V3.75C18.001 2.50736 16.9936 1.5 15.751 1.5H8.25098ZM8.25098 0H15.751C17.822 0 19.501 1.67893 19.501 3.75V20.25C19.501 22.3211 17.822 24 15.751 24H8.25098C6.17991 24 4.50098 22.3211 4.50098 20.25V3.75C4.50098 1.67893 6.17991 0 8.25098 0ZM5.25098 19.5C4.83676 19.5 4.50098 19.1642 4.50098 18.75C4.50098 18.3358 4.83676 18 5.25098 18H18.751C19.1652 18 19.501 18.3358 19.501 18.75C19.501 19.1642 19.1652 19.5 18.751 19.5H5.25098Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default MobilePhone;
