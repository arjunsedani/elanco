import React, { HTMLProps } from "react";
import { tuple, Omit } from "../_utils/type";

const ButtonTypes = tuple("default", "basic", "primary", "plain", "link");
export type ButtonType = typeof ButtonTypes[number];
const ButtonStyleTypes = tuple("basic", "primary", "plain");
export type ButtonStyleType = typeof ButtonStyleTypes[number];
const ButtonShapes = tuple("round", "circle");
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export type SizeType = "small" | "medium" | "large" | undefined;
const IconAlignmentTypes = tuple("left", "right");
export type IconAlignmentType = typeof IconAlignmentTypes[number];
export type IconButtonSize = "tiny" | "small" | "medium" | "large" | undefined;

export interface BaseButtonProps {
  /**
   * Child elements to be passed into Button component
   */
  children?: React.ReactNode;
  /**
   * css class names of the button.
   */
  className?: string;
  /**
   * Icon component of the button.
   * @deprecated It is recommended to pass icon directly into button as a child element instead of using `icon` prop
   */
  icon?: React.ReactNode;
  /**
   * If kind is not specified, the button is set to "basic" kind by default.
   * "default" and "link" in older versions(<= 0.1.4) have been deprecated. "default" and "link" are now mapped to "basic" and "plain" respectively. It's recommended to use newly defined kinds.
   * @default "basic"
   */
  kind?: ButtonType; // TODO: rename to semantic `type` once figured out how to resolve conflict with html attr `type`
  /**
   * To prefix styles and avoid style conflicts
   * @deprecated this prop does not do anything
   */
  prefixCls?: string;
  /**
   * Button shape as "round" | "circle"
   * @deprecated in future release
   */
  shape?: ButtonShape;
  /**
   * Button size as "small" | "medium" | "large"
   */
  size?: SizeType;
  /**
   * Button onClick event
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * IconAlignment as "left" | "right". It determines the location of an icon inside the button
   * @deprecated use icon as a child element of button
   */
  iconAlignment?: IconAlignmentType;
  /**
   * Is high contrast
   * @deprecated as high contrast styling should be done via theme-common
   */
  isHighContrast?: boolean;
  /**
   * Indicates if the button should listen when the user press Enter key
   * @deprecated as button already listen to Enter Press by default. Do not use this.
   */
  listenEnterPress?: boolean;
}

export type ButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, "onClick">;

export type IconButtonProps =
  | HTMLProps<HTMLButtonElement>
  | {
      size?: IconButtonSize;
    };
