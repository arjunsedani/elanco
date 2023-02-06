import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const SkipBack = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M19,20.75c-.17,0-.33-.06-.47-.16L8.53,12.59c-.18-.15-.28-.36-.28-.59s.1-.44,.28-.59L18.53,3.41c.23-.18,.53-.22,.79-.09,.26,.12,.42,.39,.42,.68V20c0,.29-.17,.55-.42,.68-.1,.05-.21,.07-.32,.07ZM10.2,12l8.05,6.44V5.56l-8.05,6.44Z"
          fill="#9BA4AB"
        />
        <path
          d="M5,19.75c-.41,0-.75-.34-.75-.75V5c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v14c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default SkipBack;
