import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const HeartFilled = forwardRef(
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
          d="M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20S3 15.39 3 9.76C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71.69-.8 1.88-1.71 3.7-1.71z"
          fill="#9ba4ab"
        />
        <path
          d="M12 20.5c-.4 0-9.5-4.71-9.5-10.74 0-3.02 2.33-6.26 5.8-6.26 1.72 0 2.92.74 3.7 1.48a5.2 5.2 0 013.7-1.48c3.47 0 5.8 3.24 5.8 6.26 0 6.04-9.1 10.74-9.5 10.74zm-3.7-16c-2.87 0-4.8 2.72-4.8 5.26 0 4.76 7.11 9.03 8.5 9.7 1.39-.67 8.5-4.93 8.5-9.7 0-2.54-1.93-5.26-4.8-5.26-1.65 0-2.72.84-3.32 1.54a.52.52 0 01-.76 0c-.6-.7-1.67-1.54-3.32-1.54z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default HeartFilled;
