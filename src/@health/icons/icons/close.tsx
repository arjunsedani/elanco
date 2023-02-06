import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Close = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 18.75c-.19 0-.38-.07-.53-.22L12 13.06l-5.47 5.47c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06L10.94 12 5.47 6.53c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L12 10.94l5.47-5.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.06 12l5.47 5.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Close;
