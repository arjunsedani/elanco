import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Anchor = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 9.55c-.81 0-1.61-.31-2.23-.92-.6-.6-.92-1.39-.92-2.23s.33-1.63.92-2.23c1.19-1.19 3.27-1.19 4.45 0a3.165 3.165 0 010 4.46c-.61.61-1.42.92-2.23.92zm0-4.8c-.44 0-.85.17-1.17.48s-.48.73-.48 1.17.17.85.48 1.17c.64.64 1.69.64 2.33 0a1.666 1.666 0 000-2.34c-.31-.31-.73-.48-1.17-.48z"
        fill="#9ba4ab"
      />
      <path
        d="M12 20.75c-.41 0-.75-.34-.75-.75V8.8c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
      <path
        d="M12 20.75c-4.82 0-8.75-3.92-8.75-8.75 0-.41.34-.75.75-.75h2.4c.41 0 .75.34.75.75s-.34.75-.75.75H4.79c.38 3.65 3.47 6.5 7.21 6.5s6.83-2.85 7.21-6.5H17.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H20c.41 0 .75.34.75.75 0 4.83-3.92 8.75-8.75 8.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Anchor;
