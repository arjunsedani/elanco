import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const VisaLogo = forwardRef(
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
        <defs>
          <clipPath id="prefix__a">
            <rect width={24} height={24} rx={2.37} ry={2.37} fill="none" />
          </clipPath>
          <clipPath id="prefix__b">
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <g clipPath="url(#prefix__b)">
            <path
              d="M2 4C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm4.21 10.67l-.55-4.31 1.34.92-2.26-1.94h2.17l.22 2.54c.03.3.05.6.07.9.11-.29.24-.61.4-.96l1.07-2.48h1.43l-2.53 5.34H6.21zm3.58 0l.93-5.34H12l-.93 5.34H9.79zm3.43.08c-.58 0-1.11-.15-1.41-.39l-.09-.07.43-1.16.14.09c.29.19.66.3 1.01.3.27 0 .59-.11.59-.43 0-.17-.09-.31-.55-.57-.48-.28-1.04-.71-1.04-1.47 0-1.05.81-1.79 1.96-1.79.47 0 .85.09 1.16.27l.11.06-.41 1.19-.15-.09c-.06-.03-.36-.2-.76-.2s-.59.19-.59.37c0 .19.23.35.6.57.66.38.99.86.99 1.46 0 1.11-.81 1.85-2.02 1.85zm5-.08l-.1-1.3h-1.11l-.55 1.3h-1.37l2.39-5.34h1.48l.57 5.34H18.2z"
              fill="#172733"
            />
            <path
              d="M17.96 10.97c-.05.14-.1.28-.15.4l-.36.86h.62l-.08-.91c0-.1-.02-.22-.02-.35z"
              fill="#010002"
            />
          </g>
        </g>
      </StyledSVG>
    );
  },
);

export default VisaLogo;
