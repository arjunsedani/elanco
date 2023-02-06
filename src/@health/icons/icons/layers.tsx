import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Layers = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.99 21.75c-.1 0-.21-.02-.31-.07l-8.99-4.01a.747.747 0 01-.38-.99c.17-.38.61-.55.99-.38l8.68 3.88 8.7-3.88c.38-.17.82 0 .99.38.17.38 0 .82-.38.99l-9.01 4.02c-.1.04-.2.07-.31.07zm0-4.98c-.1 0-.21-.02-.31-.07l-8.99-4.02a.747.747 0 01-.38-.99c.17-.38.61-.55.99-.38l8.68 3.88 8.7-3.88c.38-.17.82 0 .99.38.17.38 0 .82-.38.99l-9.01 4.02c-.1.04-.2.07-.31.07zm0-4.97c-.1 0-.21-.02-.31-.07L2.69 7.71c-.27-.12-.44-.39-.44-.69s.17-.56.44-.68l9.02-4.03c.19-.09.42-.09.61 0l8.99 4.02c.27.12.44.39.44.69s-.17.56-.44.68l-9.01 4.02c-.1.04-.2.06-.31.06zM4.84 7.02l7.15 3.2 7.18-3.2-7.15-3.2-7.18 3.2z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Layers;
