import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DollarSign = forwardRef(
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
          d="M12 21.75c-2.5 0-4.99-.95-6.89-2.85-1.84-1.84-2.86-4.29-2.86-6.89s1.01-5.05 2.86-6.89C6.95 3.28 9.4 2.26 12 2.26s5.05 1.01 6.89 2.86c3.8 3.8 3.8 9.99 0 13.79-1.9 1.9-4.4 2.85-6.89 2.85zm0-18c-2.2 0-4.28.86-5.83 2.42C4.61 7.73 3.75 9.8 3.75 12s.86 4.28 2.42 5.83c3.22 3.22 8.45 3.22 11.67 0s3.22-8.45 0-11.67a8.193 8.193 0 00-5.83-2.42zm0 15c-.41 0-.75-.34-.75-.75v-.75c-1.65 0-3-1.35-3-3 0-.41.34-.75.75-.75s.75.34.75.75c0 .83.67 1.5 1.5 1.5H12.89c.75 0 1.36-.61 1.36-1.36 0-.62-.42-1.16-1.03-1.32l-2.81-.7a2.86 2.86 0 01.7-5.63h.14v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.75c1.65 0 3 1.35 3 3 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.83-.67-1.5-1.5-1.5h-1.64c-.75 0-1.36.61-1.36 1.36 0 .62.42 1.16 1.03 1.32l2.81.71a2.86 2.86 0 01-.7 5.63h-.14v.75c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default DollarSign;
