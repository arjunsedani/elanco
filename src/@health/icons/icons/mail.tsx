import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Mail = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <g fill="#9ba4ab" clipPath="url(#prefix__a)">
        <path d="M12.05 13.82c-.92 0-1.83-.26-2.65-.79L3.38 8.92c-.75-.6-1.13-1.32-1.13-2.12 0-1.41 1.14-2.55 2.55-2.55h14.4c1.41 0 2.55 1.14 2.55 2.55 0 .87-.44 1.53-.87 2.07-.05.06-.1.11-.17.16l-6 4c-.83.53-1.75.79-2.67.79zM4.8 5.75c-.59 0-1.05.46-1.05 1.05 0 .34.17.64.52.91l5.96 4.07c1.14.73 2.52.73 3.67-.01l5.89-3.93c.33-.43.47-.73.47-1.04 0-.59-.46-1.05-1.05-1.05H4.8z" />
        <path d="M19 19.75H5c-1.52 0-2.75-1.23-2.75-2.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 1.52-1.23 2.75-2.75 2.75z" />
      </g>
    </StyledSVG>
  );
});

export default Mail;
