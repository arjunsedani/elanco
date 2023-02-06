import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Codesandbox = forwardRef(
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
        <defs>
          <clipPath id="prefix__a">
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            d="M12 22.74h-.03c-.46 0-.93-.13-1.34-.37l-3.47-2s-.03-.02-.05-.03l-3.48-2c-.85-.49-1.38-1.4-1.38-2.38V7.9c0-.98.53-1.9 1.39-2.39l6.87-3.91c.83-.47 1.86-.48 2.69-.02l3.59 1.98.06.03 3.47 1.92c.88.48 1.42 1.4 1.42 2.4v8.05c0 .98-.53 1.89-1.38 2.38l-3.47 2s-.04.03-.07.04l-3.47 2c-.41.24-.88.36-1.34.37h-.03zm-3.75-3.47l3 1.73v-8.77l-7.5-4.21v3.47l4.12 2.31c.24.13.38.38.38.65v4.82zm4.5-7.04V21l3-1.73v-4.82c0-.27.15-.52.38-.65l4.12-2.31V8.02l-7.5 4.21zm-9 .98v2.75c0 .44.24.86.62 1.08l2.38 1.37v-3.52l-3-1.68zm13.5 1.68v3.52l2.38-1.37c.39-.22.62-.64.62-1.08v-2.75l-3 1.68zM4.52 6.74L12 10.93l7.46-4.18-2.99-1.65-4.1 2.3c-.23.13-.51.13-.73 0L7.47 5.07 4.53 6.75zM4 6.17zM8.98 4.2l3.01 1.69 2.92-1.64-2.44-1.35a1.28 1.28 0 00-1.23 0L8.97 4.19z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default Codesandbox;
