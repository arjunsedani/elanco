import * as React from "react";
import userEvent from "@testing-library/user-event";

import BackIcon from "@health/icons/icons/chevronLeft";
import IconButton from "../IconButton";
import {
  renderWithTheme,
  renderWithDesignToken,
} from "../../testUtils/renderWithTheme";

const themeArray = [renderWithTheme, renderWithDesignToken];

describe("IconButton", () => {
  themeArray.forEach((theme) => {
    it("should match the snapshot", () => {
      const { container } = theme(
        <div>
          <IconButton>
            <BackIcon />
          </IconButton>
          <IconButton disabled>
            <BackIcon />
          </IconButton>
          <IconButton size="tiny">
            <BackIcon />
          </IconButton>
          <IconButton size="small">
            <BackIcon />
          </IconButton>
          <IconButton size="medium">
            <BackIcon />
          </IconButton>
          <IconButton size="large">
            <BackIcon />
          </IconButton>
        </div>
      );
      expect(container).toMatchSnapshot();
    });

    it("should call onclick function when click on button", () => {
      const mockOnclick = jest.fn();
      const { getByTestId } = theme(
        <IconButton data-testid="btn" onClick={mockOnclick}>
          <BackIcon />
        </IconButton>
      );
      const btn = getByTestId("btn");
      userEvent.click(btn);
      expect(mockOnclick).toHaveBeenCalledTimes(1);
    });

    it("should not call onclick function when click on disabled button", () => {
      const mockOnclick = jest.fn();
      const { getByTestId } = theme(
        <IconButton data-testid="btn" disabled onClick={mockOnclick}>
          <BackIcon />
        </IconButton>
      );
      const btn = getByTestId("btn");
      userEvent.click(btn);
      expect(mockOnclick).not.toHaveBeenCalled();
    });
  });
});
