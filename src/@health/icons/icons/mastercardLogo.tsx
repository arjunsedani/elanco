import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MastercardLogo = forwardRef(
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
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            d="M2 4C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2z"
            fill="#172733"
          />
          <path
            d="M12 15.64c-.85.73-1.95 1.17-3.15 1.17-2.68 0-4.85-2.2-4.85-4.91s2.17-4.91 4.85-4.91c1.2 0 2.3.44 3.15 1.17.85-.73 1.95-1.17 3.15-1.17 2.68 0 4.85 2.2 4.85 4.91s-2.17 4.91-4.85 4.91c-1.2 0-2.3-.44-3.15-1.17z"
            fill="#ed0006"
            fillRule="evenodd"
          />
          <path
            d="M12 15.64c1.04-.9 1.7-2.24 1.7-3.74s-.66-2.84-1.7-3.74c.85-.73 1.95-1.17 3.15-1.17 2.68 0 4.85 2.2 4.85 4.91s-2.17 4.91-4.85 4.91c-1.2 0-2.3-.44-3.15-1.17z"
            fill="#f9a000"
            fillRule="evenodd"
          />
          <path
            d="M12 15.64c1.04-.9 1.7-2.24 1.7-3.74s-.66-2.84-1.7-3.74c-1.04.9-1.7 2.24-1.7 3.74s.66 2.84 1.7 3.74z"
            fill="#ff5e00"
            fillRule="evenodd"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default MastercardLogo;
