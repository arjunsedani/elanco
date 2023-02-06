import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Heart = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 20.75c-.72 0-9.75-5.01-9.75-10.99 0-3.14 2.43-6.51 6.05-6.51 1.68 0 2.88.67 3.7 1.39.82-.72 2.02-1.39 3.7-1.39 3.62 0 6.05 3.37 6.05 6.51 0 5.98-9.03 10.99-9.75 10.99zm-3.7-16c-2.72 0-4.55 2.59-4.55 5.01 0 4.47 6.62 8.59 8.25 9.42 1.63-.82 8.25-4.95 8.25-9.42 0-2.42-1.83-5.01-4.55-5.01-1.55 0-2.56.79-3.13 1.45a.78.78 0 01-1.14 0c-.57-.66-1.58-1.45-3.13-1.45z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Heart;
