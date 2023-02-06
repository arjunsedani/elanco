import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StatusInfo = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C23.9928 5.37555 18.6244 0.00716485 12 0ZM12.25 5C13.0784 5 13.75 5.67157 13.75 6.5C13.75 7.32843 13.0784 8 12.25 8C11.4216 8 10.75 7.32843 10.75 6.5C10.75 5.67157 11.4216 5 12.25 5ZM14.5 18.5H10.5C9.94771 18.5 9.5 18.0523 9.5 17.5C9.5 16.9477 9.94771 16.5 10.5 16.5H11.25C11.3881 16.5 11.5 16.3881 11.5 16.25V11.75C11.5 11.6119 11.3881 11.5 11.25 11.5H10.5C9.94771 11.5 9.5 11.0523 9.5 10.5C9.5 9.94771 9.94771 9.5 10.5 9.5H11.5C12.6046 9.5 13.5 10.3954 13.5 11.5V16.25C13.5 16.3881 13.6119 16.5 13.75 16.5H14.5C15.0523 16.5 15.5 16.9477 15.5 17.5C15.5 18.0523 15.0523 18.5 14.5 18.5Z"
          fill="#8657FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.75 6.5C13.75 5.67157 13.0784 5 12.25 5C11.4216 5 10.75 5.67157 10.75 6.5C10.75 7.32843 11.4216 8 12.25 8C13.0784 8 13.75 7.32843 13.75 6.5ZM10.5 18.5H14.5C15.0523 18.5 15.5 18.0523 15.5 17.5C15.5 16.9477 15.0523 16.5 14.5 16.5H13.75C13.6119 16.5 13.5 16.3881 13.5 16.25V11.5C13.5 10.3954 12.6046 9.5 11.5 9.5H10.5C9.94772 9.5 9.5 9.94772 9.5 10.5C9.5 11.0523 9.94772 11.5 10.5 11.5H11.25C11.3881 11.5 11.5 11.6119 11.5 11.75V16.25C11.5 16.3881 11.3881 16.5 11.25 16.5H10.5C9.94772 16.5 9.5 16.9477 9.5 17.5C9.5 18.0523 9.94772 18.5 10.5 18.5Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusInfo;
