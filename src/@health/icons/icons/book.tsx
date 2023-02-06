import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Book = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18.5 21.75h-13c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h13c1.52 0 2.75 1.23 2.75 2.75v14c0 1.52-1.23 2.75-2.75 2.75zM4.25 19c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-1.55c-.38.19-.8.3-1.25.3h-13c-.69 0-1.25.56-1.25 1.25zM5.5 3.75c-.69 0-1.25.56-1.25 1.25v11.55c.38-.19.8-.3 1.25-.3h13c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-13zm11 9h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4.34h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Book;
