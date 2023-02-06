import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Codepen = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          d="M12 21.75a.833.833 0 01-.35-.08c-.03-.01-.05-.03-.08-.05l-8.98-5.99s-.09-.06-.13-.1a.594.594 0 01-.13-.18c-.02-.04-.04-.09-.06-.14a.761.761 0 01-.03-.21V9.02c0-.09.01-.16.03-.23s.03-.09.06-.14c.03-.06.08-.12.13-.18.04-.04.08-.07.13-.1l8.98-5.98s.05-.03.08-.05c.04-.02.09-.04.14-.06a.833.833 0 01.57.05c.03.01.05.03.08.05l8.98 5.99s.09.06.13.1c.05.05.1.11.13.18.02.04.04.09.06.14.02.07.03.14.03.22v5.98c0 .08-.01.16-.03.23s-.03.1-.06.14c-.03.06-.08.12-.13.18-.04.04-.08.07-.13.1l-8.98 5.99s-.05.03-.08.05c-.04.02-.09.04-.14.06a.78.78 0 01-.22.03zm.75-6.32v4.17l6.91-4.61-3.12-2.09-3.79 2.53zm-8.41-.44l6.91 4.61v-4.17L7.46 12.9l-3.12 2.09zM8.81 12L12 14.13 15.19 12 12 9.87 8.81 12zm9.07 0l2.38 1.59v-3.18L17.88 12zM3.73 10.41v3.18L6.11 12l-2.38-1.59zm9.01-1.85l3.79 2.53L19.65 9l-6.91-4.61v4.16zM4.33 9l3.12 2.09 3.79-2.53V4.4L4.33 9.01z"
          fill="#9ba4ab"
        />
      </g>
    </StyledSVG>
  );
});

export default Codepen;
