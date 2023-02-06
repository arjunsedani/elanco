import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ThumbsDown = forwardRef(
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
          d="M10.97 19.61c-.75 0-1.44-.33-1.92-.91a2.57 2.57 0 01-.58-1.62v-2.52H6.12c-.85 0-1.64-.42-2.12-1.13l-.33-.49a2.53 2.53 0 01-.33-2.12L4.7 6.1a2.55 2.55 0 012.45-1.84h6.29c.71 0 1.39.3 1.87.81l.14.15c.3-.57.91-.96 1.6-.96h1.89c1 0 1.81.81 1.81 1.81v7.39c0 1-.81 1.81-1.81 1.81h-1.89c-.45 0-.86-.16-1.18-.44l-2.94 3.82c-.46.6-1.16.96-1.93.97h-.04zM7.16 5.75c-.46 0-.88.31-1.01.76l-1.36 4.72c-.09.3-.04.62.14.87l.33.49c.2.29.52.47.87.47h3.1c.41 0 .75.34.75.75v3.27c0 .24.08.48.24.66.19.24.48.4.78.36.3 0 .58-.14.76-.38l3.49-4.55V7.19l-1.03-1.11c-.2-.21-.48-.33-.77-.33H7.16zm9.59 7.69c0 .18.14.31.31.31h1.89c.17 0 .31-.14.31-.31V6.06c0-.17-.14-.31-.31-.31h-1.89c-.17 0-.31.14-.31.31V13.42z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ThumbsDown;
