import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Zap = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.91 17.73a1.294 1.294 0 01-.99-.49c-.16-.21-.25-.45-.26-.71V14H8.5c-.23 0-.45-.07-.65-.18-.19-.12-.35-.28-.45-.48-.1-.2-.15-.42-.14-.64 0-.22.08-.44.2-.63l3.6-5.27.02-.03c.16-.21.37-.36.61-.44.25-.08.51-.08.76 0s.46.23.62.43c.16.21.25.45.26.71V10h2.16c.23 0 .45.07.64.18.19.12.35.28.45.48a1.267 1.267 0 01-.06 1.27l-3.61 5.27a1.264 1.264 0 01-1.02.53zm-.5-5.23c.41 0 .75.34.75.75v2.42l2.86-4.18h-2.43c-.41 0-.75-.34-.75-.75V8.32L8.98 12.5h2.43z"
        fill="#9ba4ab"
      />
      <path
        d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Zap;
