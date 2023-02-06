import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ShieldOff = forwardRef(
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
          d="M12 21.75c-.24 0-.47-.03-.71-.1-4.47-1.26-7.71-5.47-7.71-10V7.04c0-.72.29-1.39.77-1.88L2.72 3.53c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l17.01 17c.29.29.29.77 0 1.06s-.77.29-1.06 0L17.7 18.5c-1.35 1.51-3.1 2.62-5 3.15-.23.07-.46.1-.7.1zM5.42 6.22c-.21.21-.33.51-.33.82v4.61c0 3.87 2.79 7.48 6.62 8.56.19.05.4.05.58 0 1.65-.47 3.17-1.44 4.35-2.77L5.42 6.22zm13.8 8.96a.62.62 0 01-.23-.04.754.754 0 01-.48-.95c.28-.85.42-1.71.42-2.54V7.04c0-.48-.28-.9-.72-1.08l-4.66-1.91c-.99-.4-2.07-.4-3.06 0l-1.26.52a.754.754 0 01-.98-.41c-.16-.38.03-.82.41-.98l1.26-.52c1.35-.55 2.84-.55 4.2 0l4.66 1.91c1.01.41 1.66 1.38 1.66 2.47v4.61c0 1-.16 2.01-.49 3.01-.1.32-.4.52-.71.52z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ShieldOff;
