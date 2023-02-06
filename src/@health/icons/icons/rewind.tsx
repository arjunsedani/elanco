import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Rewind = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        <path d="M19.31 18.4c-.37 0-.73-.12-1.04-.34l-6.31-4.65c-.45-.33-.71-.85-.71-1.41s.26-1.08.71-1.41l6.31-4.65a1.75 1.75 0 011.83-.15c.59.3.96.9.96 1.56v9.29c0 .66-.37 1.26-.96 1.56-.25.13-.52.19-.79.19zm-.15-11.25l-6.31 4.65c-.09.07-.1.15-.1.2s.01.14.1.2l6.31 4.65c.11.08.21.05.26.02s.14-.09.14-.22v-9.3c0-.13-.09-.2-.14-.22a.229.229 0 00-.26.02z" />
        <path d="M11 18.4c-.37 0-.73-.12-1.04-.34l-6.31-4.65c-.45-.33-.71-.85-.71-1.41s.26-1.08.71-1.41l6.31-4.65a1.75 1.75 0 011.83-.15c.59.3.96.9.96 1.56v9.29c0 .66-.37 1.26-.96 1.56-.25.13-.52.19-.79.19zm0-11.3s-.09.01-.14.05L4.55 11.8c-.09.07-.1.15-.1.2s.01.14.1.2l6.31 4.65c.11.08.21.05.26.02.05-.03.14-.09.14-.22v-9.3c0-.13-.09-.2-.14-.22-.03-.01-.07-.03-.12-.03zm-.59-.55z" />
      </g>
    </StyledSVG>
  );
});

export default Rewind;
