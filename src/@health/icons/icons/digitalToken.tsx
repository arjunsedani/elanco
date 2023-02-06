import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DigitalToken = forwardRef(
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
          d="M7.46 9.22c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM11.8 3l-.04-.75.04.75zm3.24 6.21c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-3.79 7.28c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-2.55c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5-.77zM8.96 9.21V6.99h-1.5v2.22h1.5zm0-2.22c0-1.71 1.28-3.17 2.88-3.25l-.08-1.5c-2.5.13-4.3 2.35-4.3 4.75h1.5zm2.88-3.25a3.04 3.04 0 013.2 3.04h1.5c0-2.59-2.17-4.67-4.78-4.53l.08 1.5zm3.2 3.04v2.43h1.5V6.78h-1.5zm1.03 3.65a5.74 5.74 0 010 8.13l1.06 1.06a7.249 7.249 0 000-10.25l-1.06 1.06zm0 8.13a5.74 5.74 0 01-8.13 0l-1.06 1.06a7.249 7.249 0 0010.25 0l-1.06-1.06zm-8.13 0a5.74 5.74 0 010-8.13L6.88 9.37a7.249 7.249 0 000 10.25l1.06-1.06zm0-8.13a5.74 5.74 0 018.13 0l1.06-1.06a7.249 7.249 0 00-10.25 0l1.06 1.06zm4.82 6.07v-2.55h-1.5v2.55h1.5zm-.75-4.82c-.83 0-1.5.67-1.5 1.51h1.5v-1.51zm-1.5 1.5c0 .83.67 1.5 1.5 1.5v-1.5h-1.5zm1.5 1.5c.83 0 1.5-.67 1.5-1.5h-1.5v1.5zm1.5-1.5c0-.83-.67-1.5-1.5-1.5v1.5h1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default DigitalToken;
