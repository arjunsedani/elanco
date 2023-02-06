import React from "react";
import type { TagStatusProps } from "./interfaces";
import { TagStatusContainer } from "./styled.components";
const TagStatus = React.forwardRef<HTMLSpanElement, TagStatusProps>(
  (
    { type, children, onClick, isHighContrast },
    ref
  ) => {
    return (
      <TagStatusContainer
        ref={ref}
        type={type}
        onClick={onClick}
        isHighContrast={isHighContrast}
      >
        {children}
      </TagStatusContainer>
    );
  }
);
export default TagStatus;
