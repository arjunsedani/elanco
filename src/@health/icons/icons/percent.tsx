import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Percent = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16.12 18.75c-1.45 0-2.62-1.18-2.62-2.62s1.18-2.62 2.62-2.62 2.62 1.18 2.62 2.62-1.18 2.62-2.62 2.62zm0-3.75c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12zm-9.38 3c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l10.51-10.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-10.5 10.5c-.15.15-.34.22-.53.22zm1.12-7.5c-1.45 0-2.62-1.18-2.62-2.62s1.18-2.62 2.62-2.62 2.62 1.18 2.62 2.62S9.3 10.5 7.86 10.5zm0-3.75c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Percent;
