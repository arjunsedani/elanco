import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DeleteBankOrganization = forwardRef(
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
          d="M6.5 21.75c-2.9 0-5.25-2.36-5.25-5.25s2.35-5.25 5.25-5.25 5.25 2.36 5.25 5.25-2.35 5.25-5.25 5.25zm0-9c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75zm15.5 8h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.25v-.07l-.71-1.43H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.89V9.68H4c-.41 0-.75-.34-.75-.75V5.92c0-.3.18-.57.45-.69l9-3.92a.78.78 0 01.6 0l9 3.93c.27.12.45.39.45.69v3.01c0 .41-.34.75-.75.75h-1.25v6.57H21c.28 0 .54.16.67.42l1 2c.05.1.08.22.08.33v1c0 .41-.34.75-.75.75zm-5.61-4.5h2.86V9.68h-2.86v6.57zM4.75 8.18h16.5V6.42L13 2.82l-8.25 3.6v1.76zm2.84 10.16c-.19 0-.38-.07-.53-.22l-.56-.56-.56.56c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.56-.56-.56-.56c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.56.56.56-.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.56.56.56.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default DeleteBankOrganization;
