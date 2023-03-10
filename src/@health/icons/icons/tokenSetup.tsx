import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TokenSetup = forwardRef(
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
          d="M19 8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM5 7.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zM7.95 15zm4 0h.75v-.03l-.75.03zm4 0zm-8-3zm4 0h.75v-.03l-.75.03zm4 0zm-8 6zm4 0h.75v-.03l-.75.03zm4 0zm1.11 2.25H6.93v1.5h10.13v-1.5zm-10.13 0c-.65 0-1.18-.53-1.18-1.18h-1.5c0 1.48 1.2 2.68 2.68 2.68v-1.5zm-1.18-1.18V4.93h-1.5v14.13h1.5zm0-14.13c0-.65.53-1.18 1.18-1.18v-1.5a2.68 2.68 0 00-2.68 2.68h1.5zm1.18-1.18h10.13v-1.5H6.93v1.5zm10.13 0c.65 0 1.18.53 1.18 1.18h1.5c0-1.48-1.2-2.68-2.68-2.68v1.5zm1.18 1.18v14.13h1.5V4.93h-1.5zm0 14.13c0 .65-.53 1.18-1.18 1.18v1.5c1.48 0 2.68-1.2 2.68-2.68h-1.5zm.75-11.82H5v1.5h14v-1.5zM8 15.7c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8H7.3zm.7-.7c.39 0 .7.31.7.7H7.2c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5zm3.3.7c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.67c.02.43-.34.73-.7.73v-1.5c-.42 0-.82.34-.8.83l1.5-.05zm3.3.72c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5zM8 12.69c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8H7.3zm.7-.7c.39 0 .7.31.7.7H7.2c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5zm3.3.7c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.67c.02.43-.34.73-.7.73v-1.5c-.42 0-.82.34-.8.83l1.5-.05zm3.3.72c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5zM8 18.68c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8H7.3zm.7-.7c.39 0 .7.31.7.7H7.2c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5zm3.3.7c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.67c.02.43-.34.73-.7.73v-1.5c-.42 0-.82.34-.8.83l1.5-.05zm3.3.72c-.39 0-.7-.31-.7-.7h1.5c0-.44-.36-.8-.8-.8v1.5zm-.7-.7c0-.39.31-.7.7-.7v1.5c.44 0 .8-.36.8-.8h-1.5zm.7-.7c.39 0 .7.31.7.7h-1.5c0 .44.36.8.8.8v-1.5zm.7.7c0 .38-.3.7-.7.7v-1.5c-.45 0-.8.37-.8.8h1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TokenSetup;
