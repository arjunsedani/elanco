import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Play = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M9.04 17.75c-.3 0-.6-.07-.86-.22-.57-.31-.92-.91-.92-1.56V8.05c0-.65.35-1.25.92-1.56.57-.32 1.26-.3 1.81.05l6.34 3.96c.53.33.84.9.84 1.52s-.32 1.19-.84 1.51l-6.34 3.96a1.8 1.8 0 01-.95.27zm0-10c-.06 0-.11.02-.14.04-.06.03-.15.1-.15.25v7.92c0 .15.09.22.15.25s.17.07.29 0l6.34-3.96c.12-.07.14-.18.14-.24s-.02-.17-.13-.24L9.2 7.81a.298.298 0 00-.15-.05z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Play;
