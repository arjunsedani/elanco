import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Eye = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <path d="M12 15.75c-.96 0-1.92-.37-2.65-1.09a3.766 3.766 0 010-5.31c1.42-1.42 3.89-1.42 5.31 0a3.766 3.766 0 010 5.31c-.73.73-1.69 1.1-2.65 1.1zm0-6c-.6 0-1.17.23-1.59.66-.88.88-.88 2.31 0 3.18.88.88 2.31.88 3.18 0 .88-.88.88-2.31 0-3.18-.43-.43-.99-.66-1.59-.66z" />
        <path d="M12 19.75c-3.97 0-7.59-2.16-9.23-5.51-.35-.71-.52-1.46-.52-2.24s.18-1.53.52-2.24C4.41 6.41 8.03 4.25 12 4.25s7.59 2.16 9.23 5.51c.35.71.52 1.46.52 2.24s-.18 1.53-.52 2.24c-1.64 3.35-5.26 5.51-9.23 5.51zm0-14c-3.4 0-6.49 1.83-7.88 4.67-.25.5-.37 1.03-.37 1.58s.12 1.08.37 1.58c1.39 2.83 4.48 4.67 7.88 4.67s6.49-1.83 7.88-4.67c.25-.5.37-1.04.37-1.58s-.12-1.08-.37-1.58C18.49 7.58 15.4 5.75 12 5.75z" />
      </g>
    </StyledSVG>
  );
});

export default Eye;
