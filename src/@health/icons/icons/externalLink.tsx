import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ExternalLink = forwardRef(
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
          d="M15 20.75H9c-1.54 0-2.98-.6-4.07-1.68A5.701 5.701 0 013.25 15V9c0-1.54.6-2.98 1.68-4.07A5.701 5.701 0 019 3.25h2c.41 0 .75.34.75.75s-.34.75-.75.75H9c-1.13 0-2.2.44-3.01 1.24-.8.8-1.24 1.87-1.24 3.01v6c0 1.13.44 2.2 1.24 3S7.86 19.25 9 19.25h6c1.14 0 2.2-.44 3-1.25s1.25-1.87 1.25-3v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 1.54-.6 2.98-1.68 4.07A5.684 5.684 0 0115 20.75zm-2-9c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4.72-4.72H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4a.776.776 0 01.53.22c.07.07.13.15.16.24.04.09.06.19.06.29v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.81l-4.72 4.72c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ExternalLink;
