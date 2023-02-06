import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FixedIncome = forwardRef(
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
          d="M3.56 13.12c.31 0 .56.25.56.56v.56h4.5c1.36 0 2.5.97 2.76 2.25h2.31c1.55 0 2.81 1.26 2.81 2.81 0 .31-.25.56-.56.56H4.12v.56a.56.56 0 11-1.12 0v-6.75c0-.31.25-.56.56-.56zm4.5 4.5a.56.56 0 110-1.12h2.15c-.23-.66-.86-1.12-1.59-1.12h-4.5v3.38h11.16c-.23-.66-.86-1.12-1.59-1.12H8.07zm7.88-9c-2.76 0-5.06-1.15-5.06-2.81S13.19 3 15.94 3 21 4.15 21 5.81s-2.31 2.81-5.06 2.81zm0-1.12c2.21 0 3.94-.86 3.94-1.69s-1.72-1.69-3.94-1.69S12 4.98 12 5.81s1.72 1.69 3.94 1.69zm-5.06-1.69a.56.56 0 111.12 0v5.62c0 .83 1.72 1.69 3.94 1.69s3.94-.86 3.94-1.69V5.81a.56.56 0 111.12 0v5.62c0 1.66-2.31 2.81-5.06 2.81s-5.06-1.15-5.06-2.81V5.81zm9 2.81a.56.56 0 111.12 0c0 1.66-2.31 2.81-5.06 2.81s-5.06-1.15-5.06-2.81a.56.56 0 111.12 0c0 .83 1.72 1.69 3.94 1.69s3.94-.86 3.94-1.69z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FixedIncome;
