import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CloseCircle = forwardRef(
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
          d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25zm2.83 11.83c-.19 0-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l2.3-2.3-2.3-2.3c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.3 2.3 2.3 2.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CloseCircle;
