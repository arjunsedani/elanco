import * as React from "react";
import classNames from "classnames";
import { styled, css, prop, DesignTokensTheme } from "@health/theme-common";
import { Interpolation, ThemedStyledProps } from "styled-components";
import { warnDeprecated } from "../_utils/deprecation";
import {
  ButtonProps,
  ButtonType,
  ButtonShape,
  ButtonStyleType,
  SizeType,
  IconAlignmentType,
} from "../interfaces/ButtonProps";

const DEFAULT_KIND: ButtonType = "basic";
const DEFAULT_SHAPE: ButtonShape = "round";
const DEFAULT_BASIC_SIZE: SizeType = "medium";
const DEFAULT_PLAIN_OR_LINK_SIZE: SizeType = "small";
const DEFAULT_ICON_ALIGNMENT: IconAlignmentType = "left";

// base button, with ref forwarding
type propsdata = ButtonProps;
type localrefdata = React.RefObject<HTMLButtonElement>;

export const Button = React.forwardRef<localrefdata, propsdata>(
  (props, ref) => {
    warnDeprecated(
      { prop: props, propName: `prefixCls`, alternative: "className or style" },
      { prop: props, propName: `shape` },
      {
        prop: props,
        propName: `icon`,
        alternative: "icon as a child element of button",
      },
      {
        prop: props,
        propName: `iconAlignment`,
        alternative: "icon as a child element of button",
      },
      {
        prop: props,
        propName: "isHighContrast",
        alternative: "ThemeProvider for high contrast styling",
      },
      {
        prop: props,
        propName: "listenEnterPress",
        alternative:
          "the default HTML button behaviour. Otherise, it will result in triggering two onClick events",
      }
    );

    const {
      children,
      className,
      icon,
      kind,
      shape,
      size,
      htmlType = "button" as ButtonProps["htmlType"],
      onClick,
      iconAlignment = DEFAULT_ICON_ALIGNMENT,
      isHighContrast,
      listenEnterPress,
      ...rest
    }: ButtonProps = normalizeButtonProps(props);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    console.log("props.theme", props)
    // const localRef = ref ? ref : buttonRef;
    const localRef = buttonRef;
    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
    ) => {
      const { onClick, disabled } = props;
      (
        onClick as React.MouseEventHandler<
          HTMLButtonElement | HTMLAnchorElement
        >
      )?.(e);
    };

    const classes = classNames(kind, shape, size, className);

    const onKeyDown = React.useCallback((e: KeyboardEvent): void => {
      if (e.key === "Enter") {
        localRef!.current!.click();
      }
    }, []);

    React.useEffect(() => {
      // If onEnterPress === true, button should heard for Enter press and then execute onClick
      if (listenEnterPress) {
        window.addEventListener("keydown", onKeyDown);
      }

      return () => {
        if (listenEnterPress) {
          window.removeEventListener("keydown", onKeyDown);
        }
      };
    });

    return (
      <button
        {...rest}
        type={htmlType}
        className={classes}
        onClick={handleClick}
        ref={localRef}
        style={{ fontFamily: "Public Sans" }}
      >
        {iconAlignment === DEFAULT_ICON_ALIGNMENT && icon}
        {children}
        {iconAlignment !== DEFAULT_ICON_ALIGNMENT && icon}
      </button>
    );
  }
);





const normalizeButtonProps = (props: ButtonProps): ButtonProps => {
  const kind = props.kind ?? DEFAULT_KIND;

  return {
    ...props,
    kind,
    shape: props.shape ?? DEFAULT_SHAPE,
    size:
      props.size ??
      (kind === "plain" || kind === "link"
        ? DEFAULT_PLAIN_OR_LINK_SIZE
        : DEFAULT_BASIC_SIZE),
  };
};

const baseStyle = () => {
  return css`
    align-items: center;
    display: flex;
    margin: 0 0.5rem 0.5rem 0;
    :hover:not([disabled]) {
      cursor: pointer;
    }
    > svg {
      margin: 0px 8px;
      height: 16px;
      width: 16px;
    }
    > svg:first-child {
      margin-left: 0px;
    }
    > svg:last-child {
      margin-right: 0px;
    }
  `;
};

const iconAlignmentStyle = (alignment: IconAlignmentType = "left") => {
  return css`
    > div {
      margin: 0px 8px;
      ${`margin-${alignment}`}: 0px;
      height: 16px;
      width: 16px;
    }
  `;
};

