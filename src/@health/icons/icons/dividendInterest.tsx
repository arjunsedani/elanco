import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DividendInterest = forwardRef(
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
          d="M9.75 22.5h-4C3.68 22.5 2 20.82 2 18.75v-4C2 12.68 3.68 11 5.75 11h4c2.07 0 3.75 1.68 3.75 3.75v4c0 2.07-1.68 3.75-3.75 3.75zm-4-10c-1.24 0-2.25 1.01-2.25 2.25v4C3.5 19.99 4.51 21 5.75 21h4c1.24 0 2.25-1.01 2.25-2.25v-4c0-1.24-1.01-2.25-2.25-2.25h-4zm14 8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.33 0 .65-.13.88-.37.23-.23.37-.55.37-.88v-13c0-.33-.13-.65-.37-.88-.23-.23-.55-.37-.88-.37h-12c-.33 0-.65.13-.88.37-.23.23-.37.56-.37.88v4c0 .41-.34.75-.75.75S5 9.16 5 8.75v-4c0-.73.29-1.42.81-1.94S7.02 2 7.75 2h12c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v13c0 .73-.29 1.42-.81 1.94s-1.21.81-1.94.81zM9.4 19.25c-.2 0-.45-.11-.59-.24-.15-.14-.26-.41-.26-.61s.11-.46.25-.6c.28-.28.93-.28 1.21 0 .14.14.24.4.24.59s-.11.46-.25.6c-.14.14-.4.25-.6.25zM6.25 19c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22zm11.5-2.5h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM6.1 15.95c-.2 0-.45-.1-.59-.24-.14-.14-.26-.41-.26-.61s.1-.45.24-.59c.28-.3.94-.3 1.22 0 .14.14.24.4.24.59s-.11.46-.25.6c-.14.14-.4.25-.6.25zm11.65-2.45h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm-3-3a.76.76 0 01-.45-.15l-2.19-1.62-.83.83c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l1.29-1.29c.26-.26.68-.29.98-.07l2.19 1.62 1.26-1.26h-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.776.776 0 01.53.22c.07.07.13.15.16.24.04.09.06.19.06.29v2c0 .41-.34.75-.75.75S17 9.16 17 8.75v-.19l-1.72 1.72c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default DividendInterest;
