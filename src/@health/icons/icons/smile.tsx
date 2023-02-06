import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Smile = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25zm0 14c-2.47 0-3.97-1.47-4.03-1.53-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0c.04.04 1.14 1.09 2.97 1.09s2.93-1.05 2.97-1.1c.29-.29.77-.28 1.06 0 .29.29.29.76 0 1.06-.06.06-1.56 1.53-4.03 1.53zm3.33-7c-.55 0-1-.45-1-1 0-.26.1-.51.29-.7a1 1 0 01.71-.3c.55 0 1 .45 1 1s-.45 1-1 1zm0-1.5c-.28 0-.5.22-.5.5 0 .41.57.64.85.35a.493.493 0 00-.35-.85zm-6.69 1.5a1.003 1.003 0 01-.71-1.71 1.003 1.003 0 011.71.71c0 .55-.45 1-1 1zm0-1.5c-.28 0-.5.22-.5.5 0 .41.57.64.85.35a.493.493 0 00-.35-.85z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Smile;
