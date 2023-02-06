import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LifeBuoy = forwardRef(
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
          d="M12 21.75c-2.5 0-4.99-.95-6.89-2.85-1.84-1.84-2.86-4.29-2.86-6.89s1.01-5.05 2.86-6.89C6.95 3.28 9.4 2.26 12 2.26s5.05 1.01 6.89 2.86c3.8 3.8 3.8 9.99 0 13.79-1.9 1.9-4.4 2.85-6.89 2.85zm-5.28-3.41a8.27 8.27 0 0010.56 0l-1.78-1.78c-2 1.54-5 1.54-7 0l-1.78 1.78zM5.66 6.72C4.42 8.2 3.75 10.05 3.75 12s.67 3.8 1.91 5.28l1.78-1.78c-.77-1-1.19-2.22-1.19-3.5s.42-2.5 1.19-3.5L5.66 6.72zm10.9 8.78l1.78 1.78a8.27 8.27 0 000-10.56l-1.78 1.77c.77 1 1.19 2.22 1.19 3.51s-.42 2.5-1.19 3.5zM12 7.75c-1.14 0-2.2.44-3.01 1.24S7.75 10.86 7.75 12s.44 2.2 1.24 3 1.87 1.25 3.01 1.25 2.2-.44 3-1.25 1.25-1.87 1.25-3-.44-2.19-1.23-2.99L15 8.99h-.01c-.8-.8-1.86-1.24-2.99-1.24zM6.72 5.66L8.5 7.44c2-1.54 5-1.54 7 0l1.78-1.78C15.8 4.42 13.95 3.75 12 3.75s-3.8.67-5.28 1.91z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default LifeBuoy;
