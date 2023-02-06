import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LiveAgent = forwardRef(
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
          d="M17.75 10c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-13 0c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM19 16.25h-1v1.5h1v-1.5zm-1 0c-.14 0-.25-.11-.25-.25h-1.5c0 .97.78 1.75 1.75 1.75v-1.5zm-.25-.25v-5h-1.5v5h1.5zm0-5c0-.14.11-.25.25-.25v-1.5c-.97 0-1.75.78-1.75 1.75h1.5zm.25-.25h1v-1.5h-1v1.5zm1 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zM20.25 12v3h1.5v-3h-1.5zm0 3c0 .69-.56 1.25-1.25 1.25v1.5c1.52 0 2.75-1.23 2.75-2.75h-1.5zM6 16.25H5v1.5h1v-1.5zm-1 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zM3.75 15v-3h-1.5v3h1.5zm0-3c0-.69.56-1.25 1.25-1.25v-1.5c-1.52 0-2.75 1.23-2.75 2.75h1.5zM5 10.75h1v-1.5H5v1.5zm1 0c.14 0 .25.11.25.25h1.5c0-.97-.78-1.75-1.75-1.75v1.5zm.25.25v5h1.5v-5h-1.5zm0 5c0 .14-.11.25-.25.25v1.5c.97 0 1.75-.78 1.75-1.75h-1.5zm13-6v-.5h-1.5v.5h1.5zm0-.5c0-4-3.25-7.25-7.25-7.25v1.5c3.18 0 5.75 2.57 5.75 5.75h1.5zM12 2.25c-4 0-7.25 3.25-7.25 7.25h1.5c0-3.18 2.57-5.75 5.75-5.75v-1.5zM4.75 9.5v.5h1.5v-.5h-1.5zm7.88 11h-1.25V22h1.25v-1.5zm-1.25 0c-.28 0-.5-.22-.5-.5h-1.5c0 1.1.9 2 2 2v-1.5zm-.5-.5c0-.28.22-.5.5-.5V18c-1.1 0-2 .9-2 2h1.5zm.5-.5h1.25V18h-1.25v1.5zm1.25 0c.28 0 .5.22.5.5h1.5c0-1.1-.9-2-2-2v1.5zm.5.5c0 .28-.22.5-.5.5V22c1.1 0 2-.9 2-2h-1.5zm.75.75H16v-1.5h-2.12v1.5zm2.12 0c1.52 0 2.75-1.23 2.75-2.75h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM18.75 18v-1h-1.5v1h1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default LiveAgent;
