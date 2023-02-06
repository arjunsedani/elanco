import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ToggleRight = forwardRef(
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
          d="M16 17.75H8c-3.17 0-5.75-2.58-5.75-5.75S4.83 6.25 8 6.25h8c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75zm-8-10c-2.34 0-4.25 1.91-4.25 4.25S5.66 16.25 8 16.25h8c2.34 0 4.25-1.91 4.25-4.25S18.34 7.75 16 7.75H8z"
          fill="#9ba4ab"
        />
        <path
          d="M16 14.75c-.7 0-1.41-.27-1.94-.8s-.81-1.21-.81-1.94.29-1.43.81-1.94a2.758 2.758 0 013.89 0c.52.52.81 1.21.81 1.94s-.29 1.42-.81 1.94-1.24.8-1.94.8zm0-4c-.32 0-.64.12-.88.37a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0a1.234 1.234 0 000-1.76c-.24-.24-.56-.37-.88-.37z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ToggleRight;
