import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Clear = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM9.46 8.54a.658.658 0 00-.92 0c-.25.25-.25.67 0 .92L11.08 12l-2.54 2.54c-.25.25-.25.67 0 .92s.67.25.92 0L12 12.92l2.54 2.54c.25.25.67.25.92 0s.25-.67 0-.92L12.92 12l2.54-2.54c.25-.25.25-.67 0-.92a.658.658 0 00-.92 0L12 11.08 9.46 8.54z"
        fill="#9ba4ab"
        fillRule="evenodd"
      />
    </StyledSVG>
  );
});

export default Clear;
