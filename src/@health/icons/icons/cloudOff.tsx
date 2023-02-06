import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CloudOff = forwardRef(
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
          d="M13.25 22c-.19 0-.38-.07-.53-.22l-.72-.72-.72.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.72-.72-.72-.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.72.72.72-.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.72.72.72.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM20 20.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zm-12 0H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zm4-3.48c-.41 0-.75-.34-.75-.75v-.77H7.7c-1.26 0-2.46-.49-3.38-1.35a4.954 4.954 0 01-1.56-3.34c-.08-1.28.33-2.52 1.15-3.5.72-.86 1.69-1.44 2.77-1.68a5.671 5.671 0 012.26-2.74 5.683 5.683 0 013.92-.83c1.36.2 2.61.89 3.51 1.93.75.87 1.21 1.94 1.35 3.07.86.15 1.67.56 2.29 1.18.8.8 1.25 1.87 1.25 3s-.44 2.2-1.25 3-1.89 1.25-3 1.25h-4.25v.77c0 .41-.34.75-.75.75zm-4.25-3.02H17c.72 0 1.43-.29 1.94-.81s.81-1.21.81-1.94-.29-1.42-.81-1.94c-.51-.51-1.22-.81-1.94-.81a.75.75 0 01-.75-.75 4.232 4.232 0 00-3.61-4.2 4.25 4.25 0 00-2.89.61c-.86.55-1.49 1.38-1.79 2.36-.09.29-.33.49-.63.53a3.502 3.502 0 00-3.08 3.68c.05.89.44 1.72 1.09 2.33.65.61 1.49.94 2.38.95h.02z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CloudOff;
