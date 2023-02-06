import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ApplicationSubmitted = forwardRef(
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
          d="M8 5.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM6 5zM4 7zm0 12zm7 2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm5-17.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zM18 5zm1.25 5c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-1.75 3zM13 17.5zm6.56-.26c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l1.06 1.06zm-2.44 1.38l-.53.53c.29.29.77.29 1.06 0l-.53-.53zm-.62-1.68a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.06-1.06zM8 4.25H6v1.5h2v-1.5zm-2 0c-.73 0-1.43.29-1.94.81l1.06 1.06c.23-.23.55-.37.88-.37v-1.5zm-1.94.81A2.75 2.75 0 003.25 7h1.5c0-.33.13-.65.37-.88L4.06 5.06zM3.25 7v12h1.5V7h-1.5zm0 12c0 .73.29 1.43.81 1.94l1.06-1.06c-.23-.23-.37-.55-.37-.88h-1.5zm.81 1.94c.52.52 1.22.81 1.94.81v-1.5c-.33 0-.65-.13-.88-.37l-1.06 1.06zm1.94.81h5v-1.5H6v1.5zm3-18h6v-1.5H9v1.5zm6 0c.14 0 .25.11.25.25h1.5c0-.97-.78-1.75-1.75-1.75v1.5zm.25.25v2h1.5V4h-1.5zm0 2c0 .14-.11.25-.25.25v1.5c.97 0 1.75-.78 1.75-1.75h-1.5zm-.25.25H9v1.5h6v-1.5zm-6 0c-.14 0-.25-.11-.25-.25h-1.5c0 .97.78 1.75 1.75 1.75v-1.5zM8.75 6V4h-1.5v2h1.5zm0-2c0-.14.11-.25.25-.25v-1.5c-.97 0-1.75.78-1.75 1.75h1.5zM16 5.75h2v-1.5h-2v1.5zm2 0c.33 0 .65.13.88.37l1.06-1.06A2.75 2.75 0 0018 4.25v1.5zm.88.37c.23.23.37.55.37.88h1.5c0-.73-.29-1.43-.81-1.94l-1.06 1.06zm.37.88v3h1.5V7h-1.5zm-1.75 6.75c.74 0 1.47.22 2.08.63l.83-1.25a5.22 5.22 0 00-2.92-.88v1.5zm2.08.63c.62.41 1.1 1 1.38 1.68l1.39-.57c-.4-.96-1.07-1.78-1.93-2.36l-.83 1.25zm1.38 1.68c.28.69.36 1.44.21 2.17l1.47.29c.2-1.02.1-2.07-.3-3.03l-1.39.57zm.21 2.17c-.14.73-.5 1.4-1.03 1.92l1.06 1.06c.73-.73 1.23-1.67 1.44-2.69l-1.47-.29zm-1.03 1.92a3.8 3.8 0 01-1.92 1.03l.29 1.47c1.02-.2 1.95-.7 2.69-1.44l-1.06-1.06zm-1.92 1.03c-.73.14-1.48.07-2.17-.21l-.57 1.39c.96.4 2.01.5 3.03.3l-.29-1.47zm-2.17-.21a3.66 3.66 0 01-1.68-1.38l-1.25.83c.58.86 1.4 1.54 2.36 1.93l.57-1.39zm-1.68-1.38c-.41-.62-.63-1.34-.63-2.08h-1.5c0 1.04.31 2.05.88 2.92l1.25-.83zm-.63-2.08c0-.99.4-1.95 1.1-2.65l-1.06-1.06c-.98.98-1.54 2.32-1.54 3.71h1.5zm1.1-2.65c.7-.7 1.66-1.1 2.65-1.1v-1.5c-1.39 0-2.73.55-3.71 1.54l1.06 1.06zm3.65 1.33l-1.91 1.91 1.06 1.06 1.91-1.91-1.06-1.06zm-.85 1.91l-1.15-1.15-1.06 1.06 1.15 1.15 1.06-1.06z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ApplicationSubmitted;
