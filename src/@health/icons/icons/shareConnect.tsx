import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ShareConnect = forwardRef(
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
          d="M17.33 20.75c-.91 0-1.77-.36-2.42-1-.65-.64-1-1.5-1-2.42 0-.28.03-.55.1-.82l-4.7-2.35c-.07.09-.15.17-.23.25-1.29 1.29-3.54 1.29-4.83 0a3.422 3.422 0 010-4.83 3.422 3.422 0 015.06.25l4.7-2.35c-.06-.26-.1-.54-.1-.82 0-.91.36-1.77 1-2.42 1.29-1.29 3.54-1.29 4.83 0 .65.65 1 1.5 1 2.42s-.36 1.77-1 2.42c-1.29 1.29-3.54 1.29-4.83 0-.08-.08-.16-.17-.23-.26l-4.7 2.35c.13.54.13 1.11 0 1.65l4.7 2.35c.07-.09.15-.17.23-.26 1.29-1.29 3.54-1.29 4.83 0 .65.65 1 1.5 1 2.42s-.36 1.77-1 2.42c-.64.65-1.5 1-2.42 1zm-1.77-4.15a1.94 1.94 0 00.42 2.09c.72.72 1.99.72 2.71 0 .36-.36.56-.84.56-1.36s-.2-.99-.56-1.36c-.72-.72-1.99-.72-2.71 0-.12.12-.22.25-.3.38-.01.04-.03.08-.05.12-.02.04-.04.08-.07.11zm-8.89-6.52a1.913 1.913 0 00-1.36 3.27c.75.75 1.99.72 2.71 0 .12-.12.22-.25.3-.39.01-.04.03-.07.04-.11.02-.04.04-.07.06-.1.1-.23.15-.49.15-.75s-.05-.52-.15-.75c-.02-.03-.04-.07-.06-.1a.487.487 0 01-.04-.11 1.905 1.905 0 00-1.66-.95zm9.01-2.44c.08.14.18.27.3.38.72.72 1.99.72 2.71 0 .36-.36.56-.84.56-1.36s-.2-.99-.56-1.36c-.72-.72-1.99-.72-2.71 0-.36.36-.56.84-.56 1.36 0 .26.05.5.14.73.03.03.05.07.07.11s.04.08.05.12z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ShareConnect;
