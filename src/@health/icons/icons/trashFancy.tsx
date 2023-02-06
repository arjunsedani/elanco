import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TrashFancy = forwardRef(
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
          d="M15.54 21.75H8.46c-.76 0-1.48-.28-2.04-.8s-.9-1.22-.95-1.97L4.56 7.12H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.31v-1.5c0-.5.19-.97.55-1.33.35-.35.83-.55 1.33-.55h5.62c.5 0 .97.19 1.33.55.35.35.55.82.55 1.33v1.5H20c.41 0 .75.34.75.75s-.34.75-.75.75h-.56l-.91 11.86c-.06.76-.4 1.46-.95 1.97-.56.52-1.28.8-2.04.8zM6.06 7.12l.9 11.74a1.507 1.507 0 001.5 1.39h7.08a1.507 1.507 0 001.5-1.39l.9-11.74H6.06zm2.75-1.5h6.38v-1.5c0-.1-.04-.19-.11-.27a.386.386 0 00-.27-.11H9.19c-.1 0-.2.04-.27.11s-.11.17-.11.27v1.5zm5.16 11.62c-.41 0-.75-.34-.75-.75v-5.62c0-.41.34-.75.75-.75s.75.34.75.75v5.62c0 .41-.34.75-.75.75zm-3.94 0c-.41 0-.75-.34-.75-.75v-5.62c0-.41.34-.75.75-.75s.75.34.75.75v5.62c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TrashFancy;
