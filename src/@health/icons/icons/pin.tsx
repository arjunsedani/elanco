import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Pin = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M4 20.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.98-3.98-3.72-3.72c-.21-.21-.35-.46-.43-.74-.07-.28-.07-.58 0-.86.08-.28.23-.53.44-.74.21-.2.47-.35.75-.42l4.95-1.24c.25-.06.47-.22.61-.43l1.98-2.97c.21-.31.49-.58.81-.77.32-.19.68-.31 1.06-.35.37-.03.75 0 1.1.14.35.13.67.33.94.59l4.07 4.07a2.572 2.572 0 01.73 2.04c-.03.37-.16.73-.35 1.05-.19.32-.46.6-.77.81l-2.97 1.98c-.21.14-.37.36-.43.61l-1.24 4.95c-.07.28-.21.54-.42.75s-.46.36-.74.44c-.28.08-.58.08-.86 0-.28-.07-.54-.22-.75-.43L8.5 16.04l-3.98 3.98c-.15.15-.34.22-.53.22zm.79-10.03l8.49 8.49.14.04.1-.1 1.24-4.95c.15-.61.53-1.15 1.05-1.5l2.97-1.98c.13-.08.24-.2.31-.33a.95.95 0 00.14-.43c.01-.15 0-.31-.06-.45a1.07 1.07 0 00-.24-.38l-4.07-4.07c-.11-.11-.24-.19-.38-.24-.15-.05-.3-.07-.45-.06-.15.02-.3.06-.43.14-.13.08-.24.19-.33.31l-1.98 2.97c-.35.53-.88.9-1.5 1.05L4.84 9.97l-.1.1-.49.67.53-.53z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Pin;
