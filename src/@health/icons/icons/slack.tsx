import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Slack = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <g fill="#9ba4ab" clipPath="url(#prefix__a)">
        <path d="M19.65 16.35h-4.5a2.1 2.1 0 110-4.2h4.5a2.1 2.1 0 110 4.2zm-4.5-2.7c-.33 0-.6.27-.6.6s.27.6.6.6h4.5c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-4.5zM15.15 21.75a2.1 2.1 0 01-2.1-2.1V18.3c0-.41.34-.75.75-.75h1.35a2.1 2.1 0 110 4.2zm-.6-2.7v.6c0 .33.27.6.6.6s.6-.27.6-.6-.27-.6-.6-.6h-.6zM14.25 10.95a2.1 2.1 0 01-2.1-2.1v-4.5a2.1 2.1 0 114.2 0v4.5a2.1 2.1 0 01-2.1 2.1zm0-7.2c-.33 0-.6.27-.6.6v4.5c0 .33.27.6.6.6s.6-.27.6-.6v-4.5c0-.33-.27-.6-.6-.6zM19.65 10.95H18.3c-.41 0-.75-.34-.75-.75V8.85a2.1 2.1 0 112.1 2.1zm-.6-1.5h.6c.33 0 .6-.27.6-.6s-.27-.6-.6-.6-.6.27-.6.6v.6zM8.85 11.85h-4.5a2.1 2.1 0 110-4.2h4.5a2.1 2.1 0 110 4.2zm-4.5-2.7c-.33 0-.6.27-.6.6s.27.6.6.6h4.5c.33 0 .6-.27.6-.6s-.27-.6-.6-.6h-4.5zM10.2 6.45H8.85a2.1 2.1 0 112.1-2.1V5.7c0 .41-.34.75-.75.75zm-1.35-2.7c-.33 0-.6.27-.6.6s.27.6.6.6h.6v-.6c0-.33-.27-.6-.6-.6zM9.75 21.75a2.1 2.1 0 01-2.1-2.1v-4.5a2.1 2.1 0 114.2 0v4.5a2.1 2.1 0 01-2.1 2.1zm0-7.2c-.33 0-.6.27-.6.6v4.5c0 .33.27.6.6.6s.6-.27.6-.6v-4.5c0-.33-.27-.6-.6-.6zM4.35 17.25a2.1 2.1 0 110-4.2H5.7c.41 0 .75.34.75.75v1.35a2.1 2.1 0 01-2.1 2.1zm0-2.7c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6v-.6h-.6z" />
      </g>
    </StyledSVG>
  );
});

export default Slack;
