import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Digistore = forwardRef(
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
          d="M17.84 21.75H6.16c-.76 0-1.5-.32-2.02-.88s-.78-1.32-.73-2.08l.76-9.92c.07-.91.84-1.62 1.74-1.62h1.32V7c0-2.62 2.13-4.75 4.75-4.75S16.73 4.38 16.73 7v.25h1.32c.91 0 1.67.71 1.75 1.62l.76 9.92c.06.76-.21 1.52-.72 2.08-.52.56-1.25.88-2.02.88zm-11.91-13c-.13 0-.24.1-.25.23l-.76 9.92c-.03.35.09.69.33.95.24.26.56.4.92.4h11.68c.35 0 .68-.14.92-.4s.36-.59.33-.95l-.76-9.92c0-.13-.12-.23-.25-.23H5.93zm2.82-1.5h6.5V7c0-1.79-1.46-3.25-3.25-3.25S8.75 5.21 8.75 7v.25z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Digistore;
