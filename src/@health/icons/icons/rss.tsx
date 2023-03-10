import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Rss = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.09 20.75h-.11a.747.747 0 01-.63-.85c.3-1.99-.18-3.73-1.35-4.89-1.17-1.17-2.91-1.64-4.89-1.35a.747.747 0 01-.85-.63c-.06-.41.22-.79.63-.85 2.47-.37 4.66.26 6.17 1.77 1.51 1.51 2.14 3.71 1.77 6.18a.76.76 0 01-.74.64zm4.43 0h-.07a.75.75 0 01-.67-.82c.31-3.19-.62-6.05-2.64-8.06-2.01-2.01-4.88-2.95-8.06-2.64-.42.04-.78-.26-.82-.67s.26-.78.67-.82c3.64-.35 6.93.73 9.27 3.07s3.43 5.63 3.07 9.27a.75.75 0 01-.75.68zm4.43 0h-.06a.749.749 0 01-.69-.8c.32-4.38-1.08-8.36-3.94-11.22C12.4 5.87 8.42 4.47 4.04 4.79a.749.749 0 01-.8-.69c-.03-.41.28-.77.69-.8 4.82-.35 9.22 1.2 12.39 4.37s4.72 7.57 4.37 12.39a.76.76 0 01-.75.7zm-14.18 0c-1.39 0-2.52-1.13-2.52-2.52s1.13-2.52 2.52-2.52 2.52 1.13 2.52 2.52-1.13 2.52-2.52 2.52zm0-3.55c-.56 0-1.02.46-1.02 1.02s.46 1.02 1.02 1.02 1.02-.46 1.02-1.02-.46-1.02-1.02-1.02z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Rss;
