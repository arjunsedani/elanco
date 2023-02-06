import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Octagon = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <g clipPath="url(#prefix__a)">
        <path
          d="M15.04 21.92H8.96c-.68 0-1.35-.28-1.83-.76l-4.3-4.3c-.48-.48-.76-1.14-.76-1.83V8.95c0-.69.27-1.34.76-1.83l4.31-4.28c.48-.48 1.14-.76 1.83-.76h6.08c.69 0 1.34.27 1.83.76l4.29 4.3c.48.48.76 1.15.76 1.83v6.08c0 .69-.27 1.34-.76 1.83l-4.3 4.3c-.48.48-1.15.76-1.83.76zM8.96 3.58c-.29 0-.56.12-.76.32L3.9 8.2c-.2.2-.32.48-.32.77v6.08c0 .29.12.56.32.76l4.3 4.3c.2.2.48.32.77.32h6.08c.29 0 .56-.12.76-.32l4.3-4.3c.21-.21.32-.48.32-.77V8.96c0-.29-.12-.56-.32-.76L15.8 3.9c-.21-.2-.48-.32-.77-.32H8.95z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Octagon;
