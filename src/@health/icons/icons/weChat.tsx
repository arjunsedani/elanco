import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Wechat = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10.52 4C6.45 4 3 6.81 3 10.47c.01 1.26.42 2.48 1.16 3.49l-.29 2.83a.564.564 0 00.79.58l2.51-1.09c.68.29 1.4.48 2.14.58.08.01.16 0 .24-.02.72 2.13 3.01 3.61 5.6 3.61.87 0 1.73-.17 2.53-.5l1.85.8c.19.08.4.06.56-.06.16-.12.25-.32.23-.52l-.21-2.09c.56-.77.86-1.7.88-2.66 0-1.95-1.22-3.57-2.99-4.42.02-.17.03-.35.04-.52v-.02c0-3.64-3.46-6.44-7.52-6.44zm6.6 7.84s.07.03.1.04c1.59.65 2.62 2.01 2.63 3.51a3.51 3.51 0 01-.77 2.15c-.09.12-.14.27-.12.41l.14 1.35-1.19-.51a.61.61 0 00-.46 0c-.72.33-1.5.5-2.29.5-2.7 0-4.7-1.83-4.7-3.91s2.02-3.91 4.7-3.91c.71 0 1.38.13 1.97.35zm-.23-1.27v-.14c0-2.83-2.76-5.29-6.38-5.29S4.13 7.6 4.13 10.47c.01 1.08.38 2.12 1.06 2.96.09.12.14.27.12.42l-.22 2.09 1.84-.8a.61.61 0 01.46 0c.61.28 1.25.47 1.92.57 0-.1-.01-.21-.01-.31 0-2.88 2.72-5.05 5.84-5.05.6 0 1.19.08 1.74.23z"
        fill="#9ba4ab"
        fillRule="evenodd"
      />
      <path
        d="M8.14 9.21a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1zM12.91 9.21a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1zM17.62 13.84c0 .39-.31.7-.7.7s-.7-.31-.7-.7.31-.7.7-.7.7.31.7.7z"
        fill="#9ba4ab"
      />
      <path
        d="M16.92 13.21c-.35 0-.63.28-.63.63s.28.63.63.63.63-.28.63-.63-.28-.63-.63-.63zm-.77.63c0-.43.35-.77.77-.77s.77.35.77.77-.35.77-.77.77-.77-.35-.77-.77z"
        fill="#9ba4ab"
        fillRule="evenodd"
      />
      <path
        d="M14.18 13.84c0 .39-.31.7-.7.7s-.7-.31-.7-.7.31-.7.7-.7.7.31.7.7z"
        fill="#9ba4ab"
      />
      <path
        d="M13.47 13.21c-.35 0-.63.28-.63.63s.28.63.63.63.63-.28.63-.63-.28-.63-.63-.63zm-.77.63c0-.43.35-.77.77-.77s.77.35.77.77-.35.77-.77.77-.77-.35-.77-.77z"
        fill="#9ba4ab"
        fillRule="evenodd"
      />
    </StyledSVG>
  );
});

export default Wechat;
