import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Branch = forwardRef((props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M22 21.75H2c-.41 0-.75-.34-.75-.75v-2c0-.2.08-.39.22-.53l1-1a.75.75 0 01.53-.22h.25v-7.5H2.5c-.41 0-.75-.34-.75-.75V6.36c0-.32.2-.6.5-.71l9.5-3.36c.16-.06.34-.06.5 0l9.5 3.36c.3.11.5.39.5.71V9c0 .41-.34.75-.75.75h-.75v7.5H21c.2 0 .39.08.53.22l1 1c.14.14.22.33.22.53v2c0 .41-.34.75-.75.75zm-19.25-1.5h18.5v-.94l-.56-.56H3.31l-.56.56v.94zm14-3h2.5v-7.5h-2.5v7.5zm-4 0h2.5v-7.5h-2.5v7.5zm-4 0h2.5v-7.5h-2.5v7.5zm-4 0h2.5v-7.5h-2.5v7.5zm-1.5-9h17.5V6.89L12 3.8 3.25 6.89v1.36zM12 7.27c-.48 0-.88-.39-.88-.88 0-.2.11-.47.25-.61.16-.17.39-.26.62-.26.48 0 .87.39.88.86 0 .49-.39.89-.88.89zm0-1.5c-.34 0-.62.28-.62.62 0 .35.28.62.62.62v-.63l-.09-.09H12v-.04l.04.05.59.06c0-.33-.28-.61-.62-.61z"
        fill="#9ba4ab"
      />
    </StyledSVG>
  );
});

export default Branch;
