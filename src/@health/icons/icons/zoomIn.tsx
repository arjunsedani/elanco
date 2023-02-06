import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ZoomIn = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 20.74c-.19 0-.39-.07-.53-.22l-5.35-5.42a6.652 6.652 0 01-4.15 1.43c-1.8 0-3.48-.7-4.75-1.97S3.25 11.6 3.25 9.81s.7-3.48 1.97-4.75 2.96-1.97 4.75-1.97 3.48.7 4.75 1.97a6.68 6.68 0 011.97 4.75c0 1.56-.53 3.04-1.5 4.24l5.35 5.42c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22zM9.97 4.58c-1.39 0-2.71.54-3.69 1.53S4.75 8.41 4.75 9.8s.54 2.71 1.53 3.69 2.3 1.53 3.69 1.53 2.62-.51 3.59-1.43c.02-.02.04-.05.06-.07s.05-.04.07-.06c.96-.98 1.5-2.28 1.5-3.66s-.54-2.71-1.53-3.69c-.99-.99-2.3-1.53-3.69-1.53zm.03 8.17c-.41 0-.75-.34-.75-.75v-1.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V8c0-.41.34-.75.75-.75s.75.34.75.75v1.25H12c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V12c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default ZoomIn;
