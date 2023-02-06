import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Moon = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12.3 20.75c-4.82 0-8.75-3.92-8.75-8.75 0-4.54 3.43-8.3 7.98-8.75.29-.03.58.12.72.37s.13.57-.04.81c-1.83 2.56-1.57 6.15.62 8.33 1.7 1.7 4.25 2.28 6.64 1.52.28-.09.58 0 .78.21.2.21.25.52.14.79-1.35 3.27-4.61 5.46-8.09 5.46zM10.15 5.06C7.16 6 5.05 8.76 5.05 12c0 4 3.25 7.25 7.25 7.25 2.38 0 4.62-1.23 5.97-3.18-2.41.27-4.79-.53-6.5-2.24C9.48 11.54 8.89 8 10.15 5.06z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Moon;
