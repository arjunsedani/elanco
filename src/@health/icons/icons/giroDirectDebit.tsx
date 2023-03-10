import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const GiroDirectDebit = forwardRef(
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
          d="M19 21.75h-2.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H19c.69 0 1.25-.56 1.25-1.25v-2.19l-.22.22c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l1.5-1.5c.07-.07.15-.13.24-.16.18-.07.4-.07.58 0 .09.04.17.09.24.16l1.5 1.5c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.22-.22V19c0 1.52-1.23 2.75-2.75 2.75zm-10 0H4.71c-1.36 0-2.46-1.11-2.46-2.46V16c0-.41.34-.75.75-.75s.75.34.75.75v3.29c0 .53.43.96.96.96H9c.41 0 .75.34.75.75s-.34.75-.75.75zm4-2a.776.776 0 01-.53-.22l-1.5-1.5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.22.22V15c0-1.52 1.23-2.75 2.75-2.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.69 0-1.25.56-1.25 1.25v2.19l.22-.22c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.5 1.5c-.07.07-.15.13-.24.16-.09.04-.19.06-.29.06zm-3-7H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25v-4.5H3c-.41 0-.75-.34-.75-.75V4.4c0-.29.17-.55.43-.68l5-2.4c.21-.1.44-.1.65 0l5 2.4c.26.12.43.39.43.68V6c0 .41-.34.75-.75.75h-2.25V12c0 .41-.34.75-.75.75zm-2.25-1.5h1.5v-4.5h-1.5v4.5zm-3 0h1.5v-4.5h-1.5v4.5zm-1-6h8.5v-.38L8 2.83 3.75 4.87v.38zM21 9.75c-.41 0-.75-.34-.75-.75V5.71a.96.96 0 00-.96-.96H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.29c1.36 0 2.46 1.11 2.46 2.46V9c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default GiroDirectDebit;
