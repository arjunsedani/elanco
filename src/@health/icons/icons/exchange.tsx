import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Exchange = forwardRef(
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
          d="M9.22 20.25c-.2 0-.4-.08-.55-.24l-4.72-4.99a.738.738 0 01-.14-.81c.12-.28.39-.45.69-.45h15.74c.41 0 .75.34.75.75s-.34.75-.75.75h-14l3.53 3.73a.755.755 0 01-.55 1.27zm11.02-10H4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14l-3.53-3.73c-.29-.3-.27-.78.03-1.06.3-.28.78-.27 1.06.03l4.72 5c.21.22.26.54.14.81s-.39.45-.69.45z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Exchange;
