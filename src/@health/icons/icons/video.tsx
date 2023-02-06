import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Video = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 16.95h-.04c-.31 0-.61-.1-.88-.26l-3.42-2.11a.764.764 0 01-.36-.64v-3.88c0-.26.13-.5.36-.64l3.43-2.11c.26-.16.57-.25.88-.26.31 0 .62.07.89.22s.5.38.66.64c.16.27.24.58.24.89v6.4c0 .31-.08.62-.24.88a1.764 1.764 0 01-1.51.86zm-3.2-3.43l3.07 1.89s.06.03.13.04c.05 0 .09-.01.12-.03.04-.02.07-.05.09-.09.02-.04.04-.08.04-.13V8.8s-.01-.09-.04-.13a.196.196 0 00-.09-.09c-.04-.02-.05-.04-.13-.03a.22.22 0 00-.13.04l-3.07 1.89v3.05z"
        fill="#9ba4ab"
      />
      <path
        d="M13.05 18.75H6c-2.07 0-3.75-1.68-3.75-3.75V9c0-2.07 1.68-3.75 3.75-3.75h7.05c2.07 0 3.75 1.68 3.75 3.75v6c0 2.07-1.68 3.75-3.75 3.75zM6 6.75C4.76 6.75 3.75 7.76 3.75 9v6c0 1.24 1.01 2.25 2.25 2.25h7.05c1.24 0 2.25-1.01 2.25-2.25V9c0-1.24-1.01-2.25-2.25-2.25H6z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Video;
