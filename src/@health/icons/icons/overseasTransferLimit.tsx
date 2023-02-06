import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const OverseasTransferLimit = forwardRef(
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
          d="M18 22.75c-.39 0-.78-.12-1.11-.37l-.54-.41-.67-.09c-.81-.11-1.46-.75-1.56-1.57l-.09-.67-.41-.54c-.49-.65-.49-1.56 0-2.21l.31-.4.1-.13.09-.67c.11-.81.75-1.46 1.57-1.56l.67-.09.54-.41c.65-.5 1.56-.5 2.21 0l.54.41.67.09c.81.11 1.46.75 1.57 1.57l.09.67.41.54c.5.65.5 1.56 0 2.21l-.31.4-.1.13-.09.67c-.11.81-.75 1.46-1.57 1.56l-.67.09-.54.41c-.33.25-.72.37-1.11.37zm-3.18-4.55l.53.69c.08.1.13.23.15.36l.12.87c.02.14.13.26.28.28l.87.12c.13.02.25.07.36.15l.69.53c.11.09.28.09.39 0l.69-.53c.1-.08.23-.13.36-.15l.87-.12c.14-.02.26-.13.28-.28l.12-.87c.02-.14.07-.26.16-.37l.52-.68c.09-.11.09-.28 0-.39l-.53-.69a.77.77 0 01-.15-.36l-.12-.87a.329.329 0 00-.28-.28l-.87-.12a.816.816 0 01-.36-.15l-.69-.53a.315.315 0 00-.39 0l-.69.53a.77.77 0 01-.36.15l-.87.11c-.14.02-.26.13-.28.28l-.12.87c-.02.14-.07.26-.16.37l-.52.68c-.09.11-.09.28 0 .39zM12 21.75h-.09c-4.19-.04-7.77-2.74-9.1-6.49v-.02c-.37-1.01-.56-2.11-.56-3.24s.19-2.21.54-3.21c0-.03.02-.05.03-.08C4.17 4.95 7.78 2.25 12 2.25c5.38 0 9.75 4.37 9.75 9.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.78-.11-1.53-.31-2.25H16.6c.1.74.15 1.49.15 2.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.76-.06-1.51-.17-2.25H8.92a14.76 14.76 0 000 4.5H12c.41 0 .75.34.75.75s-.34.75-.75.75H9.22c.34 1.33.87 2.61 1.59 3.81.25.42.66.67 1.13.69.22 0 .44.07.59.22.14.14.22.32.22.53 0 .41-.34.75-.75.75zm-7.35-6c.95 1.85 2.57 3.3 4.55 4.01-.69-1.27-1.2-2.62-1.52-4.01H4.65zm-.59-1.5H7.4c-.2-1.49-.2-3.01 0-4.5H4.06c-.2.72-.31 1.47-.31 2.25s.11 1.53.31 2.25zm12.26-6h3.03a8.269 8.269 0 00-4.55-4.01c.68 1.26 1.2 2.61 1.52 4.01zm-7.1 0h5.55c-.35-1.34-.88-2.62-1.59-3.8-.26-.44-.7-.7-1.19-.7s-.92.25-1.19.7c-.71 1.19-1.24 2.48-1.59 3.8zm-4.57 0h3.03C8 6.86 8.51 5.51 9.2 4.24c-1.97.71-3.6 2.16-4.55 4.01zm13.04 11.43c-.19 0-.38-.07-.53-.22l-.93-.93c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.4.4 1.03-1.03c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.56 1.56c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default OverseasTransferLimit;
