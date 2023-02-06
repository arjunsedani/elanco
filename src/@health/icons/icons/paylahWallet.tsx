import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PaylahWallet = forwardRef(
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
          d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V8.29c0-1.14.71-2.17 1.78-2.57l10.35-3.91c.54-.2 1.14-.13 1.61.2s.75.86.75 1.44v3.72h2.25c1.52 0 2.75 1.23 2.75 2.75V19c0 1.52-1.23 2.75-2.75 2.75zM3.75 8.67V19c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V9.92c0-.69-.56-1.25-1.25-1.25H3.75zm.71-1.5h10.79V3.45c0-.11-.07-.18-.11-.21s-.12-.07-.23-.03L4.56 7.12s-.07.03-.1.04zM16 15.62c-.3 0-.58-.12-.79-.33a1.133 1.133 0 01.79-1.93c.62 0 1.13.5 1.13 1.12s-.5 1.12-1.12 1.12zm0-1.5v.75c.21 0 .38-.17.38-.37 0-.1-.04-.2-.11-.27a.386.386 0 00-.27-.11zm0 0c-.2 0-.37.17-.37.38s.17.38.37.38v-.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default PaylahWallet;
