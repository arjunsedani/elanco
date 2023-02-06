import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Italic = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14.18 18.75H5.46c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.48l4.49-10.5H9.82c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.73c.41 0 .75.34.75.75s-.34.75-.75.75h-3.48l-4.49 10.5h3.61c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Italic;
