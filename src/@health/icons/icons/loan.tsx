import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Loan = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13 16.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm3.53.35l-.45-.6.45.6zm2.42-1.81l-.45-.6.45.6zm1.98 2.28l-.53-.53.53.53zm-4.12 3.17l.15.74-.15-.74zm-2.93.59l.15.74-.15-.74zm-1.76-.04l.18-.73-.18.73zm-2.65-.66l-.18.73.18-.73zm5.38-6.41l-.18.73.18-.73zm-2.29-.57l.18-.73-.18.73zm-3.74.65l.42.62-.42-.62zm-2.23.59c-.34.23-.44.7-.21 1.04.23.34.7.44 1.04.21l-.83-1.25zm7.3-9.89c.07.41.45.69.86.62.41-.07.69-.45.62-.86l-1.48.24zm-1.38 3.86c.41-.08.67-.47.6-.88a.758.758 0 00-.88-.6l.28 1.47zM6 20.25H4v1.5h2v-1.5zm-2 0c-.14 0-.25-.11-.25-.25h-1.5c0 .97.78 1.75 1.75 1.75v-1.5zM3.75 20v-6h-1.5v6h1.5zm0-6c0-.14.11-.25.25-.25v-1.5c-.97 0-1.75.78-1.75 1.75h1.5zm.25-.25h2v-1.5H4v1.5zm2 0c.14 0 .25.11.25.25h1.5c0-.97-.78-1.75-1.75-1.75v1.5zm.25.25v6h1.5v-6h-1.5zm0 6c0 .14-.11.25-.25.25v1.5c.97 0 1.75-.78 1.75-1.75h-1.5zM13 17.75h2.33v-1.5H13v1.5zm2.33 0c.59 0 1.17-.19 1.65-.55l-.9-1.2c-.22.16-.48.25-.75.25v1.5zm1.65-.55l2.42-1.81-.9-1.2L16.08 16l.9 1.2zm2.42-1.81c.3-.23.73-.2 1 .07l1.06-1.06c-.8-.8-2.06-.89-2.96-.21l.9 1.2zm1 .07c.3.3.3.78 0 1.08l1.06 1.06c.89-.88.89-2.32 0-3.2l-1.06 1.06zm0 1.08l-2.07 2.07 1.06 1.06 2.07-2.07-1.06-1.06zm-2.07 2.07c-.45.45-1.03.76-1.66.89l.29 1.47a4.78 4.78 0 002.43-1.3l-1.06-1.06zm-1.66.89l-2.93.59.29 1.47 2.93-.59-.29-1.47zm-2.93.59c-.47.09-.96.08-1.43-.03l-.36 1.45c.68.17 1.39.19 2.08.05l-.29-1.47zm-1.43-.03l-2.65-.66-.36 1.46 2.65.66.36-1.46zm-2.65-.66c-.38-.1-.76-.14-1.15-.14v1.5c.27 0 .53.03.79.1l.37-1.45zm-1.15-.14H7v1.5h1.51v-1.5zm4.49-1.5h1.48v-1.5H13v1.5zm1.48 0c1.25 0 2.27-1.01 2.27-2.27h-1.5c0 .42-.34.77-.77.77v1.5zm2.27-2.27v-.3h-1.5v.3h1.5zm0-.3c0-1.04-.71-1.95-1.72-2.2l-.36 1.46c.34.08.58.39.58.74h1.5zm-1.72-2.2l-2.29-.57-.36 1.46 2.29.57.36-1.46zm-2.29-.57c-.43-.11-.88-.16-1.32-.16v1.5c.32 0 .64.04.96.12l.36-1.46zm-1.32-.16c-1.07 0-2.13.32-3.02.92l.83 1.25c.65-.43 1.41-.66 2.19-.66v-1.5zm-3.02.91l-1.82 1.21.83 1.25 1.82-1.21-.83-1.25zm8.24-7.48c.82.82.82 2.14 0 2.95L17.7 9.7c1.4-1.4 1.4-3.67 0-5.07l-1.06 1.06zm0 2.95c-.82.82-2.14.82-2.95 0L12.63 9.7c1.4 1.4 3.67 1.4 5.07 0l-1.06-1.06zm-2.95 0c-.82-.82-.82-2.14 0-2.95l-1.06-1.06c-1.4 1.4-1.4 3.67 0 5.07l1.06-1.06zm0-2.95c.82-.82 2.14-.82 2.95 0l1.06-1.06c-1.4-1.4-3.67-1.4-5.07 0l1.06 1.06zm1.69-1.43c-.12-.71-.44-1.4-1-1.95l-1.06 1.06c.32.32.51.71.58 1.14l1.48-.24zm-1-1.95c-1.4-1.4-3.67-1.4-5.07 0l1.06 1.06c.82-.82 2.14-.82 2.95 0l1.06-1.06zm-5.07 0c-1.4 1.4-1.4 3.67 0 5.07l1.06-1.06c-.82-.82-.82-2.14 0-2.95L9.31 2.31zm0 5.07a3.6 3.6 0 003.21.99l-.28-1.47a2.12 2.12 0 01-1.87-.57L9.31 7.39z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Loan;
