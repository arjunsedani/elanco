import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Sidebar = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h14c1.52 0 2.75 1.23 2.75 2.75v14c0 1.52-1.23 2.75-2.75 2.75zm-9.25-1.5H19c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H9.75v16.5zM5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h3.25V3.75H5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Sidebar;
