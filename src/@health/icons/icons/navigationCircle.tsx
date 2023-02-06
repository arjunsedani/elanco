import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const NavigationCircle = forwardRef(
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
          d="M12.11 21.75c-5.38 0-9.75-4.37-9.75-9.75s4.38-9.75 9.75-9.75 9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z"
          fill="#9ba4ab"
        />
        <path
          d="M9.1 16.25c-.13 0-.26-.01-.39-.04-.35-.08-.67-.27-.91-.54s-.39-.6-.44-.96c-.04-.36.03-.72.2-1.04l3-5.5c.15-.28.37-.51.64-.67.54-.32 1.24-.32 1.79 0 .27.16.49.39.64.67l3 5.5c.17.32.24.67.2 1.04-.04.36-.19.7-.44.97-.24.27-.56.45-.91.54-.35.08-.72.05-1.05-.09l-2.24-.91c-.06-.02-.13-.03-.19 0l-2.24.91c-.21.09-.44.13-.66.13zm3-7.5s-.09.01-.13.03c-.04.02-.07.06-.09.09l-3 5.5s-.03.1-.03.15c0 .05.03.1.06.14.03.04.08.06.13.08.05.01.1 0 .15-.01l2.24-.91c.43-.18.9-.18 1.32 0l2.24.91s.1.03.15.01c.05-.01.1-.04.13-.08s.06-.09.06-.14c0-.05 0-.1-.03-.14l-3-5.5s-.05-.07-.09-.09a.284.284 0 00-.13-.04z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default NavigationCircle;
