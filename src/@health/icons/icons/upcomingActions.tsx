import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const UpcomingActions = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M22.0227 12C22.0227 12.2984 21.9042 12.5845 21.6932 12.7955L16.8182 17.6704C16.3789 18.1098 15.6665 18.1098 15.2272 17.6704C14.7879 17.2311 14.7879 16.5189 15.2272 16.0795L18.1817 13.125H11.1477C10.5264 13.125 10.0227 12.6213 10.0227 12C10.0227 11.3787 10.5264 10.875 11.1477 10.875H18.1817L15.2272 7.92049C14.7879 7.48116 14.7879 6.76884 15.2272 6.3295C15.6665 5.89017 16.3789 5.89017 16.8182 6.3295L21.6932 11.2045C21.9042 11.4155 22.0227 11.7016 22.0227 12Z"
          fill="#9BA4AB"
        />
        <path
          d="M4.24976 11.9971C4.24976 12.6152 3.7487 13.1162 3.13062 13.1162C2.51253 13.1162 2.01147 12.6152 2.01147 11.9971C2.01147 11.379 2.51253 10.8779 3.13062 10.8779C3.7487 10.8779 4.24976 11.379 4.24976 11.9971Z"
          fill="#9BA4AB"
        />
        <path
          d="M5.51831 11.9971C5.51831 11.379 6.01937 10.8779 6.63745 10.8779H7.37225C7.99034 10.8779 8.49139 11.379 8.49139 11.9971C8.49139 12.6152 7.99034 13.1162 7.37225 13.1162H6.63745C6.01937 13.1162 5.51831 12.6152 5.51831 11.9971Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default UpcomingActions;
