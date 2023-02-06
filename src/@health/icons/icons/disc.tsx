import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Disc = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-2.5 0-4.99-.95-6.89-2.85-1.84-1.84-2.86-4.29-2.86-6.89s1.01-5.05 2.86-6.89C6.95 3.28 9.4 2.26 12 2.26s5.05 1.01 6.89 2.86c3.8 3.8 3.8 9.99 0 13.79-1.9 1.9-4.4 2.85-6.89 2.85zm0-18c-2.2 0-4.28.86-5.83 2.42C4.61 7.73 3.75 9.8 3.75 12s.86 4.28 2.42 5.83c3.22 3.22 8.45 3.22 11.67 0s3.22-8.45 0-11.67a8.193 8.193 0 00-5.83-2.42z"
        fill="#9ba4ab"
      />
      <path
        d="M12 14.75c-.73 0-1.43-.29-1.94-.81a2.732 2.732 0 010-3.88c1.04-1.04 2.85-1.04 3.89 0 .52.52.81 1.21.81 1.94s-.29 1.42-.81 1.94-1.21.81-1.94.81zm0-4c-.33 0-.65.13-.88.37s-.37.55-.37.88.13.65.37.88c.47.47 1.29.47 1.77 0a1.234 1.234 0 000-1.76c-.24-.24-.55-.37-.88-.37z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Disc;
