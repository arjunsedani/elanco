import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Award = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16 21.75c-.11 0-.23-.03-.33-.08L12 19.84l-3.66 1.83c-.23.12-.51.1-.73-.03a.764.764 0 01-.36-.64v-7.2l-.02-.02c-1.27-1.27-1.98-2.97-1.98-4.77s.7-3.5 1.98-4.77S10.2 2.26 12 2.26s3.5.7 4.77 1.98c1.28 1.27 1.98 2.97 1.98 4.77s-.7 3.5-1.98 4.77l-.02.02v7.21c0 .26-.13.5-.36.64-.12.08-.26.11-.39.11zm-4-3.5c.11 0 .23.03.34.08l2.91 1.46v-4.87c-1.97 1.09-4.53 1.09-6.5 0v4.87l2.91-1.46c.11-.05.22-.08.34-.08zm-3.43-5.28c.95.83 2.16 1.28 3.43 1.28s2.48-.45 3.43-1.28c.04-.05.09-.09.14-.12.05-.04.09-.09.14-.14.99-.99 1.54-2.31 1.54-3.71s-.55-2.72-1.54-3.71C14.72 4.3 13.4 3.75 12 3.75s-2.72.55-3.71 1.54S6.75 7.6 6.75 9s.55 2.72 1.54 3.71c.05.05.09.09.14.13.05.04.1.08.14.13z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Award;
