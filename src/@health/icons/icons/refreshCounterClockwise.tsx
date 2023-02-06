import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RefreshCounterClockwise = forwardRef(
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
        <path
          d="M3.15 14.33c-.36 0-.67-.26-.74-.62A9.39 9.39 0 012.25 12c0-5.38 4.37-9.75 9.75-9.75 3.14 0 6.11 1.54 7.94 4.11a.753.753 0 11-1.23.87 8.262 8.262 0 00-6.72-3.48c-4.54 0-8.24 3.7-8.24 8.25 0 .46.04.93.14 1.45.07.41-.2.8-.61.87-.04 0-.09.01-.13.01zM4.42 20.34c-.41 0-.75-.34-.75-.75V17.2c0-.41.34-.75.75-.75h2.39c.41 0 .75.34.75.75s-.34.75-.75.75H5.17v1.64c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
        <path
          d="M12 21.75c-3.14 0-6.11-1.54-7.94-4.11a.753.753 0 111.23-.87 8.262 8.262 0 006.72 3.48c4.55 0 8.25-3.7 8.25-8.25 0-.46-.04-.93-.14-1.44-.07-.41.2-.8.61-.87.41-.07.8.2.87.61.11.6.16 1.16.16 1.71 0 5.38-4.37 9.75-9.75 9.75zM19.58 7.54h-2.39c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.64V4.4c0-.41.34-.75.75-.75s.75.34.75.75v2.39c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default RefreshCounterClockwise;
