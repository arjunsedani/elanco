import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Lock = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17 21.75H7c-1.52 0-2.75-1.23-2.75-2.75v-7c0-1.52 1.23-2.75 2.75-2.75h.25V7c0-2.62 2.13-4.75 4.75-4.75S16.75 4.38 16.75 7v2.25H17c1.52 0 2.75 1.23 2.75 2.75v7c0 1.52-1.23 2.75-2.75 2.75zm-10-11c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25H7zm1.75-1.5h6.5V7c0-1.79-1.46-3.25-3.25-3.25S8.75 5.21 8.75 7v2.25zm3.25 8.5c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Lock;
