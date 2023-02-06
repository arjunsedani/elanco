import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CameraOff = forwardRef(
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
          d="M21 21.75c-.19 0-.38-.07-.53-.22l-1.78-1.78H5c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V8c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .33.13.65.37.88s.55.37.88.37h12.19l-2.4-2.4c-.81.58-1.79.9-2.79.9-1.27 0-2.46-.49-3.36-1.39-.9-.9-1.39-2.09-1.39-3.36 0-1.02.32-1.98.9-2.79L2.47 3.53c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L15.36 14.3l6.17 6.17c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM9.23 10.29a3.265 3.265 0 00.47 4.01c1.04 1.04 2.76 1.23 4 .47L9.23 10.3zM21 17.75c-.41 0-.75-.34-.75-.75V8c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37h-2.59c-.23 0-.46-.04-.67-.13-.21-.09-.4-.22-.57-.38l-1.12-1.12c-.12-.12-.25-.21-.41-.27-.15-.06-.31-.1-.48-.1h-2.34c-.17 0-.33.03-.48.1-.15.06-.29.15-.41.27l-.41.41c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.41-.41c.26-.26.56-.46.89-.6s.69-.21 1.05-.21h2.34c.36 0 .72.07 1.05.21.34.14.64.34.89.6l1.12 1.12.18.07h2.59c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v9c0 .41-.34.75-.75.75zM17.99 9.8c-.05 0-.1 0-.15-.01a.842.842 0 01-.43-.24.81.81 0 01-.2-.39.84.84 0 01.05-.47.77.77 0 01.32-.37c.19-.12.48-.15.69-.07.09.03.19.09.26.16l.04.04.04.04s.07.1.1.15.02.03.02.05c0 .02.02.04.02.06.02.08.04.16.04.24 0 .13-.04.29-.11.41-.08.13-.22.26-.36.32-.1.04-.22.07-.33.07z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CameraOff;
