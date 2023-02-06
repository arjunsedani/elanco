import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Search = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g fill="#9ba4ab" clipPath="url(#prefix__a)">
        <path d="M11.06 18.87c-4.31 0-7.81-3.5-7.81-7.81s3.5-7.81 7.81-7.81 7.81 3.5 7.81 7.81-3.5 7.81-7.81 7.81zm0-14.12c-3.48 0-6.31 2.83-6.31 6.31s2.83 6.31 6.31 6.31 6.31-2.83 6.31-6.31-2.83-6.31-6.31-6.31z" />
        <path d="M20 20.75c-.19 0-.38-.07-.53-.22l-3.95-3.95c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3.95 3.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z" />
      </g>
    </StyledSVG>
  );
});

export default Search;
