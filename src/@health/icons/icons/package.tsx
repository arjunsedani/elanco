import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Package = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12.01 21.75H12a2.7 2.7 0 01-1.28-.32l-5.1-2.72c-.44-.23-.81-.58-1.06-1.01-.26-.43-.39-.92-.39-1.42V12.8l-1.72-.92a1.77 1.77 0 01-.93-1.56c0-.32.09-.63.26-.91.17-.27.4-.49.69-.64l.69-.35-.69-.35c-.29-.15-.52-.37-.69-.64a1.734 1.734 0 01-.01-1.81c.16-.27.4-.5.68-.65l4.49-2.4c.39-.21.83-.32 1.27-.32.45-.01.88.1 1.28.31L12 3.86l2.51-1.3c.39-.2.86-.31 1.28-.31.44 0 .88.11 1.27.32l4.5 2.4c.28.15.52.37.68.65.16.27.25.59.25.91 0 .32-.09.63-.26.9s-.4.49-.69.64l-.69.35.69.35c.28.15.52.37.69.64s.26.59.26.91a1.77 1.77 0 01-.93 1.56l-1.71.91v3.49c0 .5-.14.99-.39 1.42-.26.43-.62.78-1.06 1.01l-5.1 2.72c-.4.21-.84.32-1.29.32zm.74-8.36v6.63l4.94-2.64c.2-.11.37-.27.49-.46s.18-.42.18-.64v-2.69l-1.29.69c-.39.21-.83.32-1.27.32h-.02c-.44 0-.88-.11-1.26-.31l-1.76-.91zm-7.09.21v2.68c0 .23.06.45.18.64s.28.35.48.46l4.93 2.63v-6.63l-1.76.91c-.39.2-.85.31-1.28.31-.44 0-.88-.11-1.28-.32l-1.28-.68zm7.98-1.44l1.56.81c.18.09.4.16.58.14.2 0 .4-.05.58-.15l4.5-2.4s.07-.05.1-.09c.02-.04.04-.08.04-.13s-.01-.09-.04-.13a.219.219 0 00-.1-.09l-1.63-.84-5.59 2.89zm-8.31-.43l2.31 1.23c.18.1.41.18.59.15.2 0 .4-.05.57-.14l1.56-.81-5.59-2.89-1.63.84s-.07.05-.1.09c-.02.04-.04.08-.04.13 0 .04.01.09.04.13s.06.07.1.09l2.04 1.09c.05.02.1.05.15.08zm1.08-3.3L12 11.32l5.59-2.89L12 5.55 6.41 8.43zm1.81-4.68c-.21 0-.41.05-.59.15L3.14 6.3s-.07.05-.1.09c-.02.04-.04.08-.04.13 0 .04.01.09.04.13.02.04.06.07.1.09l1.63.84 5.59-2.88-1.57-.81c-.18-.09-.38-.14-.57-.14zm5.41.95l5.59 2.88 1.63-.84s.07-.05.1-.09c.02-.04.04-.08.04-.13s-.01-.09-.03-.13a.219.219 0 00-.1-.09l-4.5-2.4c-.18-.09-.38-.14-.58-.15-.19-.02-.4.05-.58.14l-1.57.81z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Package;
