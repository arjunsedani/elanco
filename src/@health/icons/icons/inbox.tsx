import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Inbox = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M3 14.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm5.28 1.3l-.67.33.67-.33zm.45.89l-.67.34.67-.34zm6.55 0l-.67-.34.67.34zm.45-.89l-.67-.34.67.34zm5.28.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-2 4.5H5v1.5h14v-1.5zm-14 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zM3.76 19V5h-1.5v14h1.5zm0-14c0-.69.56-1.25 1.25-1.25v-1.5C3.49 2.25 2.26 3.48 2.26 5h1.5zm1.25-1.25h14v-1.5H5v1.5zm14 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zM20.26 5v14h1.5V5h-1.5zm0 14c0 .69-.56 1.25-1.25 1.25v1.5c1.52 0 2.75-1.23 2.75-2.75h-1.5zM3 15.75h4.38v-1.5H3v1.5zm4.38 0c.09 0 .18.05.22.14l1.34-.67c-.3-.59-.9-.97-1.57-.97v1.5zm.22.14l.45.89 1.34-.67-.45-.89-1.34.67zm.45.89c.3.59.9.97 1.57.97v-1.5a.24.24 0 01-.22-.14l-1.34.67zm1.57.97h4.76v-1.5H9.62v1.5zm4.76 0c.66 0 1.27-.37 1.57-.97l-1.34-.67c-.04.08-.13.14-.22.14v1.5zm1.56-.97l.45-.89-1.34-.67-.45.89 1.34.67zm.45-.89a.24.24 0 01.22-.14v-1.5c-.66 0-1.27.37-1.57.97l1.34.67zm.22-.14h4.38v-1.5h-4.38v1.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Inbox;
