import { fireEvent, render, screen, waitFor } from "@testing-library/react";


import ScrollToTopButton from "../ScrollToTopButton";

const scrollToSpy = jest.fn();
global.scrollTo = scrollToSpy;


describe("<ScrollToTopButton />", () => {
  it("should make up arrow visible when showButton is true", () => {
    render(<ScrollToTopButton showButton={true} />);

    expect(screen.getByRole("button")).toBeVisible();
  });

  it("should make up arrow invisible when showButton is false", () => {
    render(<ScrollToTopButton showButton={false} />);

    expect(screen.queryByTestId("scroll-to-top-button")).not.toBeVisible();
  });

  it("should scroll window to top when clicked", () => {
    render(<ScrollToTopButton showButton={true} />);

    fireEvent.click(screen.getByRole("button"));

    expect(scrollToSpy).toBeCalledTimes(1);
    expect(scrollToSpy).toBeCalledWith({ top: 0, behavior: "smooth" });
  });

  it("should scroll html element to top when clicked", () => {
    const mockElement = document.createElement("div");
    const ref = { current: mockElement };
    const elementScrollToSpy = jest.fn();
    ref.current.scrollTo = elementScrollToSpy;
    render(<ScrollToTopButton elementRef={ref} showButton={true} />);

    fireEvent.click(screen.getByRole("button"));

    expect(elementScrollToSpy).toBeCalledTimes(1);
    expect(elementScrollToSpy).toBeCalledWith({ top: 0, behavior: "smooth" });
  });

  it("should not call trackClickEvent when trackScrollTopButtonName is empty", async () => {
    render(<ScrollToTopButton showButton={true} />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(async () => {
      expect(Dispatcher.dispatch).not.toHaveBeenCalled();
    });
  });

  it("should call trackClickEvent with button name when trackScrollTopButtonName is not empty", async () => {
    render(
      <ScrollToTopButton
        showButton={true}
        trackScrollTopButtonName={"scrollToTopButton"}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    await waitFor(async () => {
      expect(Dispatcher.dispatch).toHaveBeenCalledWith(
        "click-event",
        "scrollToTopButton"
      );
    });
  });
});
