import React from "react";
import { prop } from "@health/theme-common";

type TagBaseProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  isHighContrast?: boolean;
};
export type TagBrandProps = TagBaseProps & {
  color?: string | ReturnType<typeof prop>;
  borderColor?: string | ReturnType<typeof prop>;
};

export type TagStatusProps = TagBaseProps & {
  type?: "success" | "warning" | "info" | "critical";
};
export type TagInfoProps = TagBaseProps & {
  dismissible?: boolean;
  onDismiss?: () => void;
};
