import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Tv = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19.02 21.75c-.08 0-.16-.01-.24-.04-3.73-1.28-9.81-1.29-13.54 0-.39.14-.82-.07-.95-.46s.07-.82.46-.95c4-1.38 10.52-1.38 14.52 0 .39.13.6.56.46.95a.76.76 0 01-.71.51zm.62-4.17H4.37c-1.52 0-2.75-1.23-2.75-2.75V5.06c0-1.52 1.23-2.75 2.75-2.75h15.26c1.52 0 2.75 1.23 2.75 2.75v9.77c0 .73-.29 1.42-.8 1.94-.52.52-1.21.8-1.94.8zM4.37 3.81c-.69 0-1.25.56-1.25 1.25v9.77c0 .69.56 1.25 1.25 1.25h15.26c.33 0 .65-.13.88-.37.24-.24.37-.55.37-.88V5.06c0-.69-.56-1.25-1.25-1.25H4.37z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Tv;
