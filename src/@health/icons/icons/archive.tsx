import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Archive = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18.67 21.75H5.33c-1.52 0-2.75-1.23-2.75-2.75V7.7c-.76-.19-1.33-.88-1.33-1.7V4c0-.96.79-1.75 1.75-1.75h18c.96 0 1.75.79 1.75 1.75v2c0 .82-.57 1.51-1.33 1.7V19c0 1.52-1.23 2.75-2.75 2.75zm-14.59-14V19c0 .69.56 1.25 1.25 1.25h13.33c.69 0 1.25-.56 1.25-1.25V7.75H4.08zM3 3.75c-.14 0-.25.11-.25.25v2c0 .14.11.25.25.25h18c.14 0 .25-.11.25-.25V4c0-.14-.11-.25-.25-.25H3zm12 8H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Archive;
