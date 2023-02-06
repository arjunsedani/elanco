import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Framer = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 21.75c-.19 0-.39-.08-.53-.22l-6-6a.633.633 0 01-.16-.24.717.717 0 01-.06-.29V9c0-.41.34-.75.75-.75h4.19L5.47 3.53A.751.751 0 016 2.25h12c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-4.19l4.72 4.72a.751.751 0 01-.53 1.28h-5.25V21c0 .3-.18.58-.46.69-.09.04-.19.06-.29.06zm-4.19-6l3.44 3.44v-3.44H7.81zm4.19-1.5h4.19l-4.5-4.5H6.75v4.5H12zm.31-6h4.94v-4.5H7.81l4.5 4.5z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Framer;
