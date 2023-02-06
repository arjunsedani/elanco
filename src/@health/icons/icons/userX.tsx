import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const UserX = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18 20.75c-.41 0-.75-.34-.75-.75v-1c0-.86-.35-1.69-.95-2.3s-1.44-.95-2.3-.95H6c-.87 0-1.68.34-2.3.95-.6.6-.95 1.44-.95 2.3v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-1.27.49-2.46 1.39-3.36.9-.9 2.09-1.39 3.36-1.39h8c1.25 0 2.47.51 3.36 1.39s1.39 2.11 1.39 3.36v1c0 .41-.34.75-.75.75zm2.41-7.59c-.19 0-.38-.07-.53-.22l-.88-.88-.88.88c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.88-.88-.88-.88c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.88.88.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM10 11.75c-2.62 0-4.75-2.13-4.75-4.75S7.38 2.25 10 2.25 14.75 4.38 14.75 7s-2.13 4.75-4.75 4.75zm0-8C8.21 3.75 6.75 5.21 6.75 7s1.46 3.25 3.25 3.25S13.25 8.79 13.25 7 11.79 3.75 10 3.75z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default UserX;
