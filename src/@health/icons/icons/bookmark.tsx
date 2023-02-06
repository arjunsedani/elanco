import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Bookmark = forwardRef(
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
          d="M18.3 21.75c-.12 0-.24-.03-.35-.08L12 18.58l-5.96 3.09c-.23.12-.51.11-.73-.03a.764.764 0 01-.36-.64V5c0-1.52 1.23-2.75 2.75-2.75h8.6c1.52 0 2.75 1.23 2.75 2.75v16c0 .26-.14.5-.36.64-.12.07-.25.11-.39.11zm-10.6-18c-.69 0-1.25.56-1.25 1.25v14.77l5.21-2.71c.22-.11.47-.11.69 0l5.2 2.7V5c0-.69-.56-1.25-1.25-1.25H7.7z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Bookmark;
