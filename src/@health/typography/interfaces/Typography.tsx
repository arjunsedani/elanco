import React from "react";

export type TypoType = "primary" | "success" | "warning" | "danger" | "info";

export interface TypographyProps<T>
  extends React.HTMLAttributes<HTMLHeadElement> {
  /**
   * variant as 'title' | 'base' | 'baseSM' | 'sm' | 'footnote' | 'tiny' | 'pBase' | 'pBaseSM' | 'pSM' | 'pFootnote"
   *
   * @default "base"
   *
   */
  variant?: T;
  /**
   * color in string[prefer hex color]
   */
  color?: string;
  /**
   * make typograpghy inline default will block
   */
  inline?: boolean;
  /**
   * add margin bottom [default true for title, para]
   * @default true
   */
  gutterBottom?: boolean;
  /**
   * font weight
   */
  fontWeight?: string | number;
  /**
   * @TypoType as 'primary' | 'success' | 'warning' | 'danger' | 'info'
   */
  type?: TypoType;
}
