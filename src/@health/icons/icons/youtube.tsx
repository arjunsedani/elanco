import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Youtube = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g fill="#9ba4ab" clipPath="url(#prefix__a)">
        <path d="M12 20.93c-.65 0-6.41-.01-8.04-.52-1.12-.35-1.99-1.36-2.28-2.62-.43-1.88-.44-5.64-.44-5.79s0-3.91.44-5.79c.29-1.27 1.16-2.27 2.28-2.62 1.62-.51 7.37-.52 8.03-.52.67 0 6.42.02 8.03.52 1.12.35 1.99 1.35 2.28 2.62.43 1.88.44 5.64.44 5.79s0 3.91-.44 5.79c-.29 1.27-1.16 2.27-2.28 2.62-1.62.51-7.39.52-8.04.52zm0-16.36c-1.71 0-6.4.08-7.59.45-.61.19-1.09.77-1.26 1.52-.39 1.72-.4 5.42-.4 5.46s0 3.74.4 5.46c.17.75.65 1.33 1.26 1.52 1.19.37 5.88.45 7.59.45s6.4-.08 7.59-.45c.61-.19 1.09-.77 1.26-1.52.39-1.72.4-5.42.4-5.46s0-3.74-.4-5.46c-.17-.75-.65-1.33-1.26-1.52-1.19-.37-5.88-.45-7.59-.45z" />
        <path d="M10 15.75a.752.752 0 01-.76-.75V9c0-.27.14-.52.38-.65a.77.77 0 01.75 0l5.2 3c.23.13.38.38.38.65s-.14.52-.38.65l-5.2 3c-.12.07-.25.1-.38.1zm.75-5.45v3.4L13.7 12l-2.95-1.7z" />
      </g>
    </StyledSVG>
  );
});

export default Youtube;
