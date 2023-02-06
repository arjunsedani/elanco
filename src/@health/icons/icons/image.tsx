import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Image = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16 21.75H8c-3.17 0-5.75-2.58-5.75-5.75V8c0-3.17 2.58-5.75 5.75-5.75h8c3.17 0 5.75 2.58 5.75 5.75v8c0 3.17-2.58 5.75-5.75 5.75zM3.76 16.3c.15 2.2 2 3.95 4.24 3.95h8A4.26 4.26 0 0020.25 16V9.81l-4.31 4.31c-1.04 1.04-2.85 1.04-3.89 0l-2.17-2.17c-.47-.47-1.3-.47-1.77 0l-4.36 4.36zM8 3.75A4.26 4.26 0 003.75 8v6.19l3.31-3.31c1.04-1.04 2.85-1.04 3.89 0l2.17 2.17c.46.46 1.3.46 1.77 0l5.36-5.36c-.15-2.2-2-3.95-4.24-3.95H8zm6 5.05c-.21 0-.45-.1-.59-.26A.885.885 0 0113.2 8c0-.21.1-.44.25-.58.29-.28.87-.26 1.14.04.12.14.21.35.21.54 0 .21-.1.44-.25.58-.14.13-.36.22-.55.22zm.04-.76z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Image;
