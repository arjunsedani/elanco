import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Crosshair = forwardRef(
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
          d="M11.25 21c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-4c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm0-14c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5 4c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM7 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-4-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm18 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-4-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm-.58-3.67a6.253 6.253 0 010 8.84l1.06 1.06a7.744 7.744 0 000-10.96l-1.06 1.06zm0 8.84a6.253 6.253 0 01-8.84 0l-1.06 1.06a7.744 7.744 0 0010.96 0l-1.06-1.06zm-8.84 0a6.253 6.253 0 010-8.84L6.52 6.52a7.744 7.744 0 000 10.96l1.06-1.06zm0-8.84a6.253 6.253 0 018.84 0l1.06-1.06a7.744 7.744 0 00-10.96 0l1.06 1.06zM12.75 21v-4h-1.5v4h1.5zm-1.5-18v4h1.5V3h-1.5zM7 11.25H3v1.5h4v-1.5zm14 0h-4v1.5h4v-1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Crosshair;
