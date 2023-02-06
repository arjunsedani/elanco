import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Unlock = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17 21.75H7c-1.52 0-2.75-1.23-2.75-2.75v-7c0-1.52 1.23-2.75 2.75-2.75h8.25V7c0-1.79-1.46-3.25-3.25-3.25-1.48 0-2.77 1.01-3.14 2.46-.1.4-.51.65-.91.54-.4-.1-.65-.51-.54-.91A4.737 4.737 0 0112 2.25c2.62 0 4.75 2.13 4.75 4.75v2.25H17c1.52 0 2.75 1.23 2.75 2.75v7c0 1.52-1.23 2.75-2.75 2.75zm-10-11c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25H7z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Unlock;
