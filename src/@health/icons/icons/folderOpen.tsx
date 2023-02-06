import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FolderOpen = forwardRef(
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
          d="M17.89 20.75H4.66c-.63 0-1.26-.26-1.71-.71a2.39 2.39 0 01-.71-1.71V6c0-1.52 1.23-2.75 2.75-2.75h4.47c.58 0 1.12.29 1.45.77l1.4 2.06c.05.07.12.11.21.11h5.47c1.52 0 2.75 1.23 2.75 2.75v1.94c.14.12.28.25.39.4.52.66.72 1.5.54 2.32l-1.11 5a2.732 2.732 0 01-2.69 2.15zM6.9 19.25h10.99c.59 0 1.09-.4 1.22-.98l1.11-5a1.234 1.234 0 00-.54-1.32c-.04-.02-.07-.04-.1-.06-.17-.09-.37-.14-.57-.14H9.6c-.59 0-1.09.4-1.22.98l-1.36 6.13c-.03.13-.07.27-.12.39zM5 4.75c-.69 0-1.25.56-1.25 1.25v12.33c0 .24.1.48.27.65.17.17.41.27.65.27a.9.9 0 00.89-.72l1.36-6.13a2.73 2.73 0 012.68-2.15h9.39c.08 0 .17 0 .25.01V8.94c0-.69-.56-1.25-1.25-1.25h-5.47c-.58 0-1.12-.29-1.45-.77l-1.4-2.06a.248.248 0 00-.21-.11H5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FolderOpen;
