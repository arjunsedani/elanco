import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Stocks = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M4.47 15.36c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l-1.06-1.06zm5.6-4.54l-.53-.53.53.53zm1.41 0l-.53.53.53-.53zm2.14 2.14l.53-.53-.53.53zm1.41 0l-.53-.53.53.53zM20.99 7h.75c0-.41-.34-.75-.75-.75V7zm-2.67-.75c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm1.92 3.42c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm.75 12.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-19.07-.75h-.75c0 .41.34.75.75.75v-.75zm.75-17.71c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm2.86 13.2l5.07-5.07-1.06-1.06-5.07 5.07 1.06 1.06zm5.07-5.07c.1-.1.26-.1.35 0l1.06-1.06c-.68-.69-1.79-.68-2.48 0l1.06 1.06zm.35 0l2.14 2.14 1.06-1.06-2.14-2.14-1.06 1.06zm2.14 2.14c.68.68 1.79.68 2.48 0l-1.06-1.06c-.1.1-.25.1-.35 0l-1.06 1.06zm2.47 0l5.96-5.96-1.06-1.06-5.96 5.96 1.06 1.06zm2.76-5.74h2.67v-1.5h-2.67v1.5zM20.24 7v2.67h1.5V7h-1.5zm.75 13.18H1.92v1.5H21v-1.5zm-18.32.75V3.22h-1.5v17.71h1.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Stocks;
