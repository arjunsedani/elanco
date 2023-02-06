import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FolderMinus = forwardRef(
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
          d="M19 20.75H5c-1.52 0-2.75-1.23-2.75-2.75V6c0-1.52 1.23-2.75 2.75-2.75h4.47c.58 0 1.12.29 1.45.76l1.41 2.07c.05.07.12.11.21.11h6.47c1.52 0 2.75 1.23 2.75 2.75V18c0 1.52-1.23 2.75-2.75 2.75zm-14-16c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V8.94c0-.69-.56-1.25-1.25-1.25h-6.47c-.58 0-1.12-.29-1.45-.77l-1.4-2.06a.248.248 0 00-.21-.11H5zm9.74 9.37h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FolderMinus;
