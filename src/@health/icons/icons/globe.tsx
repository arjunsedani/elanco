import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Globe = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10.17 4.06l.64.39-.64-.39zm0 15.88l.64-.39-.64.39zm3.66 0l-.64-.39.64.39zm0-15.88l.64-.39-.64.39zM12 3.75c4.57 0 8.25 3.68 8.25 8.25h1.5c0-5.4-4.35-9.75-9.75-9.75v1.5zM20.25 12c0 4.57-3.68 8.25-8.25 8.25v1.5c5.4 0 9.75-4.35 9.75-9.75h-1.5zM12 20.25c-4.57 0-8.25-3.68-8.25-8.25h-1.5c0 5.4 4.35 9.75 9.75 9.75v-1.5zM3.75 12c0-4.57 3.68-8.25 8.25-8.25v-1.5A9.73 9.73 0 002.25 12h1.5zm5.77-8.33c-3.03 5.06-3.03 11.59 0 16.65l1.29-.77c-2.75-4.59-2.75-10.52 0-15.11l-1.29-.77zm0 16.65c1.14 1.9 3.81 1.9 4.95 0l-1.29-.77c-.55.93-1.82.93-2.38 0l-1.29.77zm4.95 0c3.03-5.06 3.03-11.59 0-16.65l-1.29.77c2.75 4.59 2.75 10.52 0 15.11l1.29.77zm0-16.65a2.862 2.862 0 00-4.95 0l1.29.77c.55-.93 1.82-.93 2.38 0l1.29-.77zM3 12.75h18v-1.5H3v1.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Globe;
