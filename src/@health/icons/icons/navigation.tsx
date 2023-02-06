import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Navigation = forwardRef(
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
          d="M13 20.75h-.08a.766.766 0 01-.66-.6l-1.43-7-6.99-1.42a.755.755 0 01-.16-1.43L19.7 3.31a.755.755 0 01.99.99l-7 16c-.12.27-.39.45-.69.45zM6.47 10.74l5.15 1.05c.29.06.53.29.59.58l1.05 5.16 5.28-12.08-12.07 5.29z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Navigation;
