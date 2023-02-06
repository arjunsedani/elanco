import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Headphones = forwardRef(
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
          d="M19 21.75h-1.46c-.96 0-1.75-.79-1.75-1.75v-4.69c0-.96.79-1.75 1.75-1.75h2.71V12c0-4.55-3.7-8.25-8.25-8.25S3.75 7.45 3.75 12v1.56h2.71c.96 0 1.75.78 1.75 1.75V20c0 .96-.79 1.75-1.75 1.75H5c-1.52 0-2.75-1.23-2.75-2.75v-7c0-5.37 4.37-9.75 9.75-9.75s9.75 4.38 9.75 9.75v7c0 1.52-1.23 2.75-2.75 2.75zm-1.46-6.69c-.14 0-.25.11-.25.25V20c0 .14.11.25.25.25H19c.69 0 1.25-.56 1.25-1.25v-3.93h-2.71zm-13.8 0v3.93c0 .69.56 1.25 1.25 1.25h1.46c.14 0 .25-.11.25-.25V15.3c0-.14-.11-.25-.25-.25h-2.7z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Headphones;
