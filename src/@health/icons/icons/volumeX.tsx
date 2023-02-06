import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const VolumeX = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10.5 19.74c-.4 0-.8-.14-1.13-.42L5.6 16.13H3.5c-.96 0-1.75-.79-1.75-1.75V9.63c0-.96.79-1.75 1.75-1.75h2.1l3.77-3.19c.53-.45 1.24-.54 1.87-.25.63.29 1.01.9 1.01 1.59v11.96c0 .69-.39 1.3-1.02 1.59-.24.11-.49.17-.74.17zm-4.62-5.11c.17 0 .34.06.48.18l3.98 3.37c.11.09.21.06.27.04.05-.03.15-.09.15-.23V6.02c0-.14-.09-.2-.15-.23a.258.258 0 00-.27.04L6.36 9.2c-.14.11-.31.18-.48.18H3.5c-.14 0-.25.11-.25.25v4.75c0 .14.11.25.25.25h2.38zm14.95.57c-.19 0-.38-.07-.53-.22l-1.97-1.97-1.97 1.97c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l1.97-1.97-1.97-1.97c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l1.97 1.97 1.97-1.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.97 1.97 1.97 1.97c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default VolumeX;
