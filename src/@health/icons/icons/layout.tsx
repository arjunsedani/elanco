import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Layout = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h14c1.52 0 2.75 1.23 2.75 2.75v14c0 1.52-1.23 2.75-2.75 2.75zm-9.63-1.5H19c.69 0 1.25-.56 1.25-1.25V9.75H9.37v10.5zM3.75 9.75V19c0 .69.56 1.25 1.25 1.25h2.87V9.75H3.75zm4.87-1.5h11.63V5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v3.25h4.87z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Layout;
