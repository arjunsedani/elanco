import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Feather = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M3 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.77-2.77v-5.46c0-1 .39-1.95 1.1-2.65l5.68-5.67a5.71 5.71 0 018.06 0c1.08 1.08 1.67 2.51 1.67 4.03s-.59 2.96-1.67 4.03l-5.67 5.66c-.7.7-1.67 1.1-2.65 1.1H6.32l-2.79 2.79c-.15.15-.34.22-.53.22zm4.82-4.51h3.94c.59 0 1.17-.24 1.59-.66l5.67-5.66c.79-.79 1.23-1.85 1.23-2.97s-.44-2.18-1.23-2.97c-1.64-1.63-4.3-1.64-5.94 0L7.4 10.65c-.43.42-.66.99-.66 1.59v3.96l8.73-8.73c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-8.71 8.71z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Feather;
