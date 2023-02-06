import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FilePlus = forwardRef(
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
          d="M16.5 22.75c-2.89 0-5.25-2.36-5.25-5.25s2.36-5.25 5.25-5.25 5.25 2.36 5.25 5.25-2.36 5.25-5.25 5.25zm0-9c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75zm-6.5 8H6c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h7.17c.73 0 1.42.29 1.94.81l2.83 2.83c.52.52.81 1.21.81 1.94V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.75H14c-.96 0-1.75-.79-1.75-1.75V3.75H6c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h4c.41 0 .75.34.75.75s-.34.75-.75.75zm3.75-17.86V7c0 .14.11.25.25.25h3.11c-.06-.11-.13-.22-.22-.31l-2.83-2.83a.973.973 0 00-.31-.22zm2.75 16.15c-.41 0-.75-.34-.75-.75v-1.04h-1.04c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.04v-1.04c0-.41.34-.75.75-.75s.75.34.75.75v1.04h1.04c.41 0 .75.34.75.75s-.34.75-.75.75h-1.04v1.04c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FilePlus;
