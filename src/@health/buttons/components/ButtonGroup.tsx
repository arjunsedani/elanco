import * as React from "react";
import { styled } from "@health/theme-common";
import classNames from "classnames";

import { ButtonGroupProps } from "../interfaces/ButtonGroupProps";

const ButtonGroupWrapper = styled.div`
  margin: 0 0.5rem 0.5rem 0;
  width: fit-content;

  button {
    display: inline-block;
    margin: 0px;
  }
  button:not(:first-child):not(:last-child) {
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
  button:first-child {
    border-radius: 4px 0px 0px 4px;
    border-right: none;
  }
  button:last-child {
    border-radius: 0px 4px 4px 0px;
    border-left: none;
  }
`;

const ButtonGroup = (props: ButtonGroupProps) => {
  const classes = classNames("button-group", props.className);

  return (
    <ButtonGroupWrapper data-testid={props["data-testid"]} className={classes}>
      {props.children}
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