const getPaddingAdjustment = (padding: string) => {
  return css`
    padding-left: ${padding};
    padding-right: ${padding};
  `;
};

/**
 * this function maintain the outline implementation for button.
 */
const applyOutline = (
  colorGetter: Interpolation<ThemedStyledProps<DesignTokensTheme, {}>>
) => css`
  // The code below implements a workaround to showing the outline effect
  // This is aimed to provide a better compatibility with Safari.
  //
  // Safari 3 - 15 does not properly support the rendering of outline with border-radius.
  // As of Safari 15 - outline border radius is only respected when outline-style is set of auto.
  //
  // see: https://bugs.webkit.org/show_bug.cgi?id=20807
  //
  box-shadow: 0 0 0 2px ${colorGetter};
  outline: none;
`;


const STYLE_MAP = {
  primary: css<ButtonProps & DesignTokensTheme>`
    ${baseStyle}
    background-color: ${(props) =>
      props.theme.component?.button.primary.default.default.background ??
      (({ isHighContrast }) =>
        isHighContrast ? prop("color_theme70") : prop("color_theme60"))};
    border: 1px solid transparent;
    color: ${(props) =>
      props.theme.component?.button.primary.default.default.color ??
      prop("color_white")};
    :active:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.primary.default.active.background ??
        (({ isHighContrast }) =>
          isHighContrast ? prop("color_theme80") : prop("color_theme70"))};
    }
    :focus:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.primary.default.focus.background ??
        (({ isHighContrast }) =>
          isHighContrast ? prop("color_theme70") : prop("color_theme60"))};
      border-color: transparent;
      ${applyOutline(
        (props: any) =>
          props.theme.component?.button.primary.default.focus.borderColor ??
          prop("color_status_access")
      )}
    }
    :hover:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.primary.default.hover.background ??
        (({ isHighContrast }) =>
          isHighContrast ? prop("color_theme80") : prop("color_theme70"))};
      cursor: pointer;
    }
    :disabled {
      background-color: ${(props) =>
        props.theme.component?.button.primary.default.disabled.background ??
        (({ isHighContrast }) =>
          isHighContrast ? prop("color_slate20") : prop("color_slate10"))};
      color: ${(props) =>
        props.theme.component?.button.primary.default.disabled.color ??
        prop("color_slate60")};
      cursor: not-allowed;
    }
  `,
  basic: css<ButtonProps & DesignTokensTheme>`
    ${baseStyle}
    align-items: center;
    background-color: ${(props) =>
      props.theme.component?.button.basic.default.default.background ??
      prop("color_white")};
    border: 1px solid
      ${(props) =>
        props.theme.component?.button.basic.default.default.borderColor ??
        prop("color_slate40")};
    color: ${(props) =>
      props.theme.component?.button.basic.default.default.color ??
      prop("color_slate110")};
    :active:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.basic.default.active.background ??
        prop("color_slate20")};
    }
    :focus:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.basic.default.focus.background ??
        prop("color_white")};
      border-color: transparent;
      ${applyOutline(
        (props: any) =>
          props.theme.component?.button.basic.default.focus.borderColor ??
          prop("color_status_access")
      )}
    }
    :hover:not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.basic.default.hover.background ??
        prop("color_slate00")};
    }
    :disabled {
      background-color: ${(props) =>
        props.theme.component?.button.basic.default.disabled.background ??
        (({ isHighContrast }) =>
          isHighContrast ? prop("color_slate20") : prop("color_slate10"))};
      border: 1px solid transparent;
      color: ${(props) =>
        props.theme.component?.button.basic.default.disabled.color ??
        prop("color_slate60")};
      cursor: not-allowed;
    }
  `,
  plain: css<ButtonProps & DesignTokensTheme>`
    ${baseStyle}
    background-color: ${(props) =>
      props.theme.component?.button.plain.default.default.background ??
      "transparent"};
    border: 1px solid transparent;
    color: ${(props) =>
      props.theme.component?.button.plain.default.default.color ??
      prop("color_slate110")};
    :active {
      background-color: ${(props) =>
        props.theme.component?.button.plain.default.active.background ??
        prop("color_gray03")};
    }
    :focus {
      background-color: ${(props) =>
        props.theme.component?.button.plain.default.focus.background ??
        prop("color_gray03")};
      border-color: transparent;
      ${applyOutline(
        (props: any) =>
          props.theme.component?.button.plain.default.focus.borderColor ??
          prop("color_status_access")
      )}
    }
    :hover:not(:focus):not([disabled]) {
      background-color: ${(props) =>
        props.theme.component?.button.plain.default.hover.background ??
        prop("color_gray03")};
    }
    :disabled {
      color: ${(props) =>
        props.theme.component?.button.plain.default.disabled.background ??
        prop("color_slate40")};
    }
  `,
  small: css<ButtonProps & DesignTokensTheme>`
    height: 32px;
    padding: 8px 24px;
    font-size: ${(props) =>
      props.theme.component?.button.default.default.default.fontSize ??
      prop("font_size_base_sm")};
  `,
  medium: css<ButtonProps & DesignTokensTheme>`
    height: 40px;
    padding: 10px 24px;
    font-size: ${(props) =>
      props.theme.component?.button.default.md.default.fontSize ??
      prop("font_size_base")};
  `,
  large: css<ButtonProps & DesignTokensTheme>`
    height: 48px;
    padding: 14px 24px;
    font-size: ${(props) =>
      props.theme.component?.button.default.lg.default.fontSize ??
      prop("font_size_base")};
  `,
  plainSize: {
    small: css<ButtonProps & DesignTokensTheme>`
      height: 24px;
      padding: 4px;
      font-size: ${(props) =>
        props.theme.component?.button.default.default.default.fontSize ??
        prop("font_size_base_sm")};
    `,
    medium: css<ButtonProps & DesignTokensTheme>`
      height: 40px;
      padding: 10px 12px;
      font-size: ${(props) =>
        props.theme.component?.button.default.md.default.fontSize ??
        prop("font_size_base")};
    `,
    large: css<ButtonProps & DesignTokensTheme>`
      height: 48px;
      padding: 12px 14px;
      font-size: ${(props) =>
        props.theme.component?.button.default.lg.default.fontSize ??
        prop("font_size_base")};
    `,
  },
  plainShape: css`
    border-radius: ${prop("border_radius_m")};
  `,
  round: css`
    border-radius: ${prop("border_radius_m")};
  `,
  circle: css`
    border-radius: 35px;
    border: 0;
    box-shadow: ${prop("elevation_2")};
    padding: 10px 15px;
  `,
  iconAlignment: {
    left: css`
      ${iconAlignmentStyle("left")}
    `,
    right: css`
      ${iconAlignmentStyle("right")}
    `,
  },
  paddingAdjustment: {
    small: css`
      ${getPaddingAdjustment("12px")}
    `,
    medium: css`
      ${getPaddingAdjustment("14px")}
    `,
    large: css`
      ${getPaddingAdjustment("16px")}
    `,
  },
};

