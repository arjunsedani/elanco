import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Password = forwardRef(
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
          d="M7.32 7.74l.53.53-.53-.53zm4.95 0l-.53.53.53-.53zm-.53 0l.53.53-.53-.53zm4.42 0l.53.53-.53-.53zm-5.15 6.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v1.5zM20.26 8c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-1.61 7.7c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-3.93 0c0 .41.34.75.75.75s.75-.34.75-.75h-1.5zm-7.4-7.43a.368.368 0 010-.53L8.38 8.8c.44-.44.44-1.15 0-1.59L7.32 8.27zm0-.53c.15-.15.38-.15.53 0L6.79 8.8c.44.44 1.15.44 1.59 0L7.32 7.74zm.53 0c.15.15.15.38 0 .53L6.79 7.21c-.44.44-.44 1.15 0 1.59l1.06-1.06zm0 .53c-.15.15-.39.15-.53 0l1.06-1.06c-.44-.44-1.15-.44-1.59 0l1.06 1.06zm3.88 0a.368.368 0 010-.53l1.06 1.06c.44-.44.44-1.15 0-1.59l-1.06 1.06zm0-.53c.15-.15.38-.15.53 0L11.2 8.8c.44.44 1.15.44 1.59 0l-1.06-1.06zm.53 0c.15.15.15.38 0 .53L11.2 7.21c-.44.44-.44 1.15 0 1.59l1.06-1.06zm0 .53c-.15.15-.39.15-.53 0l1.06-1.06c-.44-.44-1.15-.44-1.59 0l1.06 1.06zm3.88 0a.368.368 0 010-.53L17.2 8.8c.44-.44.44-1.15 0-1.59l-1.06 1.06zm0-.53c.15-.15.38-.15.53 0L15.61 8.8c.44.44 1.15.44 1.59 0l-1.06-1.06zm.53 0c.15.15.15.38 0 .53l-1.06-1.06c-.44.44-.44 1.15 0 1.59l1.06-1.06zm0 .53c-.15.15-.39.15-.53 0l1.06-1.06c-.44-.44-1.15-.44-1.59 0l1.06 1.06zm-5.68 3.99H5v1.5h6v-1.5zm-6 0c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.52 1.23 2.75 2.75 2.75v-1.5zm-1.25-1.25V5h-1.5v6h1.5zm0-6c0-.69.56-1.25 1.25-1.25v-1.5c-1.52 0-2.75 1.23-2.75 2.75h1.5zm1.25-1.25h14v-1.5H5v1.5zm14 0c.69 0 1.25.56 1.25 1.25h1.5c0-1.52-1.23-2.75-2.75-2.75v1.5zm1.25 1.25v3h1.5v-3h-1.5zm-.11 10.7v-1.73h-1.5v1.73h1.5zm0-1.73c0-1.5-1.21-2.71-2.71-2.71v1.5c.67 0 1.21.54 1.21 1.21h1.5zm-2.71-2.71c-1.5 0-2.71 1.21-2.71 2.71h1.5c0-.67.54-1.21 1.21-1.21v-1.5zm-2.71 2.71v1.73h1.5v-1.73h-1.5zm5.28.99h-5v1.5h5v-1.5zm-5 0c-.97 0-1.75.78-1.75 1.75h1.5c0-.14.11-.25.25-.25v-1.5zm-1.75 1.75v3.3h1.5v-3.3h-1.5zm0 3.3c0 .97.78 1.75 1.75 1.75v-1.5c-.14 0-.25-.11-.25-.25h-1.5zm1.75 1.75h5v-1.5h-5v1.5zm5 0c.97 0 1.75-.78 1.75-1.75h-1.5c0 .14-.11.25-.25.25v1.5zm1.75-1.75v-3.3h-1.5v3.3h1.5zm0-3.3c0-.97-.78-1.75-1.75-1.75v1.5c.14 0 .25.11.25.25h1.5z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Password;
