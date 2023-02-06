import React from "react";
import type { TagBrandProps } from "./interfaces";
import { TagBrandContainer } from "./styled.components";
const TagBrand = React.forwardRef<HTMLSpanElement, TagBrandProps>(
  (
    { color, borderColor, children, onClick, isHighContrast },
    ref
  ) => {
    return (
      <TagBrandContainer
        ref={ref}
        textColor={color}
        borderColor={borderColor}
        onClick={onClick}
        isHighContrast={isHighContrast}
      >
        {children}
      </TagBrandContainer>
    );
  }
);
export default TagBrand;
