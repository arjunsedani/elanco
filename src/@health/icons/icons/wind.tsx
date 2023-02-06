import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Wind = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.67 20.75c-.87 0-1.68-.34-2.3-.95-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0c.33.33.77.51 1.24.51a1.739 1.739 0 001.75-1.75 1.739 1.739 0 00-1.75-1.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.67c.87 0 1.68.34 2.3.95.61.61.95 1.43.95 2.3s-.34 1.68-.95 2.3c-.61.61-1.43.95-2.3.95zm6.99-7H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.66a1.593 1.593 0 001.13-2.72c-.6-.6-1.65-.6-2.25 0-.29.29-.77.29-1.06 0s-.29-.77 0-1.06c1.17-1.17 3.21-1.17 4.38 0a3.084 3.084 0 010 4.37c-.58.58-1.36.91-2.19.91zm-8.6-2H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.06c.6 0 1.17-.23 1.59-.66.88-.88.88-2.31 0-3.18-.88-.88-2.31-.88-3.18 0-.29.29-.77.29-1.06 0s-.29-.77 0-1.06a3.754 3.754 0 015.3 0 3.754 3.754 0 010 5.3c-.71.71-1.65 1.1-2.65 1.1z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Wind;
