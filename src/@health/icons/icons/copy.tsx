import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Copy = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 21.75H9c-1.52 0-2.75-1.23-2.75-2.75V9c0-1.52 1.23-2.75 2.75-2.75h10c1.52 0 2.75 1.23 2.75 2.75v10c0 1.52-1.23 2.75-2.75 2.75zm-10-14c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25H9z"
        fill="#9ba4ab"
      />
      <path
        d="M7 17.75H5c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V5c0-.73.29-1.42.81-1.94S4.27 2.25 5 2.25h10c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37H5c-.33 0-.65.13-.88.37s-.37.55-.37.88v10c0 .33.13.65.37.88s.55.37.88.37h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Copy;
