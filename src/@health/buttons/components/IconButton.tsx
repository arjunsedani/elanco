import { styled, prop } from "@health/theme-common";
import { IconButtonProps } from "../interfaces/ButtonProps";

const IconButton = styled.button<IconButtonProps>`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: ${prop("border_radius_m")};
  height: 32px;
  width: 32px;
  path {
    fill: ${prop("color_slate70")};
  }
  font-size: ${prop("font_size_base")};
  color: ${prop("color_slate50")};
  :active {
    background-color: ${prop("color_gray05")};
  }
  :focus {
    background-color: transparent;
    border: 2px solid ${prop("color_status_access")};
  }
  :hover:not([disabled]) {
    cursor: pointer;
  }
  :hover:not(:focus):not([disabled]) {
    background-color: ${prop("color_gray03")};
  }
  :disabled
  {
    background-color: ${prop("color_slate10")};
    path {
      fill: ${prop("color_slate30")};
    }
  }
  
  ${(props: IconButtonProps) =>
    props.size === "tiny" &&
    `
    width: 24px;
    height: 24px;
    > svg {
    width: 16px;
    height: 16px;
  }`}
  ${(props: IconButtonProps) =>
    props.size === "small" &&
    `
    padding: 4px;
    > svg {
    width: 24px;
    height: 24px;  
  }`}
  ${(props: IconButtonProps) =>
    props.size === "medium" &&
    `
    height: 40px;
    width: 40px;
    padding: 8px;
    > svg {
      width: 24px;
      height: 24px;
  }`}
  ${(props: IconButtonProps) =>
    props.size === "large" &&
    `
    height: 48px;
    width: 48px;
    padding: 12px;
    > svg {
      width: 24px;
      height: 24px;
  }`}
`;

export default IconButton;
