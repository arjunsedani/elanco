import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Frown = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-2.5 0-4.99-.95-6.89-2.85-1.84-1.84-2.86-4.29-2.86-6.89s1.01-5.05 2.86-6.89C6.95 3.28 9.4 2.26 12 2.26s5.05 1.01 6.89 2.86c3.8 3.8 3.8 9.99 0 13.79-1.9 1.9-4.4 2.85-6.89 2.85zm0-18c-2.2 0-4.28.86-5.83 2.42C4.61 7.73 3.75 9.8 3.75 12s.86 4.28 2.42 5.83c3.22 3.22 8.45 3.22 11.67 0s3.22-8.45 0-11.67a8.193 8.193 0 00-5.83-2.42zm3.5 13c-.19 0-.38-.07-.53-.22-.04-.04-1.14-1.09-2.97-1.09s-2.93 1.05-2.97 1.1c-.3.29-.77.28-1.06 0a.754.754 0 010-1.06c.06-.06 1.56-1.53 4.03-1.53s3.97 1.47 4.03 1.53c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zm0-6c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75zm-7 0c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Frown;
