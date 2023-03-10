import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const LimitTransfer = forwardRef(
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
          d="M15.05 21.25H9.01c-.95 0-1.9-.28-2.71-.84a9.735 9.735 0 01-2.99-3.48 9.702 9.702 0 01-1.06-4.46 9.831 9.831 0 012.78-6.75 9.814 9.814 0 016.66-2.98 9.84 9.84 0 015.87 1.73 9.847 9.847 0 013.68 4.89c.66 1.97.68 4.14.03 6.12a9.779 9.779 0 01-3.62 4.93c-.77.54-1.67.82-2.6.82zm-3.3-17c-2.14.09-4.15.99-5.64 2.53a8.357 8.357 0 00-2.36 5.71c0 1.3.31 2.6.9 3.76a8.241 8.241 0 002.53 2.94c.53.37 1.17.56 1.83.56H15c.61 0 1.27-.18 1.8-.54a8.256 8.256 0 003.06-4.17c.54-1.67.53-3.51-.03-5.18a8.288 8.288 0 00-3.11-4.14c-1.44-1-3.21-1.53-4.96-1.47zm3.75 13.5h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75zM12 15a2.5 2.5 0 010-5c.42 0 .81.1 1.16.28l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.56 2.56A2.5 2.5 0 0112 14.99zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 1.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75zm-11 0H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75zm1.46-3.54c-.19 0-.38-.07-.53-.22l-.71-.71c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.71.71c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM12 8.25c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default LimitTransfer;
