import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ReceiptBill = forwardRef(
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
          d="M16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75zM16.13 11.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.13c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M9.33 20.69c-.19 0-.38-.04-.56-.13l-2.11-1.05-1.61.8c-.39.2-.85.17-1.22-.06s-.59-.63-.59-1.06V4c0-.96.79-1.75 1.75-1.75h14c.96 0 1.75.79 1.75 1.75v15.19c0 .44-.22.83-.59 1.06-.37.23-.83.25-1.22.05l-1.61-.8-2.11 1.05c-.35.17-.77.17-1.12 0l-2.11-1.05-2.11 1.05c-.18.09-.37.13-.56.13zm-2.67-2.77c.11 0 .23.03.34.08l2.33 1.17L11.66 18c.21-.11.46-.11.67 0l2.33 1.17L16.99 18c.21-.11.46-.11.67 0l1.58.79V4c0-.14-.11-.25-.25-.25H5c-.14 0-.25.11-.25.25v14.79L6.33 18c.11-.05.22-.08.34-.08z"
          fill="#9ba4ab"
        />
        <path
          d="M13 15.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ReceiptBill;
