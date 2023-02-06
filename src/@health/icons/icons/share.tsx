import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Share = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 21.75H6c-1.52 0-2.75-1.23-2.75-2.75v-7c0-1.52 1.23-2.75 2.75-2.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75v7c0 1.52-1.23 2.75-2.75 2.75zm-6-7c-.41 0-.75-.34-.75-.75V4.81L9.53 6.53c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3-3c.07-.08.15-.13.23-.16a.8.8 0 01.57 0c.08.03.15.08.22.14h.01v.02h.02l3 3.01c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.72-1.72V14c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Share;
