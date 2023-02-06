import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Electricity = forwardRef(
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
          d="M11.03 21.75c-.1 0-.19-.02-.28-.06a.76.76 0 01-.46-.8l.85-6.15H4.75a.76.76 0 01-.67-.41c-.13-.25-.1-.56.07-.79l8.22-10.99c.21-.27.57-.38.89-.25.32.13.5.46.46.8l-.85 6.15h6.39c.28 0 .54.16.67.41.13.25.1.56-.07.78l-8.22 11c-.15.19-.37.3-.6.3zm-4.78-8.5H12a.76.76 0 01.75.86l-.57 4.12 5.58-7.47h-5.75c-.22 0-.42-.09-.57-.26s-.21-.38-.18-.6l.57-4.12-5.58 7.47z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Electricity;
