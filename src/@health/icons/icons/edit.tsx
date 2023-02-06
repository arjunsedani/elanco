import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Edit = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M6.25 21.75H3c-.41 0-.75-.34-.75-.75v-3.25c0-.46.19-.92.51-1.24L16.1 3.18c.33-.33.77-.51 1.24-.51s.91.18 1.24.51l2.25 2.25c.33.33.51.77.51 1.24s-.18.91-.51 1.24L7.49 21.24c-.32.33-.78.51-1.24.51zm-2.5-1.5h2.5c.07 0 .13-.03.18-.07l10.05-10.06-2.6-2.6L3.82 17.57s-.07.11-.07.18v2.5zM14.94 6.46l2.6 2.6 2.22-2.22c.06-.06.07-.14.07-.18s0-.11-.07-.18l-2.25-2.25c-.07-.07-.18-.07-.18-.07-.04 0-.11 0-.18.07l-2.22 2.22z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Edit;
