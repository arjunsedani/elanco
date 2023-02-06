import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const BellDuotone = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12 3.71429C9.15968 3.71429 6.85715 6.01682 6.85715 8.85714V9.80309C6.85715 11.4072 6.29475 12.9606 5.26781 14.1929L4.91455 14.6168C3.98408 15.7334 4.77807 17.4286 6.2315 17.4286H17.7685C19.2219 17.4286 20.0159 15.7334 19.0855 14.6168L18.7322 14.1929C17.7053 12.9606 17.1429 11.4072 17.1429 9.80309V8.85714C17.1429 6.01682 14.8403 3.71429 12 3.71429ZM12 3.71429V2"
          stroke="#59656D"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          opacity={0.8}
          d="M14.5714 20.1426C14.1429 21.4283 12.6528 21.8569 11.9999 21.8569C11.1429 21.8569 9.85714 21.4283 9.42857 20.1426"
          stroke="#858F96"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </StyledSVG>
    );
  },
);

export default BellDuotone;
