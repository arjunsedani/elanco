import { Tokens, styled } from "../../tokens";
import { TypographyType } from "../Typography";
import { TypographyProps } from "../../interfaces/Typography";

const getFontColor = (props: TypographyProps<TypographyType>) => {
  return props.type
    ? props.type === "primary"
      ? Tokens.baseFont.primary.color
      : Tokens.baseFont[props.type].color
    : props.color ?? Tokens.baseFont.color;
};

const BaseFont = styled.p<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  margin: 0;
  letter-spacing: -0.005em;
  margin-bottom: ${(p) => p.gutterBottom && "8px"};
  color: ${(p) => getFontColor(p)};
  display: ${(p) => p.inline && "inline-block"};
  font-weight: ${(p) => p.fontWeight || Tokens.baseFont.fontWeight};
  line-height: 16px;
`;

export default BaseFont;
