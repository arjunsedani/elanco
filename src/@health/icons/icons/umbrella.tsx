import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Umbrella = forwardRef(
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
          d="M12.75 13c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm4 6c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-4-16c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zM3 13l-.74-.11c-.03.22.03.44.17.6.14.17.35.26.57.26V13zm18 0v.75c.22 0 .43-.1.57-.26.14-.17.21-.38.17-.6L21 13zm-3.05-5.71l.5-.56-.5.56zm-11.89 0l-.5-.56.5.56zm5.2 5.71v6h1.5v-6h-1.5zm0 6c0 1.52 1.23 2.75 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5zm2.75 2.75c1.52 0 2.75-1.23 2.75-2.75h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM12.76 5V3h-1.5v2h1.5zM3 13.75h18v-1.5H3v1.5zm18.74-.86c-.37-2.45-1.47-4.51-3.29-6.16l-1 1.11c1.56 1.41 2.5 3.15 2.81 5.26l1.48-.22zm-3.3-6.16c-1.85-1.65-4-2.48-6.45-2.48v1.5c2.07 0 3.87.69 5.45 2.1l1-1.12zm-6.45-2.48c-2.44 0-4.6.83-6.45 2.48l1 1.12c1.58-1.41 3.38-2.1 5.45-2.1v-1.5zM5.54 6.73c-1.82 1.64-2.93 3.71-3.29 6.16l1.48.22C4.05 11 4.98 9.25 6.54 7.85l-1-1.11z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Umbrella;
