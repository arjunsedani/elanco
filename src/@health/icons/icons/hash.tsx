import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Hash = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16 21.75H8c-3.17 0-5.75-2.58-5.75-5.75V8c0-3.17 2.58-5.75 5.75-5.75h8c3.17 0 5.75 2.58 5.75 5.75v8c0 3.17-2.58 5.75-5.75 5.75zm-8-18A4.26 4.26 0 003.75 8v8A4.26 4.26 0 008 20.25h8A4.26 4.26 0 0020.25 16V8A4.26 4.26 0 0016 3.75H8zm5.15 12.45h-.12a.76.76 0 01-.62-.86l.15-.88h-1.93l-.19 1.12c-.07.41-.46.69-.86.62a.753.753 0 01-.62-.86l.15-.88H8.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.16l.32-1.9h-.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.12l.19-1.12a.76.76 0 01.86-.62c.41.07.69.45.62.86l-.15.88h1.93l.19-1.12c.07-.41.45-.68.86-.62.41.07.68.45.62.86l-.15.88h.91c.41 0 .75.34.75.75s-.34.75-.75.75h-1.16l-.32 1.9h.87c.41 0 .75.34.75.75s-.34.75-.75.75h-1.12l-.19 1.12a.75.75 0 01-.74.63zm-2.27-3.25h1.93l.32-1.9H11.2l-.32 1.9z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Hash;
