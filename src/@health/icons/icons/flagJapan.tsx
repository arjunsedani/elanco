import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Japan = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_878:107988)">
        <path d="M24 5H0V18.5H24V5Z" fill="white" />
        <path
          d="M12.0002 15.8002C14.2369 15.8002 16.0502 13.9869 16.0502 11.7502C16.0502 9.51344 14.2369 7.7002 12.0002 7.7002C9.76344 7.7002 7.9502 9.51344 7.9502 11.7502C7.9502 13.9869 9.76344 15.8002 12.0002 15.8002Z"
          fill="#BC002D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 5.3C1.06112 5.3 0.3 6.06112 0.3 7V16.5C0.3 17.4389 1.06112 18.2 2 18.2H22C22.9389 18.2 23.7 17.4389 23.7 16.5V7C23.7 6.06112 22.9389 5.3 22 5.3H2ZM0 7C0 5.89543 0.89543 5 2 5H22C23.1046 5 24 5.89543 24 7V16.5C24 17.6046 23.1046 18.5 22 18.5H2C0.89543 18.5 0 17.6046 0 16.5V7Z"
          fill="#C7CFD5"
        />
      </g>
      <defs>
        <clipPath id="clip0_878:107988">
          <rect y="5" width="24" height="13.5" rx="2" fill="white" />
        </clipPath>
      </defs>
    </StyledSVG>
  );
});

export default Japan;
