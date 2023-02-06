import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const AlignRight = forwardRef(
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
          d="M20 20.25h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75zm0-5H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zm0-5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zm0-5H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default AlignRight;
