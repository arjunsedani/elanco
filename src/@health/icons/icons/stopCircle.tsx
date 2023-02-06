import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StopCircle = forwardRef(
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
        <g fill="#9ba4ab" clipPath="url(#prefix__a)">
          <path d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z" />
          <path d="M15 15.75H9c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75zm-5.25-1.5h4.5v-4.5h-4.5v4.5z" />
        </g>
      </StyledSVG>
    );
  },
);

export default StopCircle;
