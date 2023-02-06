import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ArrowReturn = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <path
          d="M1.93377 5.27983V4.35653H8.14116C8.41104 4.35653 8.65726 4.29025 8.87979 4.15767C9.10233 4.02509 9.27871 3.84754 9.40891 3.625C9.54149 3.40246 9.60778 3.15625 9.60778 2.88636C9.60778 2.61648 9.54149 2.37145 9.40891 2.15128C9.27634 1.92874 9.09878 1.75118 8.87624 1.61861C8.65607 1.48603 8.41104 1.41974 8.14116 1.41974H7.74343V0.5H8.14116C8.5815 0.5 8.98159 0.607718 9.34144 0.823153C9.70129 1.03859 9.98893 1.32623 10.2044 1.68608C10.4198 2.04593 10.5275 2.44602 10.5275 2.88636C10.5275 3.21544 10.4648 3.52438 10.3393 3.81321C10.2162 4.10204 10.0458 4.35653 9.82795 4.5767C9.61014 4.79687 9.35683 4.9697 9.068 5.09517C8.77918 5.21828 8.47023 5.27983 8.14116 5.27983H1.93377ZM4.21715 8.04616L0.989169 4.81818L4.21715 1.5902L4.85281 2.22585L2.25692 4.81818L4.85281 7.41051L4.21715 8.04616Z"
          stroke="#9BA4AB"
          strokeWidth={0.05}
          fill="#9BA4AB"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="scale(2.25)"
        />
      </StyledSVG>
    );
  },
);

export default ArrowReturn;
