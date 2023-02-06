import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Minimize = forwardRef(
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
          d="M19 13.75h-6c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75v6c0 1.52-1.23 2.75-2.75 2.75zm-6-10c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-6zM21 21.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V17c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75zM3 7.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H3.75V7c0 .41-.34.75-.75.75zM7 21.75H3c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H7c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M3.5 21.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4.5-4.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.5 4.5c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Minimize;
