import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const FlagFilled = forwardRef(
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
          d="M19.47 13.9s.03-.08.03-.13V3.75c0-.06-.02-.1-.03-.16 0-.02 0-.04-.01-.05a.899.899 0 00-.12-.24.724.724 0 00-.49-.28S18.79 3 18.76 3c-.06 0-.11.02-.16.03-.02 0-.04 0-.05.01-.06.02-.12.05-.18.08-.02.01-.05.02-.07.03 0 0-.8.57-3.04.57-1.17 0-2.17-.39-3.22-.81-1.14-.45-2.32-.92-3.78-.92-2.76 0-3.84.96-4.02 1.14h-.01v.03s-.04.05-.06.08c-.04.05-.08.1-.1.16-.01.04-.01.08-.02.11-.01.05-.03.1-.03.16v17.08c0 .41.34.75.75.75s.75-.34.75-.75V14.2c.4-.17 1.24-.42 2.75-.42 1.17 0 2.17.39 3.22.81 1.14.45 2.32.92 3.78.92 2.88 0 3.95-1.1 4.06-1.23.03-.04.05-.08.07-.12.02-.04.05-.07.07-.11.02-.05.02-.09.03-.14z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default FlagFilled;
