import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PenTool = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M4 20.75h-.05a.714.714 0 01-.48-.22.772.772 0 01-.21-.48v-.09s0-.07.01-.11L5.13 9.9c.19-1 .9-1.82 1.86-2.15l4.16-1.41 2.57-2.57c.69-.69 1.82-.7 2.52 0l3.99 3.99c.69.69.69 1.82 0 2.52l-2.57 2.57-1.41 4.16a2.83 2.83 0 01-2.15 1.86l-9.95 1.86s-.07.01-.1.01H4zm5.26-4.95l-3.02 3.02 7.58-1.41c.47-.09.85-.42 1-.87l1.32-3.88-4.79-4.79-3.88 1.32c-.45.15-.78.54-.87 1l-1.41 7.58 3.02-3.02c-.2-.37-.3-.79-.3-1.22 0-.69.27-1.34.76-1.83.98-.98 2.68-.98 3.66 0 .49.49.76 1.14.76 1.83s-.27 1.34-.76 1.83c-.79.79-2.08.97-3.05.45zm.51-1.46c.41.36 1.08.34 1.47-.05.21-.21.32-.48.32-.77s-.11-.56-.32-.77c-.41-.41-1.12-.41-1.53 0a1.09 1.09 0 00-.06 1.48c.02.02.04.04.06.05s.04.04.05.06zM12.6 7l4.39 4.39 2.17-2.17c.11-.11.11-.29 0-.4l-3.99-3.99a.284.284 0 00-.4 0L12.6 7z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default PenTool;
