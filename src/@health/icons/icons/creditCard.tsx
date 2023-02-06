import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CreditCard = forwardRef(
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
          d="M3 8.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm18 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-11.43 4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM7 12.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm-4-2.5h18v-1.5H3v1.5zm6.57 2.5H7v1.5h2.57v-1.5zm8.43 6H6v1.5h12v-1.5zm-12 0c-1.24 0-2.25-1.01-2.25-2.25h-1.5c0 2.07 1.68 3.75 3.75 3.75v-1.5zM3.75 16V8h-1.5v8h1.5zm0-8c0-1.24 1.01-2.25 2.25-2.25v-1.5C3.93 4.25 2.25 5.93 2.25 8h1.5zM6 5.75h12v-1.5H6v1.5zm12 0c1.24 0 2.25 1.01 2.25 2.25h1.5c0-2.07-1.68-3.75-3.75-3.75v1.5zM20.25 8v8h1.5V8h-1.5zm0 8c0 1.24-1.01 2.25-2.25 2.25v1.5c2.07 0 3.75-1.68 3.75-3.75h-1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CreditCard;
