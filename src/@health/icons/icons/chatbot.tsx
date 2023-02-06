import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Chatbot = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 20.75a.73.73 0 01-.35-.09l-3.17-1.69H5.78c-1.39 0-2.53-1.13-2.53-2.53V5.78c0-1.39 1.13-2.53 2.53-2.53h12.44c1.39 0 2.53 1.13 2.53 2.53V20a.751.751 0 01-.75.75zm-14.22-16c-.57 0-1.03.46-1.03 1.03v10.67c0 .57.46 1.03 1.03 1.03h10.89c.12 0 .24.03.35.09l2.23 1.19V5.78c0-.57-.46-1.03-1.03-1.03H5.78zm8.22 7c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75zm-4 0c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Chatbot;
