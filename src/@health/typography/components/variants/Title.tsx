import * as React from "react";

import { TypographyProps } from "../../interfaces/Typography";
import BaseFont from "./BaseFont";
import { Tokens, styled } from "../../tokens";

export const titleVariants = ["title"];

export type TitleVariants = typeof titleVariants[number];

export type TitleProps = TypographyProps<TitleVariants>;

export const BaseTitle = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.title.fontSize};
  line-height: 22px;
`;

export const H1 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h1.fontSize};
  line-height: 76px;
`;

export const H2 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h2.fontSize};
  line-height: 56px;
`;

export const H3 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h3.fontSize};
  line-height: 48px;
`;

export const H4 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h4.fontSize};
  line-height: 32px;
`;

export const H5 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h5.fontSize};
  line-height: 28px;
`;

export const H6 = styled(BaseFont)<{
  gutterBottom?: boolean;
  inline?: boolean;
  color?: string;
  fontWeight?: string | number;
}>`
  font-size: ${Tokens.h6.fontSize};
  line-height: 23px;
`;

const Title = (
  {
    gutterBottom = true,
    color,
    fontWeight,
    inline = false,
    style = {},
    ...props
  } = {} as TitleProps
) => {
  style = Object.assign({}, style, { color, fontWeight });

  return (
    <BaseTitle
      {...props}
      style={style}
      gutterBottom={gutterBottom}
      inline={inline}
    />
  );
};

export default Title;
