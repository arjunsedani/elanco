import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Star = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17.87 21.85a.73.73 0 01-.35-.09L12 18.84l-5.52 2.92c-.25.13-.56.11-.79-.06a.747.747 0 01-.3-.73l1.06-6.2-4.48-4.38a.749.749 0 01.41-1.28l6.17-.91 2.76-5.64c.13-.26.39-.42.67-.42.29 0 .55.16.67.42l2.76 5.64 6.17.91c.28.04.52.24.6.51.09.27.02.57-.19.77l-4.47 4.39 1.06 6.2c.05.28-.07.57-.3.73-.13.09-.28.14-.44.14zM12 17.24c.12 0 .24.03.35.09l4.52 2.4-.87-5.08c-.04-.24.04-.49.21-.66l3.67-3.6-5.07-.75a.747.747 0 01-.56-.41l-2.26-4.62-2.26 4.62a.74.74 0 01-.56.41l-5.07.75 3.67 3.6c.18.17.26.42.21.66l-.87 5.08 4.52-2.4a.73.73 0 01.35-.09z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Star;
