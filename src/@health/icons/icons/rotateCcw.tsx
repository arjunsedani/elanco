import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RotateCcw = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        useFillColorOnly
        {...props}
      >
        <path
          d="M7,10.75H1c-.41,0-.75-.34-.75-.75V4c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v5.25H7c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M12.01,21.76c-1.91,0-3.82-.57-5.41-1.63-1.75-1.16-3.1-2.89-3.79-4.88-.14-.39,.07-.82,.46-.96,.39-.14,.82,.07,.96,.46,.59,1.68,1.73,3.14,3.21,4.13s3.27,1.47,5.05,1.37c1.77-.1,3.5-.79,4.86-1.94,1.36-1.15,2.32-2.73,2.71-4.47,.39-1.73,.21-3.58-.51-5.2-.73-1.62-1.98-2.99-3.54-3.85-1.56-.86-3.38-1.2-5.14-.95-1.76,.25-3.42,1.08-4.68,2.33L1.51,10.55c-.3,.28-.78,.27-1.06-.03-.28-.3-.27-.78,.03-1.06L5.13,5.09c1.47-1.47,3.43-2.45,5.51-2.74,2.08-.29,4.24,.11,6.08,1.12,1.84,1.02,3.32,2.63,4.18,4.55,.86,1.92,1.07,4.1,.61,6.15-.47,2.05-1.61,3.92-3.21,5.28-1.6,1.36-3.64,2.17-5.74,2.29-.18,.01-.37,.02-.55,.02Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default RotateCcw;
