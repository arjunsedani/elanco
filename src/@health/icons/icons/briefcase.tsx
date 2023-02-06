import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Briefcase = forwardRef(
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
          d="M15.42 7.5c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-8.35 0c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm2.27 6.19l.41-.63-.41.63zm5.3 0l-.41-.63.41.63zm4.35 6.06H5v1.5h14v-1.5zm-14 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zM3.74 18.5v-9h-1.5v9h1.5zm0-9c0-.69.56-1.25 1.25-1.25v-1.5c-1.52 0-2.75 1.23-2.75 2.75h1.5zm1.25-1.25h14v-1.5H5v1.5zm14 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zm1.25 1.25v9h1.5v-9h-1.5zm0 9c0 .69-.56 1.25-1.25 1.25v1.5c1.52 0 2.75-1.23 2.75-2.75h-1.5zm-3.33-11v-2h-1.5v2h1.5zm0-2c0-1.52-1.23-2.75-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5zm-2.75-2.75H9.81v1.5h4.35v-1.5zm-4.35 0c-1.52 0-2.75 1.23-2.75 2.75h1.5c0-.69.56-1.25 1.25-1.25v-1.5zM7.06 5.5v2h1.5v-2h-1.5zm-4.47 4.63l6.35 4.19.83-1.25-6.36-4.2-.83 1.25zm6.35 4.19c.45.3.98.46 1.52.46v-1.5c-.25 0-.48-.07-.69-.21l-.83 1.25zm1.52.46h3.09v-1.5h-3.09v1.5zm3.09 0c.54 0 1.07-.16 1.52-.46l-.83-1.25c-.2.13-.44.21-.69.21v1.5zm1.52-.45l6.35-4.19-.83-1.25-6.35 4.19.83 1.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Briefcase;