const StyledButton = styled(Button)((props: ButtonProps) => {
  const {
    kind,
    size,
    shape,
    iconAlignment = DEFAULT_ICON_ALIGNMENT,
    icon,
    isHighContrast,
    children,
  } = normalizeButtonProps(props);

  let buttonKind: ButtonStyleType = DEFAULT_KIND;
  switch (kind) {
    case "default":
      break;
    case "link":
      buttonKind = "plain";
      break;
    default:
      buttonKind = kind ?? "plain";
  }

  const isPlainButton: boolean = buttonKind === "plain";

  const typeStyle = STYLE_MAP[buttonKind];
  const sizeStyle = isPlainButton ? STYLE_MAP.plainSize[size ?? "small" ] : STYLE_MAP[size ?? "small"];
  const shapeStyle = STYLE_MAP[isPlainButton ? "plainShape" : shape ?? "plainShape"];
  const paddingAdjustmentStyle = STYLE_MAP.paddingAdjustment[size ?? "small"];

  if (!icon) {
    //Check whether multiple elements are passed into button
    if (React.Children.count(children) > 1) {
      return [typeStyle, sizeStyle, paddingAdjustmentStyle, shapeStyle];
    }
    return [typeStyle, sizeStyle, shapeStyle];
  }

  const iconAlignmentStyle = STYLE_MAP.iconAlignment[iconAlignment];
  return [
    typeStyle,
    sizeStyle,
    iconAlignmentStyle,
    paddingAdjustmentStyle,
    shapeStyle,
  ];
});

export default StyledButton;
