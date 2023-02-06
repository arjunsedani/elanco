import * as React from "react";

import { TypographyProps } from "../../interfaces/Typography";
import BaseFont from "./BaseFont";
import { Tokens, styled } from "../../tokens";

export const textVariants = ["base", "baseSM", "sm", "footnote", "tiny"];

export type TextVariants = typeof textVariants[number];

export type TextProps = TypographyProps<TextVariants>;

export const TextBase = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.text.base.fontSize};
  line-height: 20px;
`;

export const TextBaseSM = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.text.sm.fontSize};
  line-height: 16px;
`;

export const TextSM = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.text.xs.fontSize};
  line-height: 16px;
`;

export const TextFootnote = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.text.footnote.fontSize};
  line-height: 16px;
`;

export const TextTiny = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.text.tiny.fontSize};
  line-height: 10px;
`;

const Text = (
  {
    variant,
    gutterBottom = true,
    color,
    fontWeight,
    inline = false,
    style = {},
    ...props
  } = {} as TextProps
) => {
  style = Object.assign({}, style, { color, fontWeight });
  switch (variant) {
    case "base":
      return (
        <TextBase
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );

    case "baseSM":
      return (
        <TextBaseSM
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );

    case "sm":
      return (
        <TextSM
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );

    case "footnote":
      return (
        <TextFootnote
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );

    case "tiny":
      return (
        <TextTiny
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );

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

export default Text;
