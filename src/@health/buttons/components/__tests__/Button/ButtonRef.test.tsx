import React from "react";
import Button from "../../Button";
import { renderWithTheme } from "../../../testUtils/renderWithTheme";

it("Testing button component by passing ref", () => {
  let myRef;
  const TestComponent = () => {
    myRef = React.useRef(null);
    return <Button ref={myRef}>Btn</Button>;
  };
  const { container } = renderWithTheme(<TestComponent />);
  expect(myRef.current).toBe(container.firstChild);
});
