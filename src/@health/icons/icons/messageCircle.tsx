import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const MessageCircle = forwardRef(
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
          d="M3 21.79c-.21 0-.41-.08-.56-.23-.2-.2-.28-.48-.21-.75l1.08-4.3a9.808 9.808 0 01-1.1-4.5c0-5.41 4.39-9.8 9.79-9.8S21.79 6.6 21.79 12 17.4 21.79 12 21.79c-1.56 0-3.11-.38-4.5-1.1l-4.31 1.08c-.06.02-.13.02-.19.02zm4.6-2.74c.14 0 .27.03.39.1 1.22.69 2.61 1.05 4.01 1.05 4.52 0 8.21-3.68 8.21-8.21s-3.69-8.2-8.21-8.2S3.79 7.48 3.79 12c0 1.4.36 2.78 1.05 4.01.1.18.13.38.08.58l-.83 3.32 3.32-.83c.06-.02.13-.02.19-.02z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default MessageCircle;
