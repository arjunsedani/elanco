import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Voicemail = forwardRef(
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
          d="M22 21.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h19c.41 0 .75.34.75.75s-.34.75-.75.75zm-4-5H5.93a4.75 4.75 0 01-3.29-8.11 4.762 4.762 0 016.72 0c.9.9 1.39 2.09 1.39 3.36s-.46 2.37-1.29 3.25h5.07c-.83-.88-1.29-2.03-1.29-3.25s.49-2.46 1.39-3.36c.9-.9 2.09-1.39 3.36-1.39s2.46.49 3.36 1.39c.9.9 1.39 2.09 1.39 3.36s-.49 2.46-1.39 3.36c-.9.9-2.09 1.39-3.36 1.39zm0-8c-.87 0-1.68.34-2.3.95-.61.61-.95 1.43-.95 2.3s.34 1.68.95 2.3c1.23 1.23 3.37 1.23 4.6 0 .61-.61.95-1.43.95-2.3s-.34-1.68-.95-2.3c-.61-.61-1.43-.95-2.3-.95zm-12 0c-.83 0-1.66.32-2.3.95-.61.61-.95 1.43-.95 2.3s.34 1.68.95 2.3a3.253 3.253 0 004.6 0c.61-.61.95-1.43.95-2.3s-.34-1.68-.95-2.3c-.63-.63-1.47-.95-2.3-.95zm16-5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h19c.41 0 .75.34.75.75s-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Voicemail;
