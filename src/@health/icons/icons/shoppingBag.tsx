import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ShoppingBag = forwardRef(
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
          d="M19 21.75H5c-.96 0-1.75-.79-1.75-1.75V8c0-.96.79-1.75 1.75-1.75h2.25V6c0-2.62 2.13-4.75 4.75-4.75S16.75 3.38 16.75 6v.25H19c.96 0 1.75.79 1.75 1.75v12c0 .96-.79 1.75-1.75 1.75zm-14-14c-.14 0-.25.11-.25.25v12c0 .14.11.25.25.25h14c.14 0 .25-.11.25-.25V8c0-.14-.11-.25-.25-.25h-2.25V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.75h-6.5V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.75H5zm3.75-1.5h6.5V6c0-1.79-1.46-3.25-3.25-3.25S8.75 4.21 8.75 6v.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ShoppingBag;
