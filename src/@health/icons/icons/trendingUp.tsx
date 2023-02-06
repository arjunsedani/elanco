import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TrendingUp = forwardRef(
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
          d="M3 17.43a.616.616 0 01-.43-1.05l6.14-6.14c.24-.24.63-.24.87 0l3.66 3.66 6.29-6.29H16.1c-.34 0-.61-.27-.61-.61s.27-.61.61-.61h4.93c.08 0 .15.02.21.04.07.03.14.08.2.14.06.06.1.12.13.2.03.07.05.15.05.24v4.91c0 .34-.27.61-.61.61s-.61-.27-.61-.61V8.49l-6.73 6.72c-.24.24-.63.24-.87 0l-3.66-3.66-5.7 5.7c-.12.12-.28.18-.43.18z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TrendingUp;
