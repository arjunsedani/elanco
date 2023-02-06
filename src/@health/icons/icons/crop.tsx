import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Crop = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17 21.75c-.41 0-.75-.34-.75-.75v-3.25H9c-1.52 0-2.75-1.23-2.75-2.75V7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V3c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .69.56 1.25 1.25 1.25h12c.41 0 .75.34.75.75s-.34.75-.75.75h-3.25V21c0 .41-.34.75-.75.75zm0-8c-.41 0-.75-.34-.75-.75V9c0-.69-.56-1.25-1.25-1.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c1.52 0 2.75 1.23 2.75 2.75v4c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Crop;
