import React from "react";
import type { TagInfoProps } from "./interfaces";
import { TagInfoContainer, CloseIcon } from "./styled.components";
import { colors } from "@health/theme-common";

const TagInfo = React.forwardRef<HTMLSpanElement, TagInfoProps>(
  (
    { children, dismissible, onDismiss, onClick, isHighContrast },
    ref
  ) => {
    return (
      <TagInfoContainer ref={ref} onClick={onClick}>
        {children}
        {dismissible && (
          <CloseIcon
            data-testid="close"
            fill={colors.color_slate70}
            onClick={onDismiss}
            isHighContrast={isHighContrast}
          />
        )}
      </TagInfoContainer>
    );
  }
);
export default TagInfo;
