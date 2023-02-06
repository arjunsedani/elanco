import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LinkHorizontal = forwardRef(
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
          d="M16.75 16.75h-2.36c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.36c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5h-2.36c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.36c2.76 0 5 2.24 5 5s-2.24 5-5 5zm-7.14 0H7.25c-2.76 0-5-2.24-5-5s2.24-5 5-5h2.36c.41 0 .75.34.75.75s-.34.75-.75.75H7.25c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h2.36c.41 0 .75.34.75.75s-.34.75-.75.75zm6.39-4H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default LinkHorizontal;
