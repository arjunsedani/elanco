import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const RewardsInactive = forwardRef(
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
          d="M11.25 21c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm1.5-13c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm2.95-1.39l-.54-.52.54.52zM12.1 8l-.74.12c.06.36.37.63.74.63V8zm1.26-3.86c.29-.3.28-.77-.02-1.06a.746.746 0 00-1.06.02l1.08 1.04zM12.28 3.1c-.29.3-.28.77.02 1.06.3.29.77.28 1.06-.02L12.28 3.1zM8.3 6.61l.54-.52-.54.52zM11.9 8v.75c.37 0 .68-.27.74-.63L11.9 8zm-.18-4.9a.746.746 0 00-1.06-.02c-.3.29-.31.76-.02 1.06l1.08-1.04zm-1.08 1.04c.29.3.76.31 1.06.02.3-.29.31-.76.02-1.06l-1.08 1.04zM19.75 12c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zm-14 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75h1.5zM20 7.25H4v1.5h16v-1.5zm-16 0c-.97 0-1.75.78-1.75 1.75h1.5c0-.14.11-.25.25-.25v-1.5zM2.25 9v2h1.5V9h-1.5zm0 2c0 .97.78 1.75 1.75 1.75v-1.5c-.14 0-.25-.11-.25-.25h-1.5zM4 12.75h16v-1.5H4v1.5zm16 0c.97 0 1.75-.78 1.75-1.75h-1.5c0 .14-.11.25-.25.25v1.5zM21.75 11V9h-1.5v2h1.5zm0-2c0-.97-.78-1.75-1.75-1.75v1.5c.14 0 .25.11.25.25h1.5zm-9 12V8h-1.5v13h1.5zm2.41-14.91c-.87.91-2.32 1.16-3.06 1.16v1.5c.9 0 2.85-.28 4.14-1.62l-1.08-1.04zM12.1 8l.74-.12v-.02s-.01-.05-.02-.09c-.01-.08-.02-.2-.04-.34-.03-.29-.05-.69-.03-1.12.01-.43.06-.88.17-1.28.11-.4.26-.7.44-.89L12.28 3.1c-.42.44-.67 1.01-.81 1.55s-.2 1.11-.22 1.62c-.02.51.01.97.04 1.3.01.17.03.3.04.4 0 .05.01.09.02.11v.03s0 .01.74-.1zm4.14-.87c1.07-1.12 1.07-2.92 0-4.03l-1.08 1.04c.51.54.51 1.42 0 1.95l1.08 1.04zm0-4.03a2.737 2.737 0 00-3.96 0l1.08 1.04c.5-.52 1.29-.52 1.79 0l1.08-1.04zM7.76 7.13c1.29 1.34 3.23 1.62 4.14 1.62v-1.5c-.74 0-2.19-.25-3.06-1.16L7.76 7.13zM11.9 8l.74.12v-.05s.01-.07.02-.11c.01-.1.03-.23.04-.4.03-.33.05-.79.04-1.3-.02-.5-.07-1.07-.22-1.62-.14-.54-.39-1.1-.81-1.55l-1.08 1.04c.18.19.33.49.44.89.1.4.15.84.17 1.28.01.43 0 .83-.03 1.12-.01.15-.03.26-.04.34 0 .04 0 .07-.01.09v.02l.74.12zM8.84 6.09c-.51-.54-.51-1.42 0-1.95L7.76 3.1c-1.07 1.12-1.07 2.92 0 4.03l1.08-1.04zm0-1.95c.5-.52 1.29-.52 1.79 0l1.08-1.04a2.737 2.737 0 00-3.96 0l1.08 1.04zM18.25 12v8h1.5v-8h-1.5zm0 8c0 .14-.11.25-.25.25v1.5c.97 0 1.75-.78 1.75-1.75h-1.5zm-.25.25H6v1.5h12v-1.5zm-12 0c-.14 0-.25-.11-.25-.25h-1.5c0 .97.78 1.75 1.75 1.75v-1.5zM5.75 20v-8h-1.5v8h1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default RewardsInactive;
