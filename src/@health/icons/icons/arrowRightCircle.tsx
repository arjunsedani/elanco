import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowRightCircle = forwardRef(
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
          d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25zm1 12c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.72-1.72H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.19l-1.72-1.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3 3c.07.07.13.15.16.24a.717.717 0 010 .58c-.04.09-.09.17-.16.24l-3 3c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ArrowRightCircle;
