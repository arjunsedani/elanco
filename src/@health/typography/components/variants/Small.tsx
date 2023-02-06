import * as React from "react";

import { TypographyProps } from "../../interfaces/Typography";
import BaseFont from "./BaseFont";

export const smallVariants = ["small"];

export type SmallVariants = typeof smallVariants[number];

export type SmallProps = TypographyProps<SmallVariants>;

const Small = (
  {
    variant,
    gutterBottom = true,
    color,
    fontWeight,
    inline = false,
    style = {},
    ...props
  } = {} as SmallProps
) => {
  style = Object.assign({}, style, { color, fontWeight });
  switch (variant) {
    default:
      return (
        <BaseFont
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );
  }
};

export default Small;
