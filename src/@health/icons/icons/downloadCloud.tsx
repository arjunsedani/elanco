import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const DownloadCloud = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M12,21.75c-.19,0-.38-.07-.53-.22l-4-4c-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0l3.47,3.47,3.47-3.47c.29-.29,.77-.29,1.06,0s.29,.77,0,1.06l-4,4c-.15,.15-.34,.22-.53,.22Z"
          fill="#9BA4AB"
        />
        <path
          d="M12,21.75c-.41,0-.75-.34-.75-.75V12c0-.41,.34-.75,.75-.75s.75,.34,.75,.75v9c0,.41-.34,.75-.75,.75Z"
          fill="#9BA4AB"
        />
        <path
          d="M20.88,18.84c-.24,0-.47-.11-.61-.32-.24-.34-.16-.81,.18-1.04,.75-.52,1.29-1.26,1.58-2.12,.29-.86,.3-1.78,.03-2.64-.28-.87-.81-1.61-1.54-2.15-.72-.53-1.61-.82-2.51-.82h-1.26c-.34,0-.64-.23-.73-.56-.27-1.06-.79-2.05-1.49-2.89-.71-.83-1.6-1.5-2.6-1.94-1-.44-2.1-.65-3.19-.61-1.09,.04-2.17,.33-3.14,.84-.96,.51-1.81,1.25-2.46,2.13-.64,.88-1.09,1.91-1.28,2.99-.19,1.07-.14,2.19,.15,3.24,.29,1.05,.83,2.04,1.55,2.85,.27,.31,.25,.78-.06,1.06-.31,.27-.78,.25-1.06-.06-.87-.98-1.52-2.17-1.87-3.44-.35-1.27-.42-2.62-.18-3.92s.77-2.54,1.55-3.6c.78-1.06,1.8-1.95,2.96-2.57,1.16-.62,2.47-.97,3.79-1.01,1.32-.05,2.65,.21,3.85,.74,1.2,.53,2.29,1.34,3.14,2.35,.72,.86,1.28,1.85,1.64,2.92h.7c1.21,0,2.42,.39,3.39,1.11,.99,.73,1.71,1.73,2.09,2.9,.37,1.17,.36,2.41-.03,3.58-.39,1.17-1.13,2.16-2.14,2.86-.13,.09-.28,.14-.43,.14Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default DownloadCloud;
