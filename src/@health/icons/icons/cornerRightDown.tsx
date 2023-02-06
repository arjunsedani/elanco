import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CornerRightDown = forwardRef(
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
          d="M15 20.75c-.19 0-.38-.07-.53-.22l-5-5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L15 18.94l4.47-4.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
        <path
          d="M15 20.75c-.41 0-.75-.34-.75-.75V8c0-.87-.34-1.68-.95-2.3s-1.43-.95-2.3-.95H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c1.27 0 2.46.49 3.36 1.39.9.9 1.39 2.09 1.39 3.36v12c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CornerRightDown;
