import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CloseOctagon = forwardRef(
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
          d="M14.3 21.85H9.7c-1.41-.12-2.55-.63-3.43-1.52l-2.7-2.7c-.85-.85-1.32-2.03-1.32-3.33V9.7c0-1.35.52-2.54 1.46-3.36l2.66-2.67c.79-.9 1.98-1.42 3.33-1.42h4.7c1.35 0 2.54.52 3.36 1.46l2.67 2.66c.85.85 1.32 2.03 1.32 3.33v4.7c0 1.35-.52 2.54-1.46 3.36l-2.66 2.67c-.92.92-2.1 1.42-3.33 1.42zm-6.97-2.58c.63.63 1.45.99 2.44 1.08h4.53c.83 0 1.64-.35 2.27-.98l2.7-2.7c.65-.58.98-1.35.98-2.27V9.7c0-.9-.31-1.7-.88-2.27l-2.7-2.7c-.57-.65-1.35-.98-2.27-.98H9.7c-.92 0-1.7.33-2.24.94L4.73 7.43c-.65.57-.98 1.35-.98 2.27v4.6c0 .9.31 1.7.88 2.27l2.7 2.7zM15 15.75c-.19 0-.38-.07-.53-.22L12 13.06l-2.47 2.47c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06L10.94 12 8.47 9.53c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 10.94l2.47-2.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.06 12l2.47 2.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CloseOctagon;
