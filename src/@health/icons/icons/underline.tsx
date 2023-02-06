import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Underline = forwardRef(
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
          d="M17 19.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zm-5-3c-1.27 0-2.46-.49-3.36-1.39-.9-.9-1.39-2.09-1.39-3.36V6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .86.35 1.69.95 2.3 1.22 1.22 3.38 1.22 4.6 0 .61-.61.95-1.44.95-2.3V6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 1.25-.51 2.47-1.39 3.36s-2.11 1.39-3.36 1.39z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Underline;
