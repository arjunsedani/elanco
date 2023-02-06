import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const HardDrive = forwardRef(
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
          d="M20.15 5.83l.75-.06-.75.06zm-16.3 0l-.75-.06.75.06zM16.5 18.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-9-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm14.25-.81L20.9 5.77l-1.49.12.85 10.17 1.49-.12zM20.9 5.77a2.746 2.746 0 00-2.74-2.52v1.5c.65 0 1.19.5 1.25 1.15l1.49-.13zm-2.74-2.52H5.84v1.5h12.32v-1.5zm-12.32 0c-1.43 0-2.62 1.1-2.74 2.52l1.49.13c.05-.65.6-1.15 1.25-1.15v-1.5zM3.1 5.77l-.85 10.17 1.49.12.85-10.17-1.49-.12zM21.75 16c0-1.52-1.23-2.75-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5zM19 13.25H5v1.5h14v-1.5zm-14 0c-1.52 0-2.75 1.23-2.75 2.75h1.5c0-.69.56-1.25 1.25-1.25v-1.5zM2.25 16v3h1.5v-3h-1.5zm0 3c0 1.52 1.23 2.75 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5zM5 21.75h14v-1.5H5v1.5zm14 0c1.52 0 2.75-1.23 2.75-2.75h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM21.75 19v-3h-1.5v3h1.5zm-5.25-2.25h-9v1.5h9v-1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default HardDrive;
