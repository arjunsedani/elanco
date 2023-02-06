import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Gitlab = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 20.3c-.1 0-.2-.02-.29-.06h-.01s-.08-.04-.12-.07h-.01l-8.69-6.16c-.54-.38-.76-1.05-.55-1.67l1.04-3.12s.03-.09.04-.13l1.88-5.63c.15-.46.58-.76 1.07-.76.49 0 .91.31 1.07.77l1.73 5.18h5.69l1.72-5.18c.15-.46.58-.77 1.07-.77s.92.31 1.07.77l1.88 5.63s.03.08.04.12l1.05 3.13c.21.62-.02 1.29-.55 1.67l-8.69 6.16h-.02s-.07.06-.11.07a.73.73 0 01-.3.06zM4.64 10.14l-.9 2.68 6.82 4.81-2.49-7.48H4.64zm11.28 0l-2.49 7.48 6.82-4.83-.89-2.64h-3.44zm-6.27 0L12 17.18l2.35-7.04H9.66zm6.77-1.5h2.44L17.64 5l-1.21 3.64zm-11.28 0h2.43L6.36 5 5.14 8.64zm12.14-4.7zm-10.57 0z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Gitlab;
