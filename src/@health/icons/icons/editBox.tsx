import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const EditBox = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 21.75H5c-1.52 0-2.75-1.23-2.75-2.75V5c0-1.52 1.23-2.75 2.75-2.75h8c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 1.52-1.23 2.75-2.75 2.75zm-9.17-4H7c-.41 0-.75-.34-.75-.75v-2.83c0-.2.08-.39.22-.53L17.35 2.76c.33-.33.77-.51 1.24-.51s.91.18 1.24.51l1.41 1.41c.33.33.51.77.51 1.24s-.18.91-.51 1.24L10.36 17.53a.75.75 0 01-.53.22zm-2.08-1.5h1.77l8.33-8.34-1.77-1.77-8.33 8.34v1.77zm9.4-11.16l1.77 1.77 1.26-1.26c.06-.06.07-.14.07-.18s0-.11-.07-.18l-1.41-1.41a.259.259 0 00-.18-.07s-.11 0-.18.07l-1.26 1.26z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default EditBox;
