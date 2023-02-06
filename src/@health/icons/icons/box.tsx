import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Box = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 22.75h-.09c-.45-.01-.89-.14-1.29-.37l-6.93-4c-.85-.49-1.38-1.4-1.38-2.38V8c0-.47.12-.93.35-1.34 0-.01.01-.03.02-.04l.02-.04c.24-.4.57-.73.98-.97l6.94-3.99c.85-.49 1.9-.49 2.75 0l6.93 4c.41.24.74.57.98.96 0 .01.02.03.03.04s.02.03.02.05c.22.4.34.86.34 1.33v8c0 .98-.53 1.89-1.38 2.38l-6.92 4c-.4.23-.84.35-1.29.37h-.09zm.75-10.32V21l6.8-3.93c.39-.22.62-.64.62-1.08V8.14l-7.43 4.29zM3.82 8.15V16c0 .45.24.86.62 1.08l6.8 3.93v-8.58L3.82 8.15zm.75-1.3L12 11.14l7.43-4.29-6.8-3.93c-.39-.22-.87-.22-1.25 0l-6.8 3.93z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Box;
