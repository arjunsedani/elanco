import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TransactionHistory = forwardRef(
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
          d="M18.25 8c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zM17 3zM4 3zM2 5zm0 14zm5 2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM6 7.25c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm9 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-9 2.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm1 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm-1 2.5c-.41 0-.75.34-.75.75s.34.75.75.75v-1.5zm1 1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zm9.75-.25c0 .41-.34.75-.75.75v1.5c1.24 0 2.25-1.01 2.25-2.25h-1.5zm-.75.75c-.41 0-.75-.34-.75-.75h-1.5c0 1.24 1.01 2.25 2.25 2.25v-1.5zm-.75-.75c0-.41.34-.75.75-.75v-1.5c-1.24 0-2.25 1.01-2.25 2.25h1.5zm.75-.75c.41 0 .75.34.75.75h1.5c0-1.24-1.01-2.25-2.25-2.25v1.5zm4 4.5h-8v1.5h8v-1.5zm-8 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zM10.75 19v-5h-1.5v5h1.5zm0-5c0-.69.56-1.25 1.25-1.25v-1.5c-1.52 0-2.75 1.23-2.75 2.75h1.5zM12 12.75h8v-1.5h-8v1.5zm8 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zM21.25 14v5h1.5v-5h-1.5zm0 5c0 .69-.56 1.25-1.25 1.25v1.5c1.52 0 2.75-1.23 2.75-2.75h-1.5zm-1.5-11V5h-1.5v3h1.5zm0-3c0-.73-.29-1.43-.81-1.94l-1.06 1.06c.23.23.37.55.37.88h1.5zm-.81-1.94A2.75 2.75 0 0017 2.25v1.5c.33 0 .65.13.88.37l1.06-1.06zM17 2.25H4v1.5h13v-1.5zm-13 0c-.73 0-1.43.29-1.94.81l1.06 1.06c.23-.23.55-.37.88-.37v-1.5zm-1.94.81A2.75 2.75 0 001.25 5h1.5c0-.33.13-.65.37-.88L2.06 3.06zM1.25 5v14h1.5V5h-1.5zm0 14c0 .73.29 1.43.81 1.94l1.06-1.06c-.23-.23-.37-.55-.37-.88h-1.5zm.81 1.94c.52.52 1.22.81 1.94.81v-1.5c-.33 0-.65-.13-.88-.37l-1.06 1.06zm1.94.81h3v-1.5H4v1.5zm2-13h9v-1.5H6v1.5zm0 4h1v-1.5H6v1.5zm0 4h1v-1.5H6v1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TransactionHistory;
