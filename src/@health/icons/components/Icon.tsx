import * as React from "react";
import icons from "../icons";
import withContainer from "./withContainer";
import { IconContainerProps } from "../interfaces";
import { warnDeprecated } from "../shared/utils";
/**
 * Icons can wrap a Badge component to show extra information.
 */
const Icon = ({ name, ...props }: IconContainerProps) => {
  const Component = icons[name as string];
  if (Component) {
    warnDeprecated(
      [name, "statusErrorLarge", "statusError"],
      [name, "statusErrorMedium", "statusError"],
      [name, "statusErrorSmall", "statusError"],
      [name, "statusInfoLarge", "statusInfo"],
      [name, "statusInfoMedium", "statusInfo"],
      [name, "statusInfoSmall", "statusInfo"],
      [name, "statusSuccessLarge", "statusSuccess"],
      [name, "statusSuccessMedium", "statusSuccess"],
      [name, "statusSuccessSmall", "statusSuccess"],
      [name, "statusTipsLarge", "statusTips"],
      [name, "statusTipsMedium", "statusTips"],
      [name, "statusTipsSmall", "statusTips"],
      [name, "statusWarningLarge", "statusWarning"],
      [name, "statusWarningMedium", "statusWarning"],
      [name, "statusWarningSmall", "statusWarning"],
    );
    const NamedIcon = withContainer(Component);
    return <NamedIcon {...props} name={name} />;
  } else {
    return null;
  }
};

export default Icon;
