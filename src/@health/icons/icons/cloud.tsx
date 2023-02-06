import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Cloud = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 19.75H7c-3.17 0-5.75-2.58-5.75-5.75 0-2.7 1.92-5.03 4.52-5.6A6.745 6.745 0 0112 4.25c3.49 0 6.36 2.66 6.71 6.05 2.28.35 4.04 2.32 4.04 4.7 0 2.62-2.13 4.75-4.75 4.75zm-6-14c-2.25 0-4.24 1.43-4.97 3.56-.09.27-.33.46-.61.5-2.1.29-3.68 2.09-3.68 4.19a4.26 4.26 0 004.25 4.25h11c1.79 0 3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25c-.41 0-.75-.34-.75-.75 0-2.9-2.36-5.25-5.25-5.25zM6.32 9.07z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Cloud;
