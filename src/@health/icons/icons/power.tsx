import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Power = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <clipPath id="prefix__b">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <g fill="#9ba4ab" clipPath="url(#prefix__b)">
          <path d="M12 20.75c-2.24 0-4.48-.85-6.19-2.56-3.41-3.41-3.41-8.96 0-12.38.29-.29.77-.29 1.06 0s.29.77 0 1.06c-2.83 2.83-2.83 7.43 0 10.25 2.83 2.83 7.43 2.83 10.25 0s2.83-7.43 0-10.25c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0c3.41 3.41 3.41 8.96 0 12.38a8.721 8.721 0 01-6.19 2.56z" />
          <path d="M12 12.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75z" />
        </g>
      </g>
    </StyledSVG>
  );
});

export default Power;
