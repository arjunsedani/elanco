import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const UserPlus = forwardRef(
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
          d="M18 20.75c-.41 0-.75-.34-.75-.75v-.75c0-.92-.37-1.82-1.03-2.47s-1.55-1.03-2.47-1.03h-7.5c-.93 0-1.81.36-2.48 1.03-.66.66-1.02 1.54-1.02 2.47V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.75c0-1.34.52-2.59 1.46-3.54.95-.94 2.2-1.46 3.54-1.46h7.5c1.33 0 2.59.52 3.54 1.46s1.46 2.2 1.46 3.54V20c0 .41-.34.75-.75.75zm1-7c-.41 0-.75-.34-.75-.75v-1.25H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V9c0-.41.34-.75.75-.75s.75.34.75.75v1.25H21c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V13c0 .41-.34.75-.75.75zm-9-2c-2.62 0-4.75-2.13-4.75-4.75S7.38 2.25 10 2.25 14.75 4.38 14.75 7s-2.13 4.75-4.75 4.75zm0-8C8.21 3.75 6.75 5.21 6.75 7s1.46 3.25 3.25 3.25S13.25 8.79 13.25 7 11.79 3.75 10 3.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default UserPlus;
