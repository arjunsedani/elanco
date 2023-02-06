import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MessageSquare = forwardRef(
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
          d="M8 21.75c-.11 0-.22-.02-.32-.07a.753.753 0 01-.43-.68v-3.25H6c-2.07 0-3.75-1.68-3.75-3.75V6c0-2.07 1.68-3.75 3.75-3.75h12c2.07 0 3.75 1.68 3.75 3.75v8c0 2.07-1.68 3.75-3.75 3.75h-4.74l-4.79 3.84c-.14.11-.3.16-.47.16zm-2-18C4.76 3.75 3.75 4.76 3.75 6v8c0 1.24 1.01 2.25 2.25 2.25h2c.41 0 .75.34.75.75v2.44l3.78-3.03c.13-.11.3-.16.47-.16h5c1.24 0 2.25-1.01 2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default MessageSquare;
