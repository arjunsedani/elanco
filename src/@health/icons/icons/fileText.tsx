import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FileText = forwardRef(
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
          d="M17 21.75H7c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h7.17c.73 0 1.42.29 1.94.81l2.83 2.83c.52.52.81 1.21.81 1.94V19c0 1.52-1.23 2.75-2.75 2.75zm-10-18c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.75H15c-.96 0-1.75-.79-1.75-1.75V3.75H7zm7.75.14V7c0 .14.11.25.25.25h3.11c-.06-.11-.13-.22-.22-.31l-2.83-2.83a.973.973 0 00-.31-.22zm-2.42 13.86H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.33c.41 0 .75.34.75.75s-.34.75-.75.75zm1.67-3H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FileText;
