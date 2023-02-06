import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Sweden = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <g clip-path="url(#clip0)">
          <path d="M1 1H25V14.5H1V1Z" fill="#006AA7" />
          <path
            d="M1 6.4H8.5V1H11.5V6.4H25V9.1H11.5V14.5H8.5V9.1H1V6.4Z"
            fill="#FECC00"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="26"
          height="15.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <path
            d="M1 3C1 1.89543 1.89543 1 3 1H23C24.1046 1 25 1.89543 25 3V12.5C25 13.6046 24.1046 14.5 23 14.5H3C1.89543 14.5 1 13.6046 1 12.5V3Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </StyledSVG>
  );
});

export default Sweden;
