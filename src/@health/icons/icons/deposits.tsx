import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Deposits = forwardRef(
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
          d="M21 21.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.25v-.07l-.71-1.43H13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.89v-6.57H3c-.41 0-.75-.34-.75-.75V6.92c0-.3.18-.57.45-.69l9-3.92a.78.78 0 01.6 0l9 3.93c.27.12.45.39.45.69v3.01c0 .41-.34.75-.75.75h-1.25v6.57H20c.28 0 .54.16.67.42l1 2c.05.1.08.22.08.33v1c0 .41-.34.75-.75.75zm-5.61-4.5h2.86v-6.57h-2.86v6.57zM3.75 9.18h16.5V7.42L12 3.82l-8.25 3.6v1.76zM7 19.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.72-1.72H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3 3c.07.07.13.15.16.24a.717.717 0 010 .58c-.04.09-.09.17-.16.24l-3 3c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Deposits;
