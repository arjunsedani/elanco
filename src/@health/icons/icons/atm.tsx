import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Atm = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17.64 21.25H6.36c-1.16 0-2.11-.95-2.11-2.11V4.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v14.89c0 1.16-.95 2.11-2.11 2.11zm-11.89-17v14.89c0 .34.27.61.61.61h11.28c.34 0 .61-.27.61-.61V4.25H5.75zM12 17.75c-.41 0-.75-.34-.75-.75v-.5a2.632 2.632 0 01-2.49-2.45c-.03-.41.29-.77.7-.8.4-.02.77.29.8.7.04.59.53 1.05 1.11 1.05h1.37c.55 0 1-.45 1-1 0-.46-.31-.86-.76-.98l-2.34-.59a2.502 2.502 0 01.6-4.93V7c0-.41.34-.75.75-.75s.75.34.75.75v.5c1.32.06 2.4 1.12 2.49 2.45a.75.75 0 01-.7.8.764.764 0 01-.8-.7C13.69 9.46 13.2 9 12.62 9h-1.37c-.55 0-1 .45-1 1 0 .46.31.86.76.98l2.34.59a2.502 2.502 0 01-.6 4.93v.5c0 .41-.34.75-.75.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Atm;
