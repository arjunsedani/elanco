import * as React from "react";
import Icon from "../../index";
import { renderWithTheme } from "../../testUtils/renderWithTheme";

describe("Icons component", () => {
  it("should able to render icons", () => {
    const { container } = renderWithTheme(<Icon name="home" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });
  it("should not able to render icons", () => {
    const { container } = renderWithTheme(<Icon name="something_not_exits" />);
    expect(container.querySelector("svg")).toBeNull();
  });
  it("should able to render fill icons", () => {
    const { container } = renderWithTheme(
      <Icon name={"home"} color={"#000000"} />,
    );
    expect(container.querySelector("svg")).toBeTruthy();
  });
  it("should able to render filled icons", () => {
    const { container } = renderWithTheme(<Icon name={"home"} fill="red" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });
  it("should able to render onclick icons", async () => {
    const mockedOnClick = jest.fn();
    const { getByTestId, user } = renderWithTheme(
      <Icon name={"home"} fill="red" onClick={mockedOnClick} stroke="red" />,
    );
    const icon = getByTestId("home_icon");
    await user.click(icon);
    expect(mockedOnClick).toBeCalled();
  });
  it("should render fill color only for icons with useFillColorOnly prop", () => {
    const { container } = renderWithTheme(
      <Icon name="home" stroke="red" fill="blue" />,
    );
    expect(container.querySelector("path")).toHaveStyle("fill: red");
  });
  it("should render stroke and fill color for icons without useFillColorOnly prop", () => {
    const { container } = renderWithTheme(
      <Icon name="statusTips" stroke="red" fill="blue" />,
    );
    expect(container.querySelector("path")).toHaveStyle({
      stroke: "red",
      fill: "blue",
    });
  });
});
