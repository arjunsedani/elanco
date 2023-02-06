import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const searchIcon = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 7.4935C1.5 4.18336 4.18333 1.5 7.49334 1.5C10.8034 1.5 13.4867 4.18336 13.4867 7.4935C13.4867 9.19525 12.7785 10.7303 11.6386 11.8222C10.5614 12.8541 9.10208 13.487 7.49334 13.487C4.18333 13.487 1.5 10.8036 1.5 7.4935ZM7.49334 0C3.35487 0 0 3.35497 0 7.4935C0 11.632 3.35487 14.987 7.49334 14.987C9.29215 14.987 10.944 14.3524 12.2353 13.2959L14.7189 15.7795C15.0118 16.0724 15.4867 16.0724 15.7796 15.7796C16.0725 15.4867 16.0725 15.0118 15.7796 14.7189L13.2959 12.2352C14.3522 10.9439 14.9867 9.29235 14.9867 7.4935C14.9867 3.35497 11.6318 0 7.49334 0Z"
          fill="#858F96"
        />
      </StyledSVG>
    );
  },
);

export default searchIcon;
