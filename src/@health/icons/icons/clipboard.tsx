import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Clipboard = forwardRef(
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
          d="M15 7.75H9c-.96 0-1.75-.79-1.75-1.75V4c0-.96.79-1.75 1.75-1.75h6c.96 0 1.75.79 1.75 1.75v2c0 .96-.79 1.75-1.75 1.75zm-6-4c-.14 0-.25.11-.25.25v2c0 .14.11.25.25.25h6c.14 0 .25-.11.25-.25V4c0-.14-.11-.25-.25-.25H9z"
          fill="#9ba4ab"
        />
        <path
          d="M18 21.75H6c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V7c0-.73.29-1.42.81-1.94S5.27 4.25 6 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.33 0-.65.13-.88.37s-.37.55-.37.88v12c0 .33.13.65.37.88s.55.37.88.37h12c.33 0 .65-.13.88-.37s.37-.55.37-.88V7c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v12c0 .73-.29 1.42-.81 1.94s-1.21.81-1.94.81z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Clipboard;
