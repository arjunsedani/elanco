import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Terminal = forwardRef(
  (props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
    return (
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ref={ref}
        width="1.5em"
        height="1.5em"
        useFillColorOnly
        {...props}
      >
        <path
          d="M18 21.75H6c-2.07 0-3.75-1.68-3.75-3.75V6c0-2.07 1.68-3.75 3.75-3.75h12c2.07 0 3.75 1.68 3.75 3.75v12c0 2.07-1.68 3.75-3.75 3.75zm-12-18C4.76 3.75 3.75 4.76 3.75 6v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6zm10 12h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm-8-1a.75.75 0 01-.48-1.33l2.31-1.92-2.31-1.92a.758.758 0 01-.1-1.06c.27-.32.74-.36 1.06-.1l3 2.5a.761.761 0 010 1.16l-3 2.5c-.14.12-.31.17-.48.17z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Terminal;
