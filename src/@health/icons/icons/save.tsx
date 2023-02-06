import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Save = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18.99 21.75H5.11a2.75 2.75 0 01-2.75-2.73l-.1-14c0-.74.28-1.43.8-1.96.52-.52 1.21-.81 1.95-.81h11.16c.73 0 1.42.29 1.94.81l2.83 2.83c.52.52.81 1.21.81 1.94V19c0 1.52-1.23 2.75-2.75 2.75zm-13.98-18c-.34 0-.65.13-.89.37s-.37.55-.36.89l.1 14c0 .68.57 1.24 1.25 1.24h13.88c.69 0 1.25-.56 1.25-1.25V7.83c0-.33-.13-.65-.37-.88l-2.83-2.83c-.24-.24-.55-.37-.88-.37H5.01z"
        fill="#9ba4ab"
      />
      <path
        d="M14.99 8.66h-6c-.96 0-1.75-.79-1.75-1.75V3c0-.41.34-.75.75-.75s.75.34.75.75v3.91c0 .14.11.25.25.25h6c.14 0 .25-.11.25-.25V3c0-.41.34-.75.75-.75s.75.34.75.75v3.91c0 .96-.79 1.75-1.75 1.75zM17 21.75c-.41 0-.75-.34-.75-.75v-7.71c0-.3-.24-.54-.54-.54H8.28c-.3 0-.54.24-.54.54V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.71c0-1.12.91-2.04 2.04-2.04h7.43c1.12 0 2.04.91 2.04 2.04V21c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Save;
