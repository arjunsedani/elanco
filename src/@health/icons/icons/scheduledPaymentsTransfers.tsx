import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ScheduledPaymentsTransfers = forwardRef(
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
          d="M21 21.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25v-3.08H13c-.41 0-.75-.34-.75-.75v-1.78c0-.3.18-.58.47-.69l4-1.64a.8.8 0 01.57 0l4 1.64c.28.12.47.39.47.69v1.78c0 .41-.34.75-.75.75h-.25v3.08h.25c.41 0 .75.34.75.75s-.34.75-.75.75zm-3.25-1.5h1.5v-3.08h-1.5v3.08zm-3 0h1.5v-3.08h-1.5v3.08zm-1-4.58h6.5v-.53L17 13.81l-3.25 1.33v.53zM10 19.75H6c-1 0-1.94-.39-2.65-1.1S2.25 17 2.25 16V7c0-1 .39-1.94 1.1-2.65C4.06 3.64 5 3.25 6 3.25h.25V3c0-.41.34-.75.75-.75s.75.34.75.75v.25h6.5V3c0-.41.34-.75.75-.75s.75.34.75.75v.25H16c1 0 1.94.39 2.65 1.1S19.75 6 19.75 7v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25H3.75V16c0 .6.23 1.17.66 1.59.42.42 1 .66 1.59.66h4c.41 0 .75.34.75.75s-.34.75-.75.75zM3.75 8.25h14.5V7c0-.59-.24-1.17-.66-1.59-.42-.43-.99-.66-1.59-.66h-.25V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25h-6.5V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25H6c-.6 0-1.17.23-1.59.66-.43.42-.66.99-.66 1.59v1.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ScheduledPaymentsTransfers;
