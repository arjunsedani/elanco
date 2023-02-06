import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MapPinFilled = forwardRef(
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
          d="M18.02 4.75c-1.6-1.6-3.76-2.5-6.02-2.5s-4.43.9-6.02 2.5c-1.6 1.6-2.5 3.76-2.5 6.02s.9 4.43 2.5 6.02l4.2 4.2c.48.48 1.14.76 1.83.76s1.34-.27 1.82-.76l4.2-4.2c1.6-1.6 2.5-3.76 2.5-6.02s-.9-4.43-2.5-6.02zM12 7.36c-1.89 0-3.42 1.53-3.42 3.42S10.11 14.2 12 14.2s3.42-1.53 3.42-3.42S13.89 7.36 12 7.36z"
          fill="#9ba4ab"
          fillRule="evenodd"
        />
      </StyledSVG>
    );
  },
);

export default MapPinFilled;
