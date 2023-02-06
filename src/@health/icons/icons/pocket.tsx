import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Pocket = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75V5c0-1.52 1.23-2.75 2.75-2.75h14c1.52 0 2.75 1.23 2.75 2.75v7c0 5.38-4.37 9.75-9.75 9.75zm-7-18c-.69 0-1.25.56-1.25 1.25v7c0 4.55 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25V5c0-.69-.56-1.25-1.25-1.25H5zm7 11c-.19 0-.38-.07-.53-.22l-5-5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 12.94l4.47-4.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Pocket;
