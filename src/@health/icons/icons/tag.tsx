import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Tag = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 19.05H8.12c-.89 0-1.72-.43-2.24-1.15l-3.07-4.3c-.68-.96-.68-2.24 0-3.2l3.07-4.3c.51-.72 1.35-1.15 2.24-1.15H19c1.52 0 2.75 1.23 2.75 2.75v8.6c0 1.52-1.23 2.75-2.75 2.75zM8.12 6.45c-.4 0-.78.2-1.02.52l-3.07 4.3c-.31.43-.31 1.02 0 1.45l3.07 4.3c.23.33.61.52 1.02.52H19c.69 0 1.25-.56 1.25-1.25V7.7c0-.69-.56-1.25-1.25-1.25H8.12zm-1.63.09z"
        fill="#9ba4ab"
      />
      <path
        d="M9.3 14.55c-.65 0-1.31-.25-1.8-.75s-.75-1.12-.75-1.8.27-1.32.75-1.8c.96-.96 2.64-.96 3.61 0a2.535 2.535 0 010 3.6c-.5.5-1.15.75-1.8.75zm0-3.6c-.28 0-.54.11-.74.31s-.31.46-.31.74.11.54.31.74c.41.41 1.08.41 1.48 0a1.037 1.037 0 000-1.48c-.2-.2-.46-.31-.74-.31z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Tag;
