import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Filter = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14.5 13.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.21-5.21s.07-.11.07-.18V3.99c0-.14-.11-.25-.25-.25H5c-.14 0-.25.11-.25.25v2.59c0 .07.03.13.07.18l5.21 5.21c.29.29.29.77 0 1.06s-.77.29-1.06 0L3.76 7.82c-.33-.32-.51-.77-.51-1.24V3.99c0-.96.79-1.75 1.75-1.75h14c.96 0 1.75.79 1.75 1.75v2.59c0 .47-.18.91-.51 1.24l-5.21 5.21c-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
      <path
        d="M10.75 20.75c-.44 0-.87-.15-1.23-.42a1.99 1.99 0 01-.77-1.58V12.5c0-.41.34-.75.75-.75s.75.34.75.75v6.25c0 .21.12.34.19.39.07.06.23.14.43.09l2.5-.62c.22-.06.38-.25.38-.49V12.5c0-.41.34-.75.75-.75s.75.34.75.75v5.62c0 .92-.62 1.72-1.52 1.94l-2.5.62c-.16.04-.33.06-.49.06z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Filter;
