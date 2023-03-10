import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Sunny = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.25 4c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5 20c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm5.08-14.89c-.29.29-.29.77 0 1.06s.77.29 1.06 0l-1.06-1.06zm1.77.35c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l1.06 1.06zM4.4 18.54c-.29.29-.29.77 0 1.06s.77.29 1.06 0L4.4 18.54zm1.77.35c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l1.06 1.06zM20 11.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm2 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-20-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm2 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm14.89 5.08c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06-1.06zm-.35 1.77c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.06 1.06zM5.46 4.4c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06L5.46 4.4zm-.35 1.77c.29.29.77.29 1.06 0s.29-.77 0-1.06L5.11 6.17zm9.9 2.82a4.249 4.249 0 010 6.01l1.06 1.06a5.74 5.74 0 000-8.13l-1.06 1.06zm0 6.01A4.249 4.249 0 019 15l-1.06 1.06a5.74 5.74 0 008.13 0L15.01 15zM9 15a4.249 4.249 0 010-6.01L7.94 7.93a5.74 5.74 0 000 8.13L9 15zm0-6.01a4.249 4.249 0 016.01 0l1.06-1.06a5.74 5.74 0 00-8.13 0L9 8.99zM12.76 4V2h-1.5v2h1.5zm0 18v-2h-1.5v2h1.5zM18.9 6.17l.71-.71-1.06-1.06-.71.71 1.06 1.06zM5.46 19.6l.71-.71-1.06-1.06-.71.71 1.06 1.06zM20 12.75h2v-1.5h-2v1.5zm-18 0h2v-1.5H2v1.5zm15.83 6.14l.71.71 1.06-1.06-.71-.71-1.06 1.06zM4.4 5.46l.71.71 1.06-1.06-.71-.71L4.4 5.46z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Sunny;
