import * as React from "react";
import { styled } from "@health/theme-common";
import { IconContainerProps, StyledSvgProps } from "../interfaces";

const Container = styled("div")`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  position: relative;
  .webstudio-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;

function withContainer(
  Component: React.ForwardRefExoticComponent<StyledSvgProps>,
) {
  return ({
    name,
    stroke,
    fill,
    children,
    passedRef,
    className,
    onClick,
    ...rest
  }: IconContainerProps) => {
    return (
      <Container
        data-testid={`${name}_icon`}
        className={className}
        {...rest}
        ref={passedRef}
        role={onClick ? "button" : undefined}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        <Component fill={fill} stroke={stroke} />
        {children}
      </Container>
    );
  };
}

export default withContainer;
