import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const HelpCircle = forwardRef(
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
        <g fill="#9ba4ab" clipPath="url(#prefix__a)">
          <path d="M12 13.46a.753.753 0 01-.37-1.41l1.33-.74c.21-.12.38-.29.5-.49s.18-.44.18-.68c-.02-.36-.21-.74-.51-1.01-.31-.27-.69-.41-1.11-.39-.45-.02-.81.1-1.1.32-.3.22-.5.55-.59.91-.09.4-.5.65-.9.56-.4-.09-.65-.5-.56-.9.16-.7.57-1.33 1.14-1.76a3.08 3.08 0 012-.63c.74-.05 1.52.23 2.12.77.61.54.97 1.28 1.02 2.09 0 .55-.13 1.05-.39 1.49-.26.44-.63.8-1.07 1.04l-1.33.74c-.12.06-.24.09-.36.09z" />
          <path d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z" />
          <path d="M11.99 16.8c-.05 0-.1 0-.15-.01a.848.848 0 01-.44-.25.756.756 0 01-.18-.37.874.874 0 01.05-.48c.06-.14.18-.27.31-.35.29-.18.77-.13 1 .12.13.14.22.36.22.55 0 .14-.05.3-.12.42-.08.13-.22.25-.36.31-.1.04-.22.07-.33.07z" />
        </g>
      </StyledSVG>
    );
  },
);

export default HelpCircle;
