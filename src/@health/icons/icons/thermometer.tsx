import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Thermometer = forwardRef(
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
          d="M12 21.75c-3.17 0-5.75-2.58-5.75-5.75 0-1.68.72-3.24 2-4.34V6c0-2.07 1.68-3.75 3.75-3.75S15.75 3.93 15.75 6v5.67c1.28 1.1 2 2.66 2 4.33 0 3.17-2.58 5.75-5.75 5.75zm0-18c-1.24 0-2.25 1.01-2.25 2.25v6.02c0 .24-.11.46-.3.6-1.08.82-1.7 2.05-1.7 3.38 0 2.34 1.91 4.25 4.25 4.25s4.25-1.91 4.25-4.25c0-1.33-.62-2.56-1.7-3.38a.739.739 0 01-.3-.6V6c0-1.24-1.01-2.25-2.25-2.25zm-3 8.27zm3 6.73c-.73 0-1.43-.29-1.94-.81-.52-.52-.81-1.21-.81-1.94s.29-1.42.81-1.94c.34-.34.75-.58 1.19-.7V8.01c0-.41.34-.75.75-.75s.75.34.75.75v5.35c.45.13.86.37 1.19.7.52.52.81 1.21.81 1.94s-.29 1.42-.81 1.94-1.21.81-1.94.81zm0-4c-.33 0-.65.13-.88.37s-.37.55-.37.88.13.65.37.88c.47.47 1.29.47 1.77 0a1.234 1.234 0 000-1.76c-.24-.24-.55-.37-.88-.37z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Thermometer;
