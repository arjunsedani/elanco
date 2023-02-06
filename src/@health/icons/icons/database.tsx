import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Database = forwardRef(
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
          d="M12 21.25c-3.85 0-7.75-1.12-7.75-3.25V6c0-2.13 3.9-3.25 7.75-3.25S19.75 3.87 19.75 6v12c0 2.13-3.9 3.25-7.75 3.25zM5.75 16v2c0 .52 2.13 1.75 6.25 1.75s6.25-1.23 6.25-1.75v-2c-2.97 1.65-9.53 1.65-12.5 0zm0-2c0 .52 2.13 1.75 6.25 1.75s6.25-1.23 6.25-1.75v-2c-2.97 1.65-9.53 1.65-12.5 0v2zm0-4c0 .52 2.13 1.75 6.25 1.75s6.25-1.23 6.25-1.75V8c-2.97 1.65-9.53 1.65-12.5 0v2zm0-4c0 .52 2.13 1.75 6.25 1.75S18.25 6.52 18.25 6 16.12 4.25 12 4.25 5.75 5.48 5.75 6z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Database;
