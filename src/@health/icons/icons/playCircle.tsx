import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PlayCircle = forwardRef(
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
        <defs>
          <clipPath id="prefix__a">
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g fill="#9ba4ab" clipPath="url(#prefix__a)">
          <path d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z" />
          <path d="M10.56 15.8c-.25 0-.51-.07-.74-.2-.47-.27-.76-.76-.76-1.3V9.71c0-.55.28-1.03.76-1.3.47-.27 1.04-.27 1.51.01l3.88 2.3c.46.27.74.75.74 1.29s-.28 1.02-.74 1.29l-3.88 2.3c-.24.14-.5.21-.76.21zm0-6.1v4.59l3.89-2.3-3.88-2.3z" />
        </g>
      </StyledSVG>
    );
  },
);

export default PlayCircle;
