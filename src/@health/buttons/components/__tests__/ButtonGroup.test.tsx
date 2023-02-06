import * as React from "react";

import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import { renderWithTheme } from "../../testUtils/renderWithTheme";

describe("ButtonGroup", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(
      <ButtonGroup className="my-classname" data-testid="my-testid">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    );
    expect(container).toMatchSnapshot();
  });
});
