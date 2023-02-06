import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const AppleWatch = forwardRef(
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
          d="M15.25 6.86c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-8 0c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM11 13h-.75c0 .41.34.75.75.75V13zm.75-3c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zM14 13.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm2.75-6.89V4h-1.5v2.86h1.5zm0-2.86c0-.97-.78-1.75-1.75-1.75v1.5c.14 0 .25.11.25.25h1.5zM15 2.25H9v1.5h6v-1.5zm-6 0c-.97 0-1.75.78-1.75 1.75h1.5c0-.14.11-.25.25-.25v-1.5zM7.25 4v2.86h1.5V4h-1.5zm0 13.14V20h1.5v-2.86h-1.5zm0 2.86c0 .97.78 1.75 1.75 1.75v-1.5c-.14 0-.25-.11-.25-.25h-1.5zM9 21.75h6v-1.5H9v1.5zm6 0c.97 0 1.75-.78 1.75-1.75h-1.5c0 .14-.11.25-.25.25v1.5zM16.75 20v-2.86h-1.5V20h1.5zM8 17.89h8v-1.5H8v1.5zm8 0c1.52 0 2.75-1.23 2.75-2.75h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zm2.75-2.75V9h-1.5v6.14h1.5zm0-6.14c0-1.52-1.23-2.75-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5zM16 6.25H8v1.5h8v-1.5zm-8 0C6.48 6.25 5.25 7.48 5.25 9h1.5c0-.69.56-1.25 1.25-1.25v-1.5zM5.25 9v6.14h1.5V9h-1.5zm0 6.14c0 1.52 1.23 2.75 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5zm6.5-2.14v-3h-1.5v3h1.5zm2.25-.75h-3v1.5h3v-1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default AppleWatch;
