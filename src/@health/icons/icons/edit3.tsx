import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Edit3 = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
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
        d="M21,20.75H12c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h9c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75Z"
        fill="#9BA4AB"
      />
      <path
        d="M3,20.75c-.2,0-.39-.08-.53-.22-.19-.19-.26-.46-.2-.71l1-4c.03-.13,.1-.25,.2-.35L15.97,2.97c.8-.8,2.08-1.06,3.13-.62,.35,.14,.66,.35,.93,.62,.27,.27,.48,.58,.62,.93,.14,.35,.22,.72,.22,1.1s-.07,.75-.22,1.1c-.15,.35-.36,.66-.62,.93L7.53,19.53c-.1,.1-.22,.16-.35,.2l-4,1c-.06,.01-.12,.02-.18,.02Zm1.68-4.37l-.65,2.58,2.59-.65L18.97,5.97c.13-.13,.23-.28,.3-.44,.07-.17,.1-.34,.1-.53s-.04-.36-.1-.52c-.07-.17-.17-.32-.3-.44-.13-.13-.28-.23-.44-.3-.5-.21-1.11-.09-1.5,.3L4.68,16.38Z"
        fill="#9BA4AB"
      />
    </StyledSVG>
  );
});

export default Edit3;
