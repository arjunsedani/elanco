import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const InsuranceCard = forwardRef(
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
          d="M3 7.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm18 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-4 3.98c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-4-1.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm2.35 5.53c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM13 15.26c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm-7-2c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm4 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-1.25-2.74c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-1.5 3.99c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm13 2.43c0 .45-.36.81-.82.81v1.5c1.28 0 2.32-1.03 2.32-2.31h-1.5zm-.82.81H4.57v1.5h14.87v-1.5zm-14.87 0c-.45 0-.82-.36-.82-.81h-1.5c0 1.28 1.04 2.31 2.32 2.31v-1.5zm-.82-.81V5.56h-1.5v12.88h1.5zm0-12.88c0-.45.36-.81.82-.81v-1.5c-1.28 0-2.32 1.03-2.32 2.31h1.5zm.82-.81h14.87v-1.5H4.57v1.5zm14.87 0c.45 0 .82.36.82.81h1.5c0-1.28-1.04-2.31-2.32-2.31v1.5zm.82.81v12.88h1.5V5.56h-1.5zM3 8.75h18v-1.5H3v1.5zm14 2.48h-4v1.5h4v-1.5zm-1.65 4.03H13v1.5h2.35v-1.5zM6 14.76h4v-1.5H6v1.5zm1.25-2.74v3.99h1.5v-3.99h-1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default InsuranceCard;
