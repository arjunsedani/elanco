import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const EditLine = forwardRef(
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
          d="M21 21.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zm-14.18-4H4c-.41 0-.75-.34-.75-.75v-2.82c0-.2.08-.39.22-.53l9.01-9.01.04-.04.04-.04 1.74-1.74c.33-.33.77-.51 1.24-.51s.91.18 1.24.51l1.4 1.4c.68.68.68 1.79 0 2.48l-1.75 1.75-.03.03-.03.03-9.02 9.02a.75.75 0 01-.53.22zm-2.07-1.5h1.76l8.3-8.3-1.76-1.76-8.3 8.3v1.76zm9.36-11.12l1.76 1.76 1.25-1.25c.1-.1.1-.26 0-.35l-1.4-1.4c-.13-.13-.22-.13-.35 0l-1.25 1.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default EditLine;
