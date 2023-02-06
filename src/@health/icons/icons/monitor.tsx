import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Monitor = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14.5 21.75H8.14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.69l.31-2.5H5.56c-1.83 0-3.32-1.49-3.32-3.32V5.57c0-1.83 1.49-3.32 3.32-3.32h12.86c1.83 0 3.32 1.49 3.32 3.32v8.86c0 1.83-1.49 3.32-3.32 3.32h-3.58l.31 2.5h.7c.41 0 .75.34.75.75s-.34.75-.75.75h-1.36zm-4.15-1.5h3.3l-.31-2.5h-2.68l-.31 2.5zm3.66-4h4.42c1 0 1.82-.82 1.82-1.82V5.57c0-1-.82-1.82-1.82-1.82H5.57c-1 0-1.82.82-1.82 1.82v8.86c0 1 .82 1.82 1.82 1.82h8.44z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Monitor;
