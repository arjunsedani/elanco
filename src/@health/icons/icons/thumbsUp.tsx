import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ThumbsUp = forwardRef(
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
          d="M16.84 19.61h-6.29c-.71 0-1.39-.3-1.87-.81l-.14-.15c-.3.57-.91.96-1.6.96H5.05c-1 0-1.81-.81-1.81-1.81v-7.39c0-1 .81-1.81 1.81-1.81h1.89c.45 0 .86.16 1.18.44l2.94-3.82c.46-.6 1.17-.96 1.93-.97.75-.02 1.48.32 1.96.9.37.45.58 1.03.58 1.62v2.52h2.35c.85 0 1.64.42 2.12 1.13l.33.49c.42.63.54 1.4.33 2.13l-1.36 4.72a2.559 2.559 0 01-2.45 1.85zm-8.09-2.95l1.03 1.11c.2.21.48.33.77.33h6.29c.46 0 .88-.31 1.01-.76l1.36-4.72c.09-.3.04-.62-.14-.87l-.33-.49c-.2-.29-.52-.47-.87-.47h-3.1c-.41 0-.75-.34-.75-.75V6.77c0-.24-.08-.48-.24-.66-.19-.23-.49-.36-.78-.36-.3 0-.58.15-.76.38l-3.49 4.55v5.98zM5.06 10.1c-.17 0-.31.14-.31.31v7.39c0 .17.14.31.31.31h1.89c.17 0 .31-.14.31-.31V10.42c0-.17-.14-.31-.31-.31H5.06z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ThumbsUp;
