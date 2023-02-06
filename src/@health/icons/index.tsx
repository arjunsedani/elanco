import * as React from "react";
import BaseIcon from "./components/Icon";
import withContainer from "./components/withContainer";
import { StyledSVG } from "./components/styled";

import icons from "./icons";

// We typed IconContainerProps as IconProps for backward compatibility purpose
import { IconContainerProps as IconProps } from "./interfaces";

type IconContainerProps = IconProps;
const Icon = React.forwardRef((props: IconContainerProps, ref) => (
  <BaseIcon {...props} passedRef={ref} />
));

export {
  type IconProps, // We typed IconContainerProps as IconProps for backward compatibility purpose
  icons,
  withContainer,
  StyledSVG,
};
export default Icon;
