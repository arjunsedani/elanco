import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Printer = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16 21.75H8c-.96 0-1.75-.79-1.75-1.75v-2.25H5c-1.52 0-2.75-1.23-2.75-2.75v-5c0-1.52 1.23-2.75 2.75-2.75h1.25V4c0-.96.79-1.75 1.75-1.75h8c.96 0 1.75.79 1.75 1.75v3.25H19c1.52 0 2.75 1.23 2.75 2.75v5c0 1.52-1.23 2.75-2.75 2.75h-1.25V20c0 .96-.79 1.75-1.75 1.75zM7.75 17v3c0 .14.11.25.25.25h8c.14 0 .25-.11.25-.25v-5.45h-8.5V17zm10-.75H19c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h1.25V13.8c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v2.45zm-10-9h8.5V4c0-.14-.11-.25-.25-.25H8c-.14 0-.25.11-.25.25v3.25zm.25 4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Printer;
