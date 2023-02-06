export interface IconProps {
  /**
   * Override the icon colour altogether
   *
   *  @default #fff
   */
  fill?: string;
  /**
   * Override the icon stroke color altogether
   *
   * @default #9BA4AB
   *
   */
  stroke?: string;
  
}

export interface StyledSvgProps
  extends IconProps,
    React.SVGAttributes<SVGSVGElement> {
  useFillColorOnly?: boolean;
}

export interface IconContainerProps
  extends IconProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Name of the icon. Refer to documentation to find the name.
   */
  name?: string;

  passedRef?: any;
}

export interface IconPreviewProps extends IconContainerProps {
  name: string;
}
