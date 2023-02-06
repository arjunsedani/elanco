import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Shuffle = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
          d="M19 20.73c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l.71-.71h-2.7c-1.16.06-2.27-.53-2.98-1.45l-1.13-1.46c-.25-.33-.19-.8.13-1.05.33-.25.8-.19 1.05.13l1.13 1.46c.42.55 1.09.87 1.78.87h2.73l-.73-.74c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2 .02.02c.06.07.11.14.14.22.03.08.05.17.06.27v.02a.776.776 0 01-.22.53l-2 2c-.15.15-.34.22-.53.22zM5.4 18.74H3a.773.773 0 01-.75-.77c0-.42.33-.76.75-.75h2.38c.75-.01 1.46-.36 1.88-.99l6.22-9.31c.7-1.05 1.86-1.67 3.12-1.67h2.58l-.71-.7c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2 .02.02c.06.07.11.14.15.23.04.09.06.18.06.28v.03a.696.696 0 01-.22.51l-2 2c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.73-.73h-2.59c-.75 0-1.46.36-1.87.99l-6.21 9.31a3.731 3.731 0 01-3.12 1.67zm3.5-9.37c-.23 0-.46-.11-.61-.31L7.3 7.69c-.42-.59-1.15-.92-1.84-.93H3c-.41-.02-.75-.32-.75-.73s.33-.75.75-.75h2.46c1.18-.05 2.35.56 3.06 1.54l.99 1.37a.753.753 0 01-.61 1.19z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Shuffle;
