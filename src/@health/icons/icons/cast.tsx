import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Cast = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 20.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.52 1.23-2.75 2.75-2.75h16c1.52 0 2.75 1.23 2.75 2.75v12c0 1.52-1.23 2.75-2.75 2.75zm-8 0c-.41 0-.75-.34-.75-.75 0-5.1-4.15-9.25-9.25-9.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75 0 .41-.34.75-.75.75zm-4 0c-.41 0-.75-.34-.75-.75 0-2.89-2.35-5.25-5.25-5.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.72 0 6.75 3.03 6.75 6.75 0 .41-.34.75-.75.75zm-4 0c-.41 0-.75-.34-.75-.75 0-.69-.56-1.25-1.25-1.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.52 0 2.75 1.23 2.75 2.75 0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Cast;
