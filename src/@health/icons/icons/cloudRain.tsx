import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CloudRain = forwardRef(
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
          d="M9.75 20.75c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-1 2c-.13.26-.4.42-.67.42zm8-1c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l.5-1c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.5 1c-.13.26-.4.42-.67.42zm-4 0c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-1 2c-.13.26-.4.42-.67.42zm-8 0c-.11 0-.23-.03-.33-.08a.763.763 0 01-.34-1.01l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-1 2c-.13.26-.4.42-.67.42zm11.48-5H6.27c-2.22 0-4.02-1.76-4.02-3.93 0-1.77 1.21-3.3 2.9-3.78.38-2.69 2.78-4.79 5.63-4.79 2.47 0 4.64 1.59 5.39 3.81.34-.08.7-.12 1.07-.12 2.49 0 4.52 1.98 4.52 4.41s-2.03 4.41-4.52 4.41zm-6.46-11c-2.25 0-4.12 1.77-4.18 3.93 0 .37-.29.68-.66.72-1.25.15-2.19 1.19-2.19 2.42 0 1.34 1.13 2.43 2.52 2.43h10.96c1.66 0 3.02-1.3 3.02-2.91s-1.35-2.91-3.02-2.91c-.47 0-.9.09-1.28.27-.21.1-.46.1-.67-.01a.724.724 0 01-.39-.55c-.3-1.94-2.07-3.4-4.12-3.4z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CloudRain;
