import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const TransferDeactivation = forwardRef(
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
          d="M11.97 22.27c-.48 0-.97-.03-1.45-.1-2.18-.31-4.24-1.34-5.79-2.9a10.28 10.28 0 01-2.9-5.79c-.31-2.18.09-4.44 1.15-6.38 1.05-1.93 2.74-3.5 4.74-4.42 2-.92 4.29-1.16 6.44-.7.41.09.66.49.58.89a.75.75 0 01-.89.57c-1.84-.4-3.79-.18-5.5.6A8.808 8.808 0 004.3 7.81a8.79 8.79 0 00-.98 5.44A8.844 8.844 0 005.8 18.2a8.812 8.812 0 004.95 2.48 8.79 8.79 0 005.44-.98c1.65-.9 2.99-2.34 3.77-4.04.78-1.71.99-3.66.6-5.5-.09-.4.17-.8.58-.89.4-.09.8.17.89.57.46 2.15.22 4.44-.7 6.44-.92 2-2.48 3.68-4.42 4.74-1.51.82-3.21 1.25-4.93 1.25zM15 16.5H9c-1.52 0-2.75-1.23-2.75-2.75v-3.5C6.25 8.73 7.48 7.5 9 7.5h6c1.52 0 2.75 1.23 2.75 2.75v3.5c0 1.52-1.23 2.75-2.75 2.75zM9 9c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-3.5C16.25 9.56 15.69 9 15 9H9zm3 5.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm8.5-4.5c-.19 0-.38-.07-.53-.22l-.72-.72-.72.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.72-.72-.72-.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.72.72.72-.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.72.72.72.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default TransferDeactivation;
