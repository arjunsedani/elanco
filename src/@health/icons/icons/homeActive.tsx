import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const HomeActive = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M12.4187 1.13867L22.381 8.6544L22.4339 8.6986C22.7704 9.00997 22.973 9.43977 23 9.93638V21.419C22.9964 22.2913 22.2896 22.9973 21.4151 23H15.4375C15.0578 23 14.75 22.6922 14.75 22.3126V17.5007C14.75 15.9821 13.5188 14.751 12 14.751C10.4812 14.751 9.25 15.9821 9.25 17.5007V22.3098C9.25 22.6895 8.9422 22.9972 8.5625 22.9972L2.5819 22.9972C1.70935 22.9946 1.00267 22.288 1 21.4134L1.00105 9.89843C1.0264 9.43995 1.22934 9.00936 1.61924 8.65422L11.5907 1.13849C11.8358 0.953769 12.1737 0.953844 12.4187 1.13867Z"
          fill="white"
        />
      </StyledSVG>
    );
  },
);

export default HomeActive;
