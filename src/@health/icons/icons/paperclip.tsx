import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Paperclip = forwardRef(
  (props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M9.89 21.75c-1.71 0-3.31-.67-4.52-1.87-2.49-2.49-2.49-6.55 0-9.04L12.6 3.6c.88-.87 2.04-1.36 3.27-1.36s2.4.48 3.27 1.36c1.8 1.81 1.8 4.74 0 6.55l-7.23 7.23c-1.12 1.12-2.94 1.12-4.05 0s-1.12-2.94 0-4.05l5.49-5.49c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.49 5.49c-.53.53-.53 1.4 0 1.93s1.4.53 1.93 0l7.23-7.23a3.138 3.138 0 000-4.43c-1.18-1.18-3.24-1.18-4.43 0l-7.23 7.23a4.895 4.895 0 000 6.92c.92.92 2.15 1.43 3.46 1.43s2.54-.51 3.46-1.43l4.39-4.39c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.39 4.39a6.337 6.337 0 01-4.52 1.87z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Paperclip;
