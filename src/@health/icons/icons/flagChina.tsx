import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const China = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_878:107952)">
        <path d="M24 5H0V18.5H24V5Z" fill="#DE2910" />
        <path
          d="M3.37498 6.34961L4.56498 10.0121L1.44873 7.74961H5.30123L2.18498 10.0134L3.37498 6.34961Z"
          fill="#FFDE00"
        />
        <path
          d="M7.01367 5.72852L6.90117 7.00602L6.23992 5.90602L7.42117 6.40727L6.16992 6.69477L7.01367 5.72852Z"
          fill="#FFDE00"
        />
        <path
          d="M8.58383 7.2293L7.98258 8.36305L7.80008 7.0918L8.69383 8.0143L7.42883 7.7943L8.58383 7.2293Z"
          fill="#FFDE00"
        />
        <path
          d="M8.73517 9.49377L7.72517 10.2863L8.07892 9.05127L8.52017 10.2575L7.45642 9.54002L8.73517 9.49377Z"
          fill="#FFDE00"
        />
        <path
          d="M6.98875 10.4424L6.93 11.7249L6.22375 10.6511L7.425 11.1036L6.1875 11.4436L6.98875 10.4424Z"
          fill="#FFDE00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 5.3C1.06112 5.3 0.3 6.06112 0.3 7V16.5C0.3 17.4389 1.06112 18.2 2 18.2H22C22.9389 18.2 23.7 17.4389 23.7 16.5V7C23.7 6.06112 22.9389 5.3 22 5.3H2ZM0 7C0 5.89543 0.89543 5 2 5H22C23.1046 5 24 5.89543 24 7V16.5C24 17.6046 23.1046 18.5 22 18.5H2C0.89543 18.5 0 17.6046 0 16.5V7Z"
          fill="#C7CFD5"
        />
      </g>
      <defs>
        <clipPath id="clip0_878:107952">
          <rect y="5" width="24" height="13.5" rx="2" fill="white" />
        </clipPath>
      </defs>
    </StyledSVG>
  );
});

export default China;
