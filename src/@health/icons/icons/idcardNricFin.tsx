import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const IdcardNricFin = forwardRef(
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
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            d="M20 21.25H4c-1.52 0-2.75-1.23-2.75-2.75V5.54C1.25 4 2.5 2.75 4.04 2.75H20c1.52 0 2.75 1.23 2.75 2.75v13c0 1.52-1.23 2.75-2.75 2.75zm-15.96-17c-.71 0-1.29.58-1.29 1.29V18.5c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-13c0-.69-.56-1.25-1.25-1.25H4.04zm8.05 13c-.3 0-.58-.18-.7-.47a2.34 2.34 0 00-.6-.88c-.45-.42-1.03-.65-1.65-.65H7.85c-.61 0-1.2.23-1.65.65-.27.25-.47.54-.6.88-.15.38-.59.57-.97.42a.753.753 0 01-.42-.97 3.93 3.93 0 013.65-2.48h1.29c.99 0 1.94.37 2.67 1.04.43.4.76.88.98 1.43a.745.745 0 01-.7 1.02zm5.31-3H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.4c.41 0 .75.34.75.75s-.34.75-.75.75zm-8.9-1.5c-.8 0-1.55-.31-2.12-.88-.57-.57-.88-1.32-.88-2.12s.31-1.55.88-2.12c1.13-1.13 3.11-1.13 4.24 0 .57.57.88 1.32.88 2.12s-.31 1.55-.88 2.12c-.57.57-1.32.88-2.12.88zm0-4.5a1.499 1.499 0 00-1.06 2.56c.57.57 1.55.57 2.12 0a1.499 1.499 0 000-2.12c-.28-.28-.66-.44-1.06-.44zm10.5 2h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default IdcardNricFin;
