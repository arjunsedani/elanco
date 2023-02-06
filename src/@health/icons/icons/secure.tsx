import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Secure = React.forwardRef<SVGSVGElement, StyledSvgProps>((props, ref) => {
  return (
    <StyledSVG
      ref={ref}
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M13.4641 8.03426C13.4641 7.22844 12.8108 6.5752 12.005 6.5752C11.1992 6.5752 10.5459 7.22844 10.5459 8.03426V9.28488C10.5459 9.4 10.6392 9.49332 10.7544 9.49332H13.2556C13.3707 9.49332 13.4641 9.4 13.4641 9.28488V8.03426Z"
        fill="#9BA4AB"
      />
      <path
        d="M22.01 3.62331C22.0045 2.72582 21.2759 2.0009 20.3784 2H3.63332C2.73498 2.00505 2.00953 2.73497 2.01001 3.63332L2 9.75388C2.04506 15.6367 6.14675 20.7091 11.8899 21.9842C11.9432 21.9948 11.9974 22 12.0517 22C12.1077 21.9998 12.1636 21.9939 12.2184 21.9825C17.9501 20.6567 22.0068 15.5485 22 9.6655L22.01 3.62331ZM8.25313 14.9131V10.3275C8.25313 9.86703 8.62641 9.49375 9.08688 9.49375H9.29531V8.03468C9.29531 6.53816 10.5085 5.325 12.005 5.325C13.5015 5.325 14.7147 6.53816 14.7147 8.03468V9.49375H14.9231C15.3836 9.49375 15.7569 9.86703 15.7569 10.3275V14.9131C15.7569 15.1342 15.669 15.3463 15.5127 15.5027C15.3563 15.659 15.1443 15.7469 14.9231 15.7469H9.08688C8.62641 15.7469 8.25313 15.3736 8.25313 14.9131Z"
        fill="#9BA4AB"
      />
      <path
        d="M12.005 14.0795C12.5806 14.0795 13.0472 13.6129 13.0472 13.0373C13.0472 12.4617 12.5806 11.9951 12.005 11.9951C11.4294 11.9951 10.9628 12.4617 10.9628 13.0373C10.9628 13.6129 11.4294 14.0795 12.005 14.0795Z"
        fill="#9BA4AB"
      />
    </StyledSVG>
  );
});

export default Secure;
