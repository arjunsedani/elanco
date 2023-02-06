import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const VideoOff = forwardRef(
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
        <defs>
          <clipPath id="prefix__a">
            <path fill="none" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            d="M23 23.75c-.19 0-.38-.07-.53-.22l-5.81-5.81c-.12.46-.37.88-.71 1.23-.52.52-1.21.81-1.94.81H3c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94V7c0-.73.29-1.42.81-1.94S2.27 4.25 3 4.25h.19L.47 1.53C.18 1.24.18.76.47.47s.77-.29 1.06 0l22 22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zm-20-18c-.33 0-.65.13-.88.37s-.37.55-.37.88v10c0 .33.13.65.37.88s.55.37.88.37h11c.33 0 .65-.13.88-.37s.37-.55.37-.88v-.69L4.69 5.75H3zm20 12c-.41 0-.75-.34-.75-.75V8.47l-4.81 3.48c-.3.22-.71.18-.97-.08l-1-1a.75.75 0 01-.22-.53V7c0-.33-.13-.65-.37-.88s-.55-.37-.88-.37h-3.34c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H14c.73 0 1.42.29 1.94.81s.81 1.21.81 1.94v3.03l.33.33 5.48-3.97c.23-.16.53-.19.78-.06s.41.39.41.67v10c0 .41-.34.75-.75.75z"
            fill="#9ba4ab"
          />
        </g>
      </StyledSVG>
    );
  },
);

export default VideoOff;
