import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CheckCircle = forwardRef(
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
          d="M11.99 21.25a9.23 9.23 0 01-7.67-4.08 9.261 9.261 0 01-1.53-6.09c.22-2.14 1.18-4.16 2.72-5.67s3.56-2.44 5.71-2.62c2.15-.18 4.3.4 6.07 1.63.34.24.42.7.19 1.04-.24.34-.71.42-1.04.19a7.792 7.792 0 00-5.08-1.37c-1.8.15-3.5.93-4.78 2.2a7.808 7.808 0 00-2.28 4.75c-.18 1.8.27 3.61 1.28 5.11s2.52 2.6 4.25 3.11c1.73.51 3.6.39 5.25-.32 1.66-.72 3.02-2 3.83-3.61.82-1.61 1.05-3.47.65-5.23-.09-.4.16-.81.56-.9.4-.09.81.16.9.56a9.3 9.3 0 01-.77 6.24 9.217 9.217 0 01-4.58 4.3c-1.17.5-2.42.76-3.67.76zm0-6.38c-.19 0-.38-.07-.53-.22l-3.04-3.04c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2.51 2.51 6.93-6.91c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.46 7.44c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CheckCircle;
