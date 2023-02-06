import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Droplet = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 22.76c-1.74 0-3.42-.51-4.86-1.47a8.665 8.665 0 01-3.22-3.93c-.66-1.6-.84-3.35-.5-5.06.34-1.7 1.17-3.25 2.4-4.48l5.65-5.66a.75.75 0 011.06 0l5.66 5.66a8.744 8.744 0 011.9 9.54 8.835 8.835 0 01-3.22 3.93 8.757 8.757 0 01-4.86 1.47zm0-19.01L6.88 8.88a7.242 7.242 0 00-1.58 7.9 7.137 7.137 0 002.67 3.25c2.39 1.6 5.66 1.6 8.06 0a7.242 7.242 0 001.09-11.15L12 3.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Droplet;
