import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Linkedin = forwardRef(
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
        <defs>
          <clipPath id="prefix__a">
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            d="M16.5 21.75h-9c-2.89 0-5.25-2.35-5.25-5.25v-9c0-2.9 2.35-5.25 5.25-5.25h9c2.89 0 5.25 2.35 5.25 5.25v9.01c0 2.89-2.35 5.25-5.25 5.25zm-9-18c-2.07 0-3.75 1.68-3.75 3.75v9c0 2.07 1.68 3.75 3.75 3.75h9.01c2.07 0 3.75-1.68 3.75-3.75v-9c0-2.07-1.68-3.75-3.75-3.75H7.5zm8.72 13.5c-.41 0-.75-.34-.75-.75v-3.15c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.15c0-1.65 1.35-3 3-3s3 1.35 3 3v3.15c0 .41-.34.75-.75.75zm-8.1 0c-.41 0-.75-.34-.75-.75v-5.4c0-.41.34-.75.75-.75s.75.34.75.75v5.4c0 .41-.34.75-.75.75zm0-8.21a.982.982 0 01-.7-1.67c.18-.19.43-.29.69-.29.54 0 .98.44.98.98s-.44.98-.98.98zm0-1.5c-.29 0-.52.24-.52.52 0 .43.59.67.9.37a.53.53 0 00-.37-.9z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default Linkedin;
