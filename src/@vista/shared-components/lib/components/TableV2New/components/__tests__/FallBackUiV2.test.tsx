import { render, screen } from "@testing-library/react";

import Button from "@health/buttons";

import NoRecords from "../../../../assets/images/noRecords.svg";
import ServerError from "../../../../assets/images/serverError.svg";

import { FallbackType } from "../../../../models/enums";

import FallBackUiV2 from "../FallBackUiV2";

describe("<FallBackUiV2 />", () => {
  it("should render correct title and message", () => {
    render(
      <FallBackUiV2
        errorMessage={"Some Message"}
        errorTitle={"Some Title"}
        errorType={FallbackType.ERROR}
      />
    );

    expect(screen.getByText("Some Message")).toBeInTheDocument();
    expect(screen.getByText("Some Title")).toBeInTheDocument();
  });

  it("should render correct image if type is error", () => {
    render(
      <FallBackUiV2
        errorMessage={"Some Message"}
        errorTitle={"Some Title"}
        errorType={FallbackType.ERROR}
      />
    );

    expect(screen.getByTestId("img-server-error")).toHaveAttribute(
      "src",
      ServerError
    );
  });

  it("should render correct image if type is no data", () => {
    render(
      <FallBackUiV2
        errorMessage={"Some Message"}
        errorTitle={"Some Title"}
        errorType={FallbackType.NO_DATA}
      />
    );

    expect(screen.getByTestId("img-no-records")).toHaveAttribute(
      "src",
      NoRecords
    );
  });

  it("should render correct image if type is warning", () => {
    render(
      <FallBackUiV2
        errorMessage={"Some Message"}
        errorTitle={"Some Title"}
        errorType={FallbackType.WARNING}
      />
    );

    expect(screen.getByTestId("img-warning")).toBeInTheDocument();
  });

  it("should render button when ctaButton is passed", () => {
    const buttonText = "Press here";
    render(
      <FallBackUiV2
        errorMessage={"Some Message"}
        errorTitle={"Some Title"}
        errorType={FallbackType.NO_DATA}
        ctaButton={
          <Button onClick={() => {}}>
            <span>{buttonText}</span>
          </Button>
        }
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent(buttonText);
  });
});
