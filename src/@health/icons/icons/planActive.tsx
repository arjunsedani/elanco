import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const PlanActive = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM8.42198 7.08622L18.3974 11.4929C18.7908 11.6672 19.0311 12.071 18.9967 12.4999C18.9624 12.9287 18.6609 13.2891 18.2449 13.3986L14.5016 14.384C14.4445 14.3991 14.3999 14.4437 14.3849 14.501L13.3994 18.2456C13.2896 18.6615 12.929 18.9628 12.5002 18.9968C12.0713 19.0308 11.6677 18.7903 11.4936 18.3966L7.08566 8.42059C6.9177 8.03527 7.00254 7.58969 7.29814 7.29525C7.59377 7.00078 8.03971 6.91772 8.42198 7.08622Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default PlanActive;
