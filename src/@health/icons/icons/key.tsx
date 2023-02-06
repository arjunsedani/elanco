import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Key = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M7.06 16.81c-1.29 0-2.5-.5-3.4-1.41-.91-.91-1.41-2.12-1.41-3.4s.5-2.5 1.41-3.4a4.816 4.816 0 016.81 0c.73.73 1.2 1.65 1.35 2.65H21c.41 0 .75.34.75.75v3.48c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.73h-2.5v2.73c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.73h-4.43c-.16 1-.62 1.92-1.35 2.65-.91.91-2.12 1.41-3.4 1.41zm0-8.13c-.85 0-1.7.32-2.34.97-.63.63-.97 1.46-.97 2.34s.34 1.72.97 2.34c1.25 1.25 3.44 1.25 4.69 0 .62-.62.97-1.45.97-2.33v-.02c0-.88-.35-1.71-.97-2.33s-1.5-.97-2.34-.97z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Key;
