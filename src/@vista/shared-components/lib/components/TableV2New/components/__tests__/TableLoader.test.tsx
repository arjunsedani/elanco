import { render, screen } from "@testing-library/react";

import TableLoader from "../TableLoader";

describe("<TableLoader />", () => {
  it("should show loading gif when showLoader is true", () => {
    render(<TableLoader isMobile={true} showLoader={true} tableWidth={500} />);

    expect(screen.getByAltText("loading...")).toBeInTheDocument();
    expect(screen.getByTestId("three-dot-loading")).toBeVisible();
  });

  it("should NOT show loading gif when showLoader is false", () => {
    render(<TableLoader isMobile={true} showLoader={false} tableWidth={500} />);

    expect(screen.queryByTestId("three-dot-loading")).not.toBeVisible();
  });

  it("should calculate the correct left offset value when isMobile is false", () => {
    render(
      <TableLoader isMobile={false} showLoader={false} tableWidth={500} />
    );

    expect(screen.getByTestId("loading-img")).toHaveStyle("left: 218px");
  });
});
