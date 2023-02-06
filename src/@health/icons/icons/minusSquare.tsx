import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MinusSquare = forwardRef(
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
          d="M18 20.75H6c-1.52 0-2.75-1.23-2.75-2.75V6c0-1.52 1.23-2.75 2.75-2.75h12c1.52 0 2.75 1.23 2.75 2.75v12c0 1.52-1.23 2.75-2.75 2.75zm-12-16c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25H6z"
          fill="#9ba4ab"
        />
        <path
          d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default MinusSquare;
