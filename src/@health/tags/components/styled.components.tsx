import { styled, colors, fontSizes, prop } from "@health/theme-common";
import Close from "@health/icons/icons/close";
const DEFAULT_BASE_FONTSIZE = fontSizes(16);

export const CloseIcon = styled(Close)<{
  isHighContrast?: boolean;
}>`
  margin-left: 9.5px;
  margin-right: 2.5px;
  cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isHighContrast && colors.color_slate20)};
  transform-origin: left;
  transform: scale(1.25);
`;
export const TagStatusContainer = styled.span<{
  type?: string;
  isHighContrast?: boolean;
}>`
  background-color: ${(props) =>
    props.isHighContrast ? colors.color_slate20 : colors.color_slate10};

  display: inline-block;
  font-size: 13px;
  line-height: ${16 / 13};
  font-weight: 400;
  color: ${colors.color_slate110};
  border-radius: 18px;
  padding: 2px 8px;
  ${(props) => {
    switch (props.type) {
      case "success":
        return `background-color:${colors.color_green02}`;
      case "warning":
        return `background-color:${colors.color_amber02}`;
      case "info":
        return `background-color:${colors.color_indigo02}`;
      case "critical":
        return `background-color:${colors.color_deepOrange02}`;
    }
  }}
`;

export const TagBrandContainer = styled.span<{
  textColor?: string | ReturnType<typeof prop>;
  borderColor?: string | ReturnType<typeof prop>;
  isHighContrast?: boolean;
}>`
  background: ${(props) => props.isHighContrast && `trasparent`};
  border-radius: 2px;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  font-size: ${DEFAULT_BASE_FONTSIZE.font_size_tiny};
  line-height: 1em;
  text-transform: uppercase;
  color: ${(props) => (props.textColor ? props.textColor : "currentColor")};

  border: 1px solid
    ${(props) =>
      props.borderColor
        ? props.borderColor
        : props.textColor
        ? props.textColor
        : "currentColor"};
`;

export const TagInfoContainer = styled.span`
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  text-transform: uppercase;
  background-color: ${colors.color_slate20};
  font-size: ${DEFAULT_BASE_FONTSIZE.font_size_tiny};
  line-height: 1em;
`;
