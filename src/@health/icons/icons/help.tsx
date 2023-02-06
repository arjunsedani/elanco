import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Help = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 20.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-1.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4.25c-.41 0-.75-.34-.75-.75 0-1.26 1.07-2.12 2.1-2.94 1.08-.86 2.2-1.76 2.2-3.06-.12-1.88-1.77-3.37-3.71-3.25-1.82-.08-3.35 1.1-3.74 2.79-.09.4-.5.65-.9.56-.4-.09-.65-.5-.56-.9a5.114 5.114 0 015.19-3.95c2.69-.15 5.05 1.96 5.22 4.7 0 2.06-1.53 3.29-2.76 4.27-.79.64-1.54 1.23-1.54 1.77 0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Help;
