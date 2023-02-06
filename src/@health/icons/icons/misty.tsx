import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Misty = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M15.52 7.04l-.74.11c.04.24.18.44.4.55.21.11.47.11.68 0l-.33-.67zm-9.49.63l.09.74a.75.75 0 00.66-.72l-.75-.02zm-2.76 3.16zM5 16.76c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm14 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-14 2c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm14 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM17.08 5.95c-.66 0-1.31.14-1.89.43l.67 1.34c.35-.17.76-.27 1.22-.27v-1.5zm-.81.98c-.4-2.65-2.7-4.67-5.46-4.67v1.5c2.01 0 3.68 1.48 3.97 3.4l1.48-.23zm-5.46-4.68c-3.01 0-5.45 2.41-5.53 5.4l1.5.04a4.037 4.037 0 014.03-3.93v-1.5zM5.93 6.92a3.916 3.916 0 00-3.42 3.9h1.5c0-1.26.92-2.26 2.11-2.42l-.19-1.49zm-3.42 3.9c0 2.17 1.76 3.93 3.92 3.93v-1.5c-1.34 0-2.43-1.09-2.42-2.43h-1.5zm3.92 3.93h10.64v-1.5H6.44v1.5zm10.64 0a4.41 4.41 0 004.41-4.41h-1.5c0 1.6-1.3 2.91-2.91 2.91v1.5zm4.41-4.41c0-2.43-1.97-4.4-4.41-4.4v1.5c1.6 0 2.91 1.3 2.91 2.9h1.5zM5 18.25h14v-1.5H5v1.5zm0 3.5h14v-1.5H5v1.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Misty;
