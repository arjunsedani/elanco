import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CloudLightning = forwardRef(
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
          d="M12.3 21.75c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l.96-1.92H10.2c-.26 0-.5-.13-.64-.36a.733.733 0 01-.03-.73l1.5-3c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.96 1.92h2.39c.26 0 .5.13.64.36.14.22.15.5.03.73l-1.5 3c-.13.26-.4.42-.67.42zm5.22-6h-1.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.54c1.78 0 3.23-1.45 3.23-3.24s-1.45-3.24-3.23-3.24c-.5 0-.96.1-1.36.3-.21.11-.47.11-.68 0a.78.78 0 01-.4-.55 4.467 4.467 0 00-4.39-3.77c-2.39 0-4.39 1.96-4.45 4.36 0 .37-.29.68-.65.73-1.34.17-2.35 1.33-2.35 2.7 0 .73.28 1.41.79 1.92s1.19.79 1.91.79H7c.41 0 .75.34.75.75s-.34.75-.75.75H5.94c-1.12 0-2.18-.44-2.97-1.24s-1.23-1.85-1.23-2.98c0-1.91 1.27-3.56 3.05-4.06.38-2.93 2.91-5.22 5.9-5.22 2.61 0 4.9 1.74 5.67 4.16a4.735 4.735 0 015.88 4.6c0 2.62-2.12 4.74-4.73 4.74z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CloudLightning;
