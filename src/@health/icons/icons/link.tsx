import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Link = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M7.64 20.75c-1.44 0-2.79-.56-3.81-1.58s-1.58-2.37-1.58-3.81.56-2.79 1.58-3.81l3.03-3.03c.44-.44.96-.79 1.54-1.03a4.78 4.78 0 013.64 0c.58.24 1.1.59 1.54 1.03l.95.95c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.95-.95a3.255 3.255 0 00-4.59 0L4.9 12.61c-.73.74-1.14 1.71-1.14 2.75s.4 2.02 1.14 2.75c1.47 1.47 4.03 1.47 5.5 0l.89-.89c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.89.89a5.348 5.348 0 01-3.81 1.58zm6.14-4.88a4.726 4.726 0 01-3.36-1.39l-.95-.95c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.95.95c.3.3.66.54 1.05.71a3.255 3.255 0 003.55-.71l3.03-3.03c.74-.73 1.14-1.71 1.14-2.75s-.4-2.02-1.14-2.75c-1.47-1.47-4.03-1.47-5.5 0l-.89.89c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l.89-.89c1.02-1.02 2.37-1.58 3.81-1.58s2.79.56 3.81 1.58 1.58 2.37 1.58 3.81-.56 2.79-1.58 3.81l-3.03 3.03a4.726 4.726 0 01-3.36 1.39z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Link;
