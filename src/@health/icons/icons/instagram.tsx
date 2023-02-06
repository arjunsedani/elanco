import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Instagram = forwardRef(
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
          <path d="M16.5 21.75h-9c-2.89 0-5.25-2.35-5.25-5.25v-9c0-2.89 2.35-5.25 5.25-5.25h9.01c2.89 0 5.25 2.35 5.25 5.25v9.01c0 2.89-2.35 5.25-5.25 5.25zm-9-18c-2.07 0-3.75 1.68-3.75 3.75v9.01c0 2.07 1.68 3.75 3.75 3.75h9.01c2.07 0 3.75-1.68 3.75-3.75V7.5c0-2.07-1.68-3.75-3.75-3.75H7.5z" />
          <path d="M16.95 8.14c-.6 0-1.09-.49-1.09-1.09s.49-1.08 1.08-1.09a1.097 1.097 0 011.1 1.09c0 .6-.49 1.08-1.09 1.08zm0-1.5a.412.412 0 00-.29.7.412.412 0 00.7-.29c0-.22-.18-.41-.41-.41zM12 16.35c-1.11 0-2.23-.42-3.08-1.27-.82-.82-1.27-1.91-1.27-3.08A4.334 4.334 0 0112 7.65a4.346 4.346 0 110 8.69zm0-7.2c-.76 0-1.48.3-2.02.83s-.83 1.25-.83 2.02.3 1.48.83 2.02a2.855 2.855 0 004.03 0 2.855 2.855 0 000-4.03c-.54-.54-1.25-.83-2.02-.83z" />
        </g>
      </StyledSVG>
    );
  },
);

export default Instagram;
