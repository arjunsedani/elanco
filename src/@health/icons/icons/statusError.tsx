import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StatusError = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M10.197 1.75635C10.9231 0.24363 13.0769 0.243629 13.803 1.75635L22.6246 20.1345C23.2619 21.4622 22.2942 23 20.8215 23H3.17847C1.70577 23 0.738138 21.4622 1.37542 20.1345L10.197 1.75635Z"
          fill="#FF4724"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.3335C11.4477 6.3335 11 6.78121 11 7.3335V13.6668C11 14.2191 11.4477 14.6668 12 14.6668C12.5523 14.6668 13 14.2191 13 13.6668V7.3335C13 6.78121 12.5523 6.3335 12 6.3335ZM12 19.8752C12.8284 19.8752 13.5 19.1756 13.5 18.3127C13.5 17.4497 12.8284 16.7502 12 16.7502C11.1716 16.7502 10.5 17.4497 10.5 18.3127C10.5 19.1756 11.1716 19.8752 12 19.8752Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default StatusError;
