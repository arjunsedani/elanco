import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Smartphone = forwardRef(
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
          d="M8 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H8zM5.25 5c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v14c0 1.52-1.23 2.75-2.75 2.75H8c-1.52 0-2.75-1.23-2.75-2.75V5zM10 6c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-.41 0-.75-.34-.75-.75zm1 11.5c0-.56.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm.5 0z"
          fill="#9ba4ab"
          fillRule="evenodd"
        />
      </StyledSVG>
    );
  },
);

export default Smartphone;
