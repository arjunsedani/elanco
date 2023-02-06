import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const InvestmentAccountVickers = forwardRef(
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
          d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V9c0-1.52 1.23-2.75 2.75-2.75h2.25V5c0-.73.29-1.42.81-1.94s1.21-.81 1.94-.81h4c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v1.25H19c1.52 0 2.75 1.23 2.75 2.75v10c0 1.52-1.23 2.75-2.75 2.75zm-14-14c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25H5zm3.75-1.5h6.5V5c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37h-4c-.33 0-.65.13-.88.37s-.37.55-.37.88v1.25zm4.25 9.5c-.19 0-.38-.07-.53-.22l-1.97-1.97-1.97 1.97c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0L13 13.94l2.47-2.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default InvestmentAccountVickers;
