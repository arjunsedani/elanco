import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TopUp = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M17 20.75c-.41 0-.75-.34-.75-.75v-1.25H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V16c0-.41.34-.75.75-.75s.75.34.75.75v1.25H19c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V20c0 .41-.34.75-.75.75zm-5 0H7c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V5.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V13c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75H5.75V18c0 .33.13.65.37.88s.55.37.88.37h5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-5c-2.07 0-3.75-1.68-3.75-3.75S9.93 8.25 12 8.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default TopUp;
