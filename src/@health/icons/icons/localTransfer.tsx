import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LocalTransfer = forwardRef(
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
          d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.38 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25zm1.99 13H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99c.69 0 1.25-.56 1.25-1.25v-2.19l-.22.22c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l1.5-1.5c.07-.07.15-.12.23-.15.18-.07.4-.07.58 0 .09.04.17.09.24.16l1.5 1.5c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.22-.22v2.19c0 1.52-1.23 2.75-2.75 2.75zm-5.99-2a.776.776 0 01-.53-.22l-1.5-1.5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.22.22V10c0-1.52 1.23-2.75 2.75-2.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.69 0-1.25.56-1.25 1.25v2.19l.22-.22c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.5 1.5c-.07.07-.15.13-.24.16-.09.04-.19.06-.29.06z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default LocalTransfer;
