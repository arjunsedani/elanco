import * as React from "react";

import { TypographyProps } from "../../interfaces/Typography";
import BaseFont from "./BaseFont";
import { Tokens, styled } from "../../tokens";
export const paragraphVariants = ["pBase", "pBaseSM", "p", "pSM", "pFootnote"];

export type ParagraphVariants = typeof paragraphVariants[number];

export type ParagraphProps = TypographyProps<ParagraphVariants>;

export const PBase = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.paragraph.fontSize};
  line-height: 24px;
  font-weight: ${Tokens.paragraph.fontWeight};
`;

export const PBaseSM = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.paragraph.baseSmall.fontSize};
  line-height: 20px;
  font-weight: ${Tokens.paragraph.fontWeight};
`;

export const PSM = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.paragraph.small.fontSize};
  line-height: 16px;
  font-weight: ${Tokens.paragraph.fontWeight};
`;

export const PFootnote = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.paragraph.footnote.fontSize};
  line-height: 16px;
  font-weight: ${Tokens.paragraph.fontWeight};
`;

const Paragraph = (
  {
    variant,
    gutterBottom = true,
    color,
    fontWeight,
    inline = false,
    style = {},
    ...props
  } = {} as ParagraphProps
) => {
  style = Object.assign({}, style, { color, fontWeight });
  switch (variant) {
    case "pBase":
      return (
        <PBase
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );
    case "pBaseSM":
      return (
        <PBaseSM
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );
    case "pSM":
      return (
        <PSM
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );
    case "pFootnote":
      return (
        <PFootnote
          {...props}
          style={style}
          gutterBottom={gutterBottom}
          inline={inline}
        />
      );
    case "p":
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

export default Paragraph;
