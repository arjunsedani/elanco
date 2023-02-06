import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DigiPortfolio = forwardRef(
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
          d="M10 3zm4 0zm2 4v.75c.41 0 .75-.34.75-.75H16zM8 7h-.75c0 .41.34.75.75.75V7zm-.53 7.47c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l-1.06-1.06zm3.03-1.97l.53-.53a.754.754 0 00-1.06 0l.53.53zM13 15l-.53.53c.29.29.77.29 1.06 0L13 15zm3.53-2.47c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l1.06 1.06zM10 3.75h4v-1.5h-4v1.5zm4 0c.33 0 .65.13.88.37l1.06-1.06A2.75 2.75 0 0014 2.25v1.5zm.88.37c.23.23.37.55.37.88h1.5c0-.73-.29-1.43-.81-1.94l-1.06 1.06zm.37.88v2h1.5V5h-1.5zM16 6.25H8v1.5h8v-1.5zM8.75 7V5h-1.5v2h1.5zm0-2c0-.33.13-.65.37-.88L8.06 3.06A2.75 2.75 0 007.25 5h1.5zm.37-.88c.23-.23.55-.37.88-.37v-1.5c-.73 0-1.43.29-1.94.81l1.06 1.06zM5 7.75h14v-1.5H5v1.5zm14 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zM20.25 9v10h1.5V9h-1.5zm0 10c0 .69-.56 1.25-1.25 1.25v1.5c1.52 0 2.75-1.23 2.75-2.75h-1.5zM19 20.25H5v1.5h14v-1.5zm-14 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zM3.75 19V9h-1.5v10h1.5zm0-10c0-.69.56-1.25 1.25-1.25v-1.5C3.48 6.25 2.25 7.48 2.25 9h1.5zm4.78 6.53l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06zm1.44-2.5l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l3-3-1.06-1.06-3 3 1.06 1.06z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default DigiPortfolio;
