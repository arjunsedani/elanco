import React from "react";

import { TypographyProps } from "../interfaces/Typography";
import Title, { TitleVariants, titleVariants } from "./variants/Title";
import Text, { TextVariants, textVariants } from "./variants/Text";
import Small, { SmallVariants, smallVariants } from "./variants/Small";
import Paragraph, {
  ParagraphVariants,
  paragraphVariants,
} from "./variants/Paragraph";

export type TypographyType = TypographyProps<
  TitleVariants | TextVariants | SmallVariants | ParagraphVariants
>;

const Typography = ({ variant, ...props }:TypographyType) => {
  if (variant && titleVariants.includes(variant))
    return <Title variant={variant} {...props} />;
  else if (variant && textVariants.includes(variant))
    return <Text variant={variant} {...props} />;
  else if (variant && smallVariants.includes(variant))
    return <Small variant={variant} {...props} />;
  else if (variant && paragraphVariants.includes(variant))
    return <Paragraph variant={variant} {...props} />;
  else {
    // default return default title
    return <Title {...props} />;
  }
};

export default Typography;
