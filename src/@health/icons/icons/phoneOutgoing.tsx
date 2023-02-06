import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PhoneOutgoing = forwardRef(
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
          d="M16.07 21.75c-.25 0-.51-.02-.77-.07-2.9-.55-5.85-2.21-8.31-4.67-2.46-2.46-4.12-5.41-4.67-8.31-.25-1.31.15-2.63 1.06-3.54l.65-.65a2.758 2.758 0 013.89 0l1.17 1.17c.89.89.85 2.33-.08 3.27l-.82.82c.56 1.28 1.42 2.52 2.47 3.58 1.06 1.06 2.3 1.92 3.58 2.48l.9-.91c.42-.42.99-.66 1.59-.66.6 0 1.17.23 1.59.66l1.17 1.17a2.758 2.758 0 010 3.89l-.65.65a3.91 3.91 0 01-2.77 1.13zM5.98 5.2c-.33 0-.65.13-.88.37l-.65.65c-.56.56-.8 1.38-.64 2.2.49 2.61 2 5.28 4.25 7.53s4.93 3.76 7.53 4.25c.82.16 1.64-.09 2.2-.64l.65-.65c.49-.49.49-1.28 0-1.77l-1.17-1.17a.75.75 0 00-1.06 0l-.9.9c-.44.44-1.1.57-1.66.32-1.45-.64-2.85-1.61-4.04-2.79-1.19-1.19-2.15-2.58-2.79-4.04-.24-.56-.11-1.22.32-1.66l.82-.82c.36-.36.39-.84.08-1.15L6.87 5.56c-.24-.24-.55-.37-.88-.37zM21 9.75c-.41 0-.75-.34-.75-.75V4.81l-4.72 4.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l4.72-4.72H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.03c.09 0 .18.02.26.06.08.03.16.08.23.15l.02.03c.07.07.12.15.15.23.03.08.05.17.06.26v6.03c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default PhoneOutgoing;
