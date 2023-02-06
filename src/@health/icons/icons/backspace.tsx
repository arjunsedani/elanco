import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Backspace = forwardRef(
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
          d="M15.25 14.75c-.19 0-.38-.07-.53-.22l-4-4c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l4 4c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M11.25 14.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4-4c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M17.54 19.75H9.47c-.61 0-1.22-.13-1.76-.39-.55-.25-1.05-.63-1.44-1.09l-3.02-3.54c-.65-.76-1-1.73-1-2.73s.36-1.97 1-2.73l3.02-3.54c.39-.46.89-.84 1.44-1.09.55-.25 1.16-.39 1.76-.39h8.07c1.12 0 2.18.44 2.97 1.23s1.23 1.85 1.23 2.97v7.09c0 1.12-.44 2.18-1.23 2.97s-1.85 1.23-2.97 1.23zm-8.07-14c-.39 0-.78.09-1.14.25-.35.16-.67.41-.93.7l-3.02 3.54c-.42.49-.65 1.11-.65 1.75s.23 1.27.65 1.75l3.02 3.54c.25.3.57.54.93.7s.75.25 1.14.25h8.07c.72 0 1.4-.28 1.91-.79s.79-1.19.79-1.91V8.44c0-.72-.28-1.4-.79-1.91s-1.19-.79-1.91-.79H9.47z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Backspace;
