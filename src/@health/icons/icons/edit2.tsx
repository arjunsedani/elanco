import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Edit2 = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
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
        d="M2,22.75c-.2,0-.39-.08-.53-.22-.19-.19-.26-.47-.19-.73l1.5-5.5c.03-.13,.1-.24,.19-.33L16.47,2.47c.33-.33,.73-.6,1.16-.78,.87-.36,1.86-.36,2.74,0,.44,.18,.83,.44,1.16,.78,.33,.33,.59,.72,.78,1.16,.18,.44,.27,.9,.27,1.37s-.09,.93-.27,1.37c-.18,.44-.44,.83-.78,1.16l-13.5,13.5c-.09,.09-.21,.16-.33,.19l-5.5,1.5c-.06,.02-.13,.03-.2,.03Zm2.17-5.86l-1.1,4.04,4.04-1.1L20.47,6.47c.19-.19,.34-.42,.45-.68,.1-.25,.16-.52,.16-.79s-.05-.54-.16-.8c-.1-.25-.26-.48-.45-.67-.19-.19-.42-.35-.67-.45-.51-.21-1.08-.21-1.59,0-.25,.1-.48,.26-.67,.45L4.17,16.89Z"
        fill="#9BA4AB"
      />
    </StyledSVG>
  );
});

export default Edit2;
