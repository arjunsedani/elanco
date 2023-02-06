import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const VolumeSoft = forwardRef(
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
          d="M10.5 19.74c-.4 0-.8-.14-1.13-.42L5.6 16.13H3.5c-.96 0-1.75-.79-1.75-1.75V9.63c0-.96.79-1.75 1.75-1.75h2.1l3.77-3.19c.52-.45 1.24-.54 1.87-.25.63.29 1.02.9 1.02 1.59V18c0 .69-.39 1.3-1.01 1.59-.24.11-.49.17-.74.17zm-7-10.36c-.14 0-.25.11-.25.25v4.75c0 .14.11.25.25.25h2.38c.18 0 .35.06.48.18l3.98 3.37c.11.09.21.06.27.04.05-.02.15-.09.15-.23V6.02c0-.14-.09-.2-.15-.23a.258.258 0 00-.27.04L6.36 9.2c-.14.11-.31.18-.48.18H3.5zm12 5.41c-.22 0-.45-.1-.59-.29-.25-.33-.2-.8.13-1.05.42-.32.67-.84.67-1.38 0-.54-.25-1.05-.67-1.37a.74.74 0 01-.13-1.05c.25-.33.72-.39 1.05-.13.78.6 1.24 1.56 1.25 2.56 0 1-.47 1.96-1.25 2.56-.14.11-.3.16-.46.16z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default VolumeSoft;
