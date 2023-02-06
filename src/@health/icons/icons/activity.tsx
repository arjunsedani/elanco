import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Activity = forwardRef(
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
          d="M14.7 20.88a.68.68 0 01-.64-.46L9.3 6.13l-2.06 6.18c-.09.28-.35.46-.64.46H3a.67.67 0 010-1.34h3.11l2.55-7.64c.09-.28.35-.46.64-.46s.55.19.64.46l4.76 14.28 2.06-6.18c.09-.28.35-.46.64-.46H21a.67.67 0 010 1.34h-3.11l-2.55 7.64c-.09.28-.35.46-.64.46z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Activity;
