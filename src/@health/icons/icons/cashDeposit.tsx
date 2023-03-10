import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const CashDeposit = forwardRef(
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
          d="M19 21.75H5c-.73 0-1.42-.29-1.94-.81s-.81-1.21-.81-1.94v-5c0-.73.29-1.42.81-1.94s1.19-.8 1.91-.81a7.35 7.35 0 01-.21-1.75 7.2 7.2 0 012.12-5.13 7.2 7.2 0 015.13-2.12 7.241 7.241 0 017.11 8.66c-.02.11-.05.22-.08.34.72 0 1.4.29 1.91.81.52.52.81 1.21.81 1.94v5c0 .73-.29 1.42-.81 1.94s-1.21.81-1.94.81zm-14-9c-.33 0-.65.13-.88.37-.23.23-.37.55-.37.88v5c0 .33.13.65.37.88s.55.37.88.37h14c.33 0 .65-.13.88-.37s.37-.55.37-.88v-5c0-.33-.13-.65-.37-.88-.23-.23-.55-.37-.88-.37h-.52c-.34.69-.8 1.32-1.35 1.88-.22.22-.46.43-.71.62H17c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.58a7.32 7.32 0 01-1.61-1.72c-.17-.25-.32-.51-.45-.78H5zm6.91 2.5h.17c.35 0 .7-.04 1.04-.11 1.12-.22 2.14-.77 2.94-1.57a5.72 5.72 0 001.57-2.94 5.75 5.75 0 00-2.45-5.9 5.755 5.755 0 00-7.26.71 5.684 5.684 0 00-1.68 4.07c0 .76.15 1.51.44 2.21.14.35.32.68.52.99a5.75 5.75 0 004.69 2.56zm.09-1.7c-.41 0-.75-.34-.75-.75v-.11c-.22-.04-.43-.12-.63-.23-.29-.17-.53-.41-.7-.7a.752.752 0 111.3-.76c.04.07.09.12.16.16.07.04.14.06.22.06h.9c.1-.01.22-.03.29-.1.08-.06.12-.16.14-.26a.398.398 0 00-.31-.44l-1.57-.39c-.45-.1-.85-.38-1.12-.76-.27-.38-.39-.85-.33-1.32.06-.46.28-.89.63-1.2.29-.25.64-.41 1.01-.46V6.2c0-.41.34-.75.75-.75s.75.34.75.75v.11a1.984 1.984 0 011.33.93c.21.36.09.82-.27 1.02-.36.21-.82.09-1.03-.27a.49.49 0 00-.16-.16.428.428 0 00-.22-.06h-.9c-.07 0-.2.03-.28.1-.07.06-.12.16-.13.25a.398.398 0 00.31.44l1.56.39a1.907 1.907 0 01.8 3.3c-.29.25-.64.41-1.02.45v.09c0 .41-.34.75-.75.75z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default CashDeposit;
