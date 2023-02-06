import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CashPickUp = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M6.24,22.75s-.03,0-.05,0h-2.19c-.41,0-.75-.33-.75-.75s.34-.75,.75-.75h1.92v-7.79h-1.92c-.41,0-.75-.33-.75-.75s.34-.75,.75-.75h2.22c.31,0,.63,.12,.87,.36,.23,.24,.35,.58,.32,.91v8.3c.03,.27-.09,.61-.32,.85-.22,.23-.53,.36-.85,.36Zm-.32-1.21s0,.04,0,.05v-.05Zm.29-.29h0Zm.02-7.79s.02,0,.03,0h-.03Zm-.31-.28s0,0,0,.02v-.02Z"
          fill="#9BA4AB"
        />
        <path
          d="M6.67,14.08c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h1.05c.12,0,.25-.07,.34-.19l1.71-2.13c.26-.32,.73-.38,1.05-.12,.32,.26,.37,.73,.12,1.05l-1.71,2.13c-.36,.45-.91,.73-1.49,.75h-1.08Z"
          fill="#9BA4AB"
        />
        <path
          d="M17.01,22.74h-5.57c-1.22,0-2.97-.86-5.22-2.57-.33-.25-.4-.72-.14-1.05,.25-.33,.72-.39,1.05-.14,2.69,2.04,3.91,2.26,4.31,2.26h5.57q.54,0,.68-.42c.42-2.12,.72-4.38,.89-6.62-.02,.01-.21-.12-.64-.12h-5.27c-.41,0-.75-.34-.75-.75s.34-.75,.75-.75h5.27c1.41,0,2.14,.84,2.14,1.68-.17,2.36-.49,4.68-.94,6.95-.47,1.42-1.31,1.53-2.13,1.53Z"
          fill="#9BA4AB"
        />
        <path
          d="M10.56,12.93c-.37,0-.69-.27-.74-.64l-1.38-9.63c-.05-.36,.06-.71,.29-.98,.23-.27,.58-.43,.93-.43h6.71c.41,0,.75,.34,.75,.75s-.34,.75-.75,.75h-6.41l1.33,9.32c.06,.41-.23,.79-.64,.85-.04,0-.07,0-.11,0Z"
          fill="#9BA4AB"
        />
        <path
          d="M18.46,14.14s-.07,0-.11,0c-.41-.06-.69-.44-.63-.85l1.17-7.83h-5.45l.78,7.81c.04,.41-.26,.78-.67,.82-.41,.05-.78-.26-.82-.67l-.81-8.14c-.04-.33,.08-.67,.3-.92,.23-.25,.55-.38,.89-.39h6.13c.35,0,.68,.15,.91,.41,.23,.26,.33,.62,.28,.97l-1.23,8.17c-.06,.37-.38,.64-.74,.64ZM13.11,5.45h0Zm6.13,0h0Zm-5.83-.34h0Zm5.53-.01h0Z"
          fill="#9BA4AB"
        />
        <path
          d="M16.02,10.41c-.59,0-1.08-.48-1.08-1.07,0-.56,.42-1.03,.97-1.08,.04,0,.08,0,.13,0,.59,0,1.07,.49,1.07,1.09,0,.59-.48,1.08-1.08,1.08h0Zm0-.67h0Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default CashPickUp;
