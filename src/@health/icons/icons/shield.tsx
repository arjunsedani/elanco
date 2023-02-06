import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Shield = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-.06 0-.11 0-.16-.02-4.89-1.1-8.59-5.64-8.59-10.55V7.24c0-1.12.67-2.12 1.71-2.55l5-2.05a5.34 5.34 0 014.08 0l5 2.05c1.04.43 1.71 1.43 1.71 2.55v3.94c0 4.91-3.69 9.45-8.58 10.55-.05.01-.11.02-.16.02zm0-18c-.5 0-1 .1-1.47.29l-5 2.05c-.47.19-.78.65-.78 1.16v3.94c0 4.18 3.1 8.03 7.25 9.05 4.14-1.01 7.25-4.87 7.25-9.05V7.25c0-.51-.31-.96-.78-1.16l-5-2.05c-.47-.2-.97-.29-1.47-.29z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Shield;
