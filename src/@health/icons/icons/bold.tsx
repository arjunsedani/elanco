import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Bold = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 18.75H7c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75h5.88c1 0 1.94.39 2.65 1.1S16.63 8 16.63 9s-.37 1.9-1.04 2.6c.39.18.76.44 1.07.75.71.71 1.1 1.65 1.1 2.65s-.39 1.94-1.1 2.65-1.65 1.1-2.65 1.1zm-6.25-1.5H14c.6 0 1.17-.23 1.59-.66s.66-.99.66-1.59-.23-1.17-.66-1.59c-.42-.43-.99-.66-1.59-.66H7.75v4.5zm0-6h5.12c.6 0 1.17-.23 1.59-.66.42-.42.66-1 .66-1.59s-.24-1.17-.66-1.59c-.42-.43-.99-.66-1.59-.66H7.75v4.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Bold;
