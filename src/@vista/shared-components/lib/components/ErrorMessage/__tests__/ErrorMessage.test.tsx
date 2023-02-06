import { render, screen } from "@testing-library/react";

import NoRecords from "../../../assets/images/noRecords.svg";

import ErrorMessage from "..";

describe("Error component test", () => {
  const props = {
    heading: "test-heading",
    subHeading: "test-sub-heading",
    errorLogo: <img src={(<NoRecords />) as any} alt="" />,
  };

  it("renders error message component", () => {
    render(<ErrorMessage {...props} />);
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  it("render heading for error component", () => {
    render(<ErrorMessage {...props} />);
    expect(screen.getByText("test-heading")).toBeVisible();
  });

  it("render sub-heading for error component", () => {
    render(<ErrorMessage {...props} />);
    expect(screen.getByText("test-sub-heading")).toBeVisible();
  });

  it("render error logo for error component", () => {
    render(<ErrorMessage {...props} />);
    expect(screen.getByTestId("icn-error-logo")).toBeInTheDocument();
  });

  it("render custom styles for error heading and subheading component", () => {
    render(
      <ErrorMessage
        {...props}
        headingStyles={{ fontSize: "16px" }}
        subHeadingStyles={{ color: "green" }}
      />
    );

    expect(screen.getByText("test-heading")).toHaveStyle("font-size: 16px");
    expect(screen.getByText("test-sub-heading")).toHaveStyle("color: green");
  });
});
