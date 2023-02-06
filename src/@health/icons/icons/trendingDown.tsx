import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TrendingDown = forwardRef(
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
        <path
          d="M21 17.43h-4.91c-.34 0-.61-.27-.61-.61s.27-.61.61-.61h3.43l-6.29-6.29-3.66 3.66c-.12.12-.27.18-.43.18-.16 0-.32-.06-.43-.18L2.57 7.43a.616.616 0 01.87-.87l5.7 5.7L12.8 8.6c.12-.11.27-.18.43-.18.16 0 .32.06.43.18l6.73 6.73V11.9c0-.34.27-.61.61-.61s.61.27.61.61v4.91c0 .08-.02.17-.05.24-.03.07-.07.13-.13.19h-.01c-.06.07-.12.11-.19.14-.07.03-.14.04-.21.05H21z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TrendingDown;
