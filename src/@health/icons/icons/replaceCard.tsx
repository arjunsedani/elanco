import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ReplaceCard = forwardRef(
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
          d="M18.4 21.75H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.4a.857.857 0 00.85-.85v-1.59c-.29.27-.75.25-1.03-.03a.754.754 0 010-1.06l1.25-1.25c.07-.07.15-.13.24-.16.18-.07.4-.07.58 0 .09.04.17.09.24.16l1.25 1.25c.29.29.29.77 0 1.06s-.74.29-1.03.03v1.59c0 .63-.25 1.22-.69 1.66s-1.03.69-1.66.69zm-4.4-1a.776.776 0 01-.53-.22l-1.25-1.25a.754.754 0 010-1.06c.28-.28.74-.29 1.03-.03V16.6c0-.63.25-1.22.69-1.66s1.03-.69 1.66-.69H17c.41 0 .75.34.75.75s-.34.75-.75.75h-1.4a.857.857 0 00-.85.85v1.59c.29-.27.75-.25 1.03.03s.29.77 0 1.06l-1.25 1.25c-.07.07-.15.13-.24.16-.09.04-.19.06-.29.06zm-5-2H6c-1 0-1.94-.39-2.65-1.1S2.25 16 2.25 15V7c0-1 .39-1.94 1.1-2.65C4.06 3.64 5 3.25 6 3.25h12c1 0 1.94.39 2.65 1.1S21.75 6 21.75 7v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.75H3.75V15c0 .6.23 1.17.66 1.59.42.42 1 .66 1.59.66h3c.41 0 .75.34.75.75s-.34.75-.75.75zM3.75 7.25h16.5V7c0-.59-.24-1.17-.66-1.59-.42-.43-.99-.66-1.59-.66H6c-.6 0-1.17.23-1.59.66-.43.42-.66.99-.66 1.59v.25zM9 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ReplaceCard;
