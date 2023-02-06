import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const BatteryCharging = forwardRef(
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
          d="M17 18.75H5c-1.52 0-2.75-1.23-2.75-2.75V8c0-1.52 1.23-2.75 2.75-2.75h12c1.52 0 2.75 1.23 2.75 2.75v.25h.26c.27 0 .54.06.78.19l.48.24c.6.3.97.9.97 1.56v3.51c0 .67-.37 1.27-.97 1.57l-.49.24c-.24.12-.51.19-.78.19h-.26V16c0 1.52-1.23 2.75-2.75 2.75zm-12-12c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25H5zm14.75 7.5h.26s.08 0 .11-.03l.49-.24c.08-.04.14-.13.14-.22v-3.51a.24.24 0 00-.14-.22l-.49-.24s-.07-.03-.11-.03h-.26v4.5zm-8.45 1.5c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l.96-1.92H9.2c-.26 0-.5-.13-.64-.36a.733.733 0 01-.03-.73l1.5-3c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.96 1.91h2.39c.26 0 .5.13.64.36.14.22.15.5.03.73l-1.5 3c-.13.26-.4.42-.67.42z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default BatteryCharging;
