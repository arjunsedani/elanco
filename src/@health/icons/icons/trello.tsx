import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Trello = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16.5 21.75h-9c-2.89 0-5.25-2.35-5.25-5.25v-9c0-2.9 2.35-5.25 5.25-5.25h9c2.89 0 5.25 2.35 5.25 5.25v9.01c0 2.89-2.35 5.25-5.25 5.25zm-9-18c-2.07 0-3.75 1.68-3.75 3.75v9c0 2.07 1.68 3.75 3.75 3.75h9.01c2.07 0 3.75-1.68 3.75-3.75v-9c0-2.07-1.68-3.75-3.75-3.75H7.5z"
        fill="#9ba4ab"
      />
      <path
        d="M9.5 17.75h-2c-.96 0-1.75-.79-1.75-1.75V8c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v8c0 .96-.79 1.75-1.75 1.75zm-2-10c-.14 0-.25.11-.25.25v8c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25V8c0-.14-.11-.25-.25-.25h-2zM16.5 13.75h-2c-.96 0-1.75-.79-1.75-1.75V8c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75zm-2-6c-.14 0-.25.11-.25.25v4c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25V8c0-.14-.11-.25-.25-.25h-2z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Trello;
