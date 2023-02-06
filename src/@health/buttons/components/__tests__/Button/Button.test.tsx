import * as React from "react";
import userEvent from "@testing-library/user-event";

import Icon from "@health/icons";
import Button from "../../Button";
import {
  renderWithTheme,
  renderWithDesignToken,
} from "../../../testUtils/renderWithTheme";

const delay = (wait: number = 100) =>
  new Promise((resolve) => {
    setTimeout(resolve, wait);
  });

const themeArray = [renderWithTheme, renderWithDesignToken];

describe("Button", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  themeArray.forEach((theme) => {
    it("match the snapshot", () => {
      const { container, getByText } = theme(
        <div>
          <Button size="small" kind="primary">
            primary
          </Button>
          <Button size="small" kind="basic">
            basic
          </Button>
          <Button size="small" kind="plain">
            plain
          </Button>
          <Button size="medium" kind="primary">
            primary
          </Button>
          <Button size="medium" kind="basic">
            basic
          </Button>
          <Button size="medium" kind="plain">
            plain
          </Button>
          <Button size="large" kind="primary">
            primary
          </Button>
          <Button size="large" kind="basic">
            basic
          </Button>
          <Button size="large" kind="plain">
            plain
          </Button>
          <Button kind="primary">primary default</Button>
          <Button kind="basic">basic default</Button>
          <Button kind="plain">plain default</Button>
          <Button kind="primary" disabled>
            primary disabled
          </Button>
          <Button kind="basic" disabled>
            basic disabled
          </Button>
          <Button kind="plain" disabled>
            plain disabled
          </Button>
          <Button kind="primary">
            <Icon name="chevronLeft" />
            <span>primary with icon</span>
          </Button>
          <Button kind="basic">
            <Icon name="chevronLeft" />
            <span>basic with icon</span>
          </Button>
          <Button kind="plain">
            <Icon name="chevronLeft" />
            <span>plain with icon</span>
          </Button>
          <Button kind="primary" icon={<Icon name="chevronLeft" />}>
            <span>with icon prop</span>
          </Button>
          <Button
            kind="primary"
            icon={<Icon name="chevronLeft" />}
            iconAlignment="right"
          >
            <span>with icon prop align right</span>
          </Button>
          <Button kind="primary" isHighContrast>
            primary highContrast
          </Button>
          <Button kind="basic" isHighContrast>
            basic highContrast
          </Button>
          <Button kind="default">default</Button>
          <Button kind="link">link</Button>
        </div>
      );

      expect(
        container.querySelector("button.primary.round.small")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.basic.round.small")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.plain.round.small")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.primary.round.medium")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.basic.round.medium")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.plain.round.medium")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.primary.round.large")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.basic.round.large")
      ).toMatchSnapshot();
      expect(
        container.querySelector("button.plain.round.large")
      ).toMatchSnapshot();
      expect(getByText("primary default")).toMatchSnapshot();
      expect(getByText("basic default")).toMatchSnapshot();
      expect(getByText("plain default")).toMatchSnapshot();
      expect(getByText("primary disabled")).toMatchSnapshot();
      expect(getByText("basic disabled")).toMatchSnapshot();
      expect(getByText("plain disabled")).toMatchSnapshot();
      expect(getByText("primary with icon")).toMatchSnapshot();
      expect(getByText("basic with icon")).toMatchSnapshot();
      expect(getByText("plain with icon")).toMatchSnapshot();
      expect(getByText("with icon prop")).toMatchSnapshot();
      expect(getByText("with icon prop align right")).toMatchSnapshot();
      expect(getByText("with icon prop")).toMatchSnapshot();
      expect(getByText("primary highContrast")).toMatchSnapshot();
      expect(getByText("basic highContrast")).toMatchSnapshot();
      expect(getByText("default")).toMatchSnapshot();
      expect(getByText("link")).toMatchSnapshot();
    });

    it("call sends click event", () => {
      const mockHandler = jest.fn();
      const { getByText } = theme(<Button onClick={mockHandler}>Btn</Button>);
      const btn = getByText("Btn");
      userEvent.click(btn);

      expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    it("not send click event when disabled", () => {
      const mockHandler = jest.fn();
      const { getByText } = theme(
        <Button onClick={mockHandler} disabled>
          Btn
        </Button>
      );
      userEvent.click(getByText("Btn"));

      expect(mockHandler).not.toHaveBeenCalled();
    });

    it("dispatches event for analytics when button is clicked", async () => {
      const mockHandler = jest.fn();
      const { getByText } = theme(<Button onClick={mockHandler}>Btn</Button>);
      userEvent.click(getByText("Btn"));
      await delay();
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    it("should click the button when user press Enter key", () => {
      const onClick = jest.fn();
      const { getByText } = theme(
        <Button onClick={onClick} listenEnterPress>
          Btn
        </Button>
      );
      const buttonItem = getByText("Btn");
      buttonItem.focus();
      userEvent.keyboard("[Enter]");
      expect(onClick).toHaveBeenCalled();
    });
  });
});
