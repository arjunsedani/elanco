import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Hexagon = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M12 21.99c-.45 0-.89-.11-1.29-.34l-6.42-3.71C3.49 17.48 3 16.62 3 15.7V8.29c0-.92.5-1.78 1.29-2.24l6.42-3.71c.8-.46 1.79-.46 2.58 0l6.42 3.71c.8.46 1.29 1.32 1.29 2.24v7.41c0 .92-.5 1.78-1.29 2.24l-6.42 3.71c-.4.23-.85.34-1.29.34zm0-18.48c-.19 0-.38.05-.54.14L5.04 7.36c-.33.19-.54.55-.54.94v7.41c0 .39.21.75.54.94l6.42 3.71c.33.19.75.19 1.08 0l6.42-3.71c.33-.19.54-.55.54-.94V8.3c0-.39-.21-.75-.54-.94l-6.42-3.71c-.17-.1-.35-.14-.54-.14z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Hexagon;
