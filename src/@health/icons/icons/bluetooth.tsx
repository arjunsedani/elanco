import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Bluetooth = forwardRef(
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
          d="M11 21.75c-.11 0-.23-.03-.34-.08a.76.76 0 01-.41-.67v-6.68l-3.76 3.25c-.31.27-.79.24-1.06-.08a.748.748 0 01.08-1.06l4.74-4.09v-.68L5.51 7.57a.756.756 0 01-.08-1.06c.27-.31.75-.35 1.06-.08l3.76 3.25V3c0-.28.16-.54.41-.67s.56-.1.79.07l6 4.5c.18.14.29.35.3.57 0 .23-.09.45-.26.59l-4.55 3.93 4.55 3.93c.17.15.27.37.26.59 0 .23-.12.44-.3.57l-6 4.5c-.13.1-.29.15-.45.15zm.75-8.72v6.47l4.05-3.04-4.02-3.47-.04.03zm0-2.05l.04.03 4.02-3.47-4.05-3.04v6.48z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Bluetooth;
