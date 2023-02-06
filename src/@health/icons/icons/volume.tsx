import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Volume = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10.5 19.74c-.4 0-.8-.14-1.13-.42L5.6 16.13H3.5c-.96 0-1.75-.79-1.75-1.75V9.63c0-.96.79-1.75 1.75-1.75h2.1l3.77-3.19c.52-.45 1.24-.54 1.87-.25.63.29 1.02.9 1.02 1.59V18c0 .69-.39 1.3-1.01 1.59-.24.11-.49.17-.74.17zm-7-10.36c-.14 0-.25.11-.25.25v4.75c0 .14.11.25.25.25h2.38c.18 0 .35.06.48.18l3.98 3.37c.11.09.21.06.27.04.05-.02.15-.09.15-.23V6.02c0-.14-.09-.2-.15-.23a.258.258 0 00-.27.04L6.36 9.2c-.14.11-.31.18-.48.18H3.5zm12.04 7.35c-.25 0-.5-.13-.64-.35a.747.747 0 01.24-1.03c.98-.61 1.61-1.92 1.61-3.34s-.63-2.73-1.61-3.35a.747.747 0 11.79-1.27c1.43.9 2.31 2.67 2.31 4.62s-.89 3.72-2.32 4.61c-.12.08-.26.11-.39.11z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Volume;
