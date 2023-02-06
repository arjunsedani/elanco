import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const AlertTriangle = forwardRef(
  (props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
    return (
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ref={ref}
        width="1.5em"
        height="1.5em"
        useFillColorOnly
        {...props}
      >
        <path
          d="M19.66 21.79H4.34c-1.11 0-2.11-.58-2.67-1.54s-.56-2.12 0-3.08l7.65-13.4c.56-.97 1.56-1.56 2.68-1.56s2.12.58 2.68 1.56l7.66 13.4c.55.97.55 2.12 0 3.08s-1.56 1.54-2.67 1.54zM12 3.71c-.58 0-1.09.3-1.38.8L2.96 17.92c-.28.5-.28 1.09 0 1.58s.8.79 1.37.79h15.32c.57 0 1.08-.3 1.37-.79s.29-1.09 0-1.58L13.38 4.51c-.29-.5-.8-.8-1.38-.8zm0 13.66a1.003 1.003 0 01-.71-1.71c.19-.2.44-.29.71-.29.55 0 1 .45 1 1s-.45 1-1 1zm0-1.5c-.28 0-.5.22-.5.5 0 .41.57.64.85.35a.501.501 0 00-.35-.86zm0-2c-.41 0-.75-.34-.75-.75V9.38c0-.41.34-.75.75-.75s.75.34.75.75v3.74c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default AlertTriangle;
