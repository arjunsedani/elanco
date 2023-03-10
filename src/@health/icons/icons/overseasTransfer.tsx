import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const OverseasTransfer = forwardRef(
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
          d="M12 21.75h-.15c-5.31-.08-9.6-4.42-9.6-9.75 0-.15 0-.29.01-.44l-.23.23c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l1.5-1.5c.29-.29.77-.29 1.06 0l1.5 1.5c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.21-.21c0 .14-.01.29-.01.43 0 1.58.45 3.07 1.23 4.33.93-.29 1.88-.52 2.83-.69-.19-1.11-.3-2.33-.3-3.63s.11-2.52.3-3.63c-1.13-.21-2.25-.5-3.36-.87-.23-.08-.4-.25-.47-.48s-.04-.47.1-.67c1.83-2.57 4.8-4.1 7.93-4.1 5.38 0 9.75 4.37 9.75 9.75 0 .15 0 .3-.01.45l.23-.23c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.5 1.5c-.29.29-.77.29-1.06 0l-1.5-1.5c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.21.21c0-.14.01-.29.01-.43 0-1.58-.45-3.07-1.23-4.33-.93.29-1.87.52-2.82.69.19 1.11.3 2.33.3 3.63s-.11 2.52-.3 3.63c1.13.21 2.25.5 3.36.87.22.08.4.25.47.48.07.23.04.47-.1.67a9.757 9.757 0 01-7.77 4.1h-.16zm-.09-1.5h.17c.83-.08 1.71-1.36 2.28-3.37a22.09 22.09 0 00-4.74 0c.57 2.01 1.45 3.29 2.29 3.37zM5.94 17.6a8.25 8.25 0 003.27 2.16c-.44-.73-.81-1.63-1.09-2.67-.73.13-1.46.3-2.18.5zm9.93-.5c-.28 1.03-.65 1.93-1.08 2.66a8.216 8.216 0 003.24-2.16c-.71-.2-1.43-.37-2.16-.5zm-3.88-1.85c.91 0 1.81.05 2.71.16.18-1.03.29-2.17.29-3.4s-.11-2.38-.29-3.41c-1.8.21-3.62.21-5.42 0-.18 1.03-.29 2.18-.29 3.41s.11 2.38.29 3.4c.9-.1 1.8-.16 2.71-.16zM9.62 7.12c1.58.17 3.16.17 4.74 0-.59-2.07-1.51-3.37-2.37-3.37s-1.78 1.3-2.37 3.37zM5.95 6.4c.72.2 1.44.37 2.16.5.28-1.03.65-1.93 1.08-2.66A8.25 8.25 0 005.94 6.4zm8.83-2.17c.44.73.81 1.63 1.09 2.67.73-.13 1.46-.3 2.17-.5a8.287 8.287 0 00-3.26-2.16z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default OverseasTransfer;
