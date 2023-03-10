import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Loader = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M21 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-3-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm-15 0c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm3 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM12.75 3c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5 3c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm0 15c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-3c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm5.08.89c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.06 1.06zm-1.06-3.18c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06-1.06zM6.17 5.11c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06-1.06zm1.06 3.18c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06L7.23 8.29zm8.49-1.06c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l-1.06-1.06zm3.18-1.06c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l1.06 1.06zM8.29 16.78c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l1.06 1.06zm-3.18 1.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l-1.06-1.06zM21 11.26h-3v1.5h3v-1.5zM3 12.75h3v-1.5H3v1.5zM11.25 3v3h1.5V3h-1.5zm1.5 18v-3h-1.5v3h1.5zm6.14-3.17l-2.12-2.12-1.06 1.06 2.12 2.12 1.06-1.06zM5.11 6.17l2.12 2.12 1.06-1.06-2.12-2.12-1.06 1.06zm11.67 2.12l2.12-2.12-1.06-1.06-2.12 2.12 1.06 1.06zm-9.55 7.42l-2.12 2.12 1.06 1.06 2.12-2.12-1.06-1.06z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Loader;
