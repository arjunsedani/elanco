import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Home = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20 21.75H4c-.41 0-.75-.34-.75-.75V10.04l-.82.57a.74.74 0 01-1.04-.18.74.74 0 01.18-1.04l10-7c.26-.18.6-.18.86 0l10 7c.34.24.42.71.18 1.04-.24.34-.71.42-1.04.18l-.82-.57V21c0 .41-.34.75-.75.75zm-4.25-1.5h3.5V8.99L12 3.92 4.75 9v11.26h3.5v-5.25c0-1.52 1.23-2.75 2.75-2.75h2c1.52 0 2.75 1.23 2.75 2.75v5.25zm-6 0h4.5V15c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v5.25z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Home;
