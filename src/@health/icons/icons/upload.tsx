import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Upload = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 20.75c-.41 0-.75-.34-.75-.75v-7.19l-1.72 1.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l3-3c.07-.07.15-.13.24-.16.18-.07.4-.07.58 0 .09.04.17.09.24.16l3 3c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.72-1.72V20c0 .41-.34.75-.75.75zm6.36-1.64c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06 8.234 8.234 0 001.79-8.99 8.266 8.266 0 00-3.04-3.7c-2.72-1.82-6.44-1.82-9.17 0-1.36.91-2.41 2.19-3.04 3.7S3.58 12 3.9 13.61c.32 1.61 1.1 3.07 2.26 4.22.29.29.29.77 0 1.06s-.77.29-1.06 0a9.718 9.718 0 01-2.67-4.99c-.38-1.9-.19-3.85.56-5.63a9.73 9.73 0 013.59-4.38c3.22-2.15 7.62-2.15 10.83 0A9.73 9.73 0 0121 8.27c.74 1.79.93 3.73.55 5.63s-1.3 3.62-2.67 4.99c-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Upload;
