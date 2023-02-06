import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const BillPayment = forwardRef(
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
          d="M19 20.75H7.5c-.6 0-1.17-.23-1.59-.66s-.66-1-.66-1.59V9.75H4A1.739 1.739 0 012.25 8V5.5c0-.6.23-1.17.66-1.59.42-.43.99-.66 1.59-.66H16c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v9.25H20A1.739 1.739 0 0121.75 17v1c0 .73-.29 1.42-.81 1.94s-1.21.81-1.94.81zm-9.38-1.5H19c.33 0 .65-.13.88-.37s.37-.55.37-.88v-1c0-.07-.03-.13-.07-.18s-.11-.07-.18-.07H10c-.07 0-.13.03-.18.07-.05.05-.07.11-.07.18v1.5c0 .26-.04.51-.13.75zm-3-14.5c.08.24.13.49.13.75v13c0 .2.08.39.22.53.28.28.78.28 1.06 0a.75.75 0 00.22-.53V17A1.739 1.739 0 0110 15.25h7.25V6c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37H6.62zm-2.12 0a.75.75 0 00-.75.75V8c0 .07.03.13.07.18.05.05.11.07.18.07h1.25V5.5a.75.75 0 00-.75-.75zm7.5 8H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zm3-3.98H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default BillPayment;
