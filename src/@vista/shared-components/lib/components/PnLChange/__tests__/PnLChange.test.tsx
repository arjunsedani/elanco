import { render, screen } from "@testing-library/react";
import { CSSProperties } from "react";

import PnLChange from "../";

describe("PnLChange tests", () => {
  const props = {
    testId: "pnl-change-test-id",
    increment: true,
    currencyCode: { value: "USD", size: "14px" },
    price: { value: 945.45, size: "16px" },
    changePercent: {
      value: 11.11,
      size: "16px",
    },
  };

  it("renders pnlchange component (all components present)", () => {
    render(<PnLChange {...props} />);
    expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
    expect(
      screen.getByTestId("pnl-change-test-id-flex-container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("pnl-change-test-id-price-container")
    ).toBeInTheDocument();
    expect(screen.getByTestId("pnl-change-test-id-ticker")).toBeInTheDocument();
    expect(
      screen.getByTestId("pnl-change-test-id-currency")
    ).toBeInTheDocument();
    expect(screen.getByTestId("pnl-change-test-id-price")).toBeInTheDocument();
    expect(
      screen.getByTestId("pnl-change-test-id-percent-change")
    ).toBeInTheDocument();
  });

  it("renders pnlchange component with content (all components present)", () => {
    render(<PnLChange {...props} />);
    expect(screen.getByText("USD")).toBeVisible();
    expect(screen.getByText("945.45")).toBeVisible();
    expect(screen.getByText("(+11.11%)")).toBeVisible();

    expect(screen.queryByText("-")).not.toBeInTheDocument();
  });

  it("should render container with the styling when given containerStyle prop", function () {
    const newProps = {
      ...props,
      styleObj: {
        containerStyle: {
          justifyContent: "center",
        },
      },
    };
    render(<PnLChange {...newProps} />);
    expect(screen.getByTestId("pnl-change-test-id")).toHaveStyle(
      "justifyContent: center"
    );
  });

  it("should render container with the styling when given percentCompStyle prop", function () {
    const newProps = {
      ...props,
      styleObj: {
        changePercentStyle: { color: "#000" },
      },
    };
    render(<PnLChange {...newProps} />);
    expect(screen.getByTestId("pnl-change-test-id-percent-change")).toHaveStyle(
      "color: rgb(0, 0, 0)"
    );
  });

  it("should render price container with the styling when given priceContainerStyle prop", function () {
    const newProps = {
      ...props,
      styleObj: {
        priceContainerStyle: {
          alignItems: "flex-end",
        },
      },
    };
    render(<PnLChange {...newProps} />);
    expect(
      screen.getByTestId("pnl-change-test-id-price-container")
    ).toHaveStyle("alignItems: flex-end");
  });

  it("should render container with the styling when given flexStyle prop", function () {
    const newProps = {
      ...props,
      styleObj: {
        flexStyle: {
          flexWrap: "wrap",
        } as CSSProperties,
      },
    };
    render(<PnLChange {...newProps} />);
    expect(screen.getByTestId("pnl-change-test-id-flex-container")).toHaveStyle(
      "flexWrap: wrap"
    );
  });

  describe("default pnl component colors", function () {
    const greenColor = "color: rgb(12, 131, 99)";
    const redColor = "color: rgb(255, 62, 62)";
    const defaultPriceColor = "color: rgb(23, 39, 51)";
    const defaultPercentChangeColor = "color: rgb(133, 143, 150)";

    it.each([true, false, undefined])(
      "should have default colors when increment is undefined and toggleColor is %s",
      function (toggleColor) {
        const updatedProps = {
          ...props,
          toggleColor,
          increment: undefined,
        };
        render(<PnLChange {...updatedProps} />);

        expect(screen.getByTestId("pnl-change-test-id-price")).toHaveStyle(
          defaultPriceColor
        );
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toHaveStyle(defaultPercentChangeColor);
      }
    );

    describe("toggleColor is undefined / false", function () {
      it("should have default green color when increment is true", function () {
        const updatedProps = { ...props, increment: true };
        render(<PnLChange {...updatedProps} />);

        expect(screen.getByTestId("pnl-change-test-id-ticker")).toHaveStyle(
          greenColor
        );
        expect(screen.getByTestId("pnl-change-test-id-price")).toHaveStyle(
          greenColor
        );
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toHaveStyle(greenColor);
      });

      it("should have default red color when increment is false", function () {
        const updatedProps = { ...props, increment: false };
        render(<PnLChange {...updatedProps} />);

        expect(screen.getByTestId("pnl-change-test-id-ticker")).toHaveStyle(
          redColor
        );
        expect(screen.getByTestId("pnl-change-test-id-price")).toHaveStyle(
          redColor
        );
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toHaveStyle(redColor);
      });
    });

    describe("toggleColor is true", function () {
      it("should have default green color when increment is false", function () {
        const updatedProps = { ...props, toggleColor: true, increment: false };
        render(<PnLChange {...updatedProps} />);

        expect(screen.getByTestId("pnl-change-test-id-ticker")).toHaveStyle(
          greenColor
        );
        expect(screen.getByTestId("pnl-change-test-id-price")).toHaveStyle(
          greenColor
        );
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toHaveStyle(greenColor);
      });

      it("should have default red color when increment is true", function () {
        const updatedProps = { ...props, toggleColor: true, increment: true };
        render(<PnLChange {...updatedProps} />);

        expect(screen.getByTestId("pnl-change-test-id-ticker")).toHaveStyle(
          redColor
        );
        expect(screen.getByTestId("pnl-change-test-id-price")).toHaveStyle(
          redColor
        );
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toHaveStyle(redColor);
      });
    });
  });

  describe("changePercent", function () {
    it.each([true, undefined])(
      "renders pnlchange component with percent change when showPercentage is %s",
      (showPercentage) => {
        const updatedProps = { ...props, showPercentage };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-flex-container")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-price-container")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-ticker")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-currency")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-price")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toBeInTheDocument();
      }
    );

    it("renders pnlchange component without percent change when showPercentage is false", () => {
      const updatedProps = { ...props, showPercentage: false };
      render(<PnLChange {...updatedProps} />);
      expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-flex-container")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price-container")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-ticker")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-currency")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price")
      ).toBeInTheDocument();
      expect(
        screen.queryByTestId("pnl-change-test-id-percent-change")
      ).not.toBeInTheDocument();
    });

    describe("displayNumericValuesAsIs === false, undefined (default)", function () {
      it("renders pnlchange component with decimals when percentage change has decimal", () => {
        const updatedProps = { ...props, changePercent: { value: "10.9001" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(+10.9001%)")).toBeVisible();
      });

      it("renders pnlchange component with 2dp when percentage change has 1dp", () => {
        const updatedProps = { ...props, changePercent: { value: "10.90000" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(+10.90%)")).toBeVisible();
      });

      it("renders pnlchange component with 2dp when percentage change has no dp", () => {
        const updatedProps = { ...props, changePercent: { value: "10" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(+10.00%)")).toBeVisible();
      });

      it("renders pnlchange component with negative percentage change", () => {
        const updatedProps = { ...props, increment: false };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(-11.11%)")).toBeVisible();
      });

      it("renders pnlchange component with comma separator when percentage change is large", () => {
        const updatedProps = { ...props, changePercent: { value: "10238" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(+10,238.00%)")).toBeVisible();
      });

      it.each(["10,238", undefined, "100,0", "hi"])(
        "renders pnlchange component with dash when percentage change is %s",
        (value) => {
          const updatedProps = {
            ...props,
            changePercent: { value },
            increment: true,
          };
          // @ts-ignore
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText("-")).toBeVisible();
          expect(screen.queryByText("(")).not.toBeInTheDocument();
          expect(screen.queryByText("+")).not.toBeInTheDocument();
          expect(screen.queryByText("%")).not.toBeInTheDocument();
          expect(screen.queryByText(")")).not.toBeInTheDocument();
        }
      );

      it("renders pnlchange component with null.00 when percentage change is null", () => {
        const updatedProps = {
          ...props,
          changePercent: { value: null },
          increment: true,
        };
        // @ts-ignore
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("(+null.00%)")).toBeVisible();
      });

      it.each(["", " ", "0"])(
        "renders pnlchange component with 0.00 when percentage change is %s",
        (value) => {
          const updatedProps = {
            ...props,
            changePercent: { value },
            increment: true,
          };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText("(+0.00%)")).toBeVisible();
        }
      );
    });

    describe("displayNumericValuesAsIs === true", function () {
      it.each([
        "10",
        "10238",
        "10,238",
        "10,238.000",
        "10,238.900",
        "10,238.9001",
        "blah",
      ])(
        "renders pnlchange component as is with plus symbol when percentage change is %s",
        (value: string) => {
          const updatedProps = {
            ...props,
            displayNumericValuesAsIs: true,
            changePercent: { value },
            increment: true,
          };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText(`(+${value}%)`)).toBeVisible();
        }
      );

      it.each([
        "10",
        "10238",
        "10,238",
        "10,238.000",
        "10,238.900",
        "10,238.9001",
        "blah",
      ])(
        "renders pnlchange component as is with minus symbol when percentage change is %s",
        (value: string) => {
          const updatedProps = {
            ...props,
            displayNumericValuesAsIs: true,
            changePercent: { value },
            increment: false,
          };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText(`(-${value}%)`)).toBeVisible();
        }
      );

      it.each([
        "10",
        "10238",
        "10,238",
        "10,238.000",
        "10,238.900",
        "10,238.9001",
        "blah",
      ])(
        "renders pnlchange component as is with no symbol when percentage change is %s",
        (value: string) => {
          const updatedProps = {
            ...props,
            displayNumericValuesAsIs: true,
            changePercent: { value },
            increment: undefined,
          };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText(`(${value}%)`)).toBeVisible();
        }
      );

      it.each(["", "-", " ", null, undefined])(
        "renders pnlchange component as dash with no symbol when percentage change is %s",
        (value) => {
          const updatedProps = {
            ...props,
            displayNumericValuesAsIs: true,
            changePercent: { value },
            increment: true,
          };
          // @ts-ignore
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText("-")).toBeVisible();
          expect(screen.queryByText("(")).not.toBeInTheDocument();
          expect(screen.queryByText("+")).not.toBeInTheDocument();
          expect(screen.queryByText("%")).not.toBeInTheDocument();
          expect(screen.queryByText(")")).not.toBeInTheDocument();
        }
      );
    });
  });

  describe("currency", function () {
    const updatedProps = {
      ...props,
      currencyCode: { value: "", size: "14px" },
    };

    it("renders pnlchange component without currency", () => {
      render(<PnLChange {...updatedProps} />);
      expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-flex-container")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price-container")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-ticker")
      ).toBeInTheDocument();
      expect(
        screen.queryByTestId("pnl-change-test-id-currency")
      ).not.toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-percent-change")
      ).toBeInTheDocument();
    });

    it("should not render currency when currencyCode value is empty", function () {
      render(<PnLChange {...updatedProps} />);
      expect(screen.queryByText("USD")).not.toBeInTheDocument();
      expect(screen.queryByText("-")).not.toBeInTheDocument();
    });

    it("should render currency as dash when currencyCode value is dash", function () {
      const updatedProps = {
        ...props,
        currencyCode: { value: "-", size: "14px" },
      };
      render(<PnLChange {...updatedProps} />);
      expect(screen.getByText("-")).toBeInTheDocument();
    });

    it("should render currency as uppercase when currencyCode value is lowercase", function () {
      const updatedProps = {
        ...props,
        currencyCode: { value: "hI", size: "14px" },
      };
      render(<PnLChange {...updatedProps} />);
      expect(screen.getByTestId("pnl-change-test-id-currency")).toHaveStyle(
        "text-transform: uppercase"
      );
    });
  });

  describe("ticker", function () {
    it.each([true, false])(
      "renders pnlchange component with ticker when increment is %s",
      (increment) => {
        const updatedProps = { ...props, increment };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-flex-container")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-price-container")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-ticker")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-currency")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-price")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("pnl-change-test-id-percent-change")
        ).toBeInTheDocument();
      }
    );

    it("renders pnlchange component without ticker when increment is undefined", () => {
      const updatedProps = { ...props, increment: undefined };
      render(<PnLChange {...updatedProps} />);
      expect(screen.getByTestId("pnl-change-test-id")).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-flex-container")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price-container")
      ).toBeInTheDocument();
      expect(
        screen.queryByTestId("pnl-change-test-id-ticker")
      ).not.toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-currency")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-price")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("pnl-change-test-id-percent-change")
      ).toBeInTheDocument();
    });
  });

  describe("price", function () {
    describe("displayNumericValuesAsIs === false, undefined (default)", function () {
      it.each(["10", "10,000", "10,0", "blah", null, undefined])(
        "renders pnlchange component as is with 2dp when price is %s",
        (value) => {
          const updatedProps = {
            ...props,
            price: { value },
          };
          // @ts-ignore
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText(`${value}.00`)).toBeVisible();
        }
      );

      it("renders pnlchange component with comma separator with 2dp when price is large", () => {
        const updatedProps = { ...props, price: { value: "10000" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("10,000.00")).toBeVisible();
      });

      it("renders pnlchange component as is with 2dp when price has 1dp", () => {
        const updatedProps = { ...props, price: { value: "10.9" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("10.90")).toBeVisible();
      });

      it("renders pnlchange component as is with decimals when price has decimals", () => {
        const updatedProps = { ...props, price: { value: "10.9001" } };
        render(<PnLChange {...updatedProps} />);
        expect(screen.getByText("10.9001")).toBeVisible();
      });

      it.each(["", " ", "0"])(
        "renders pnlchange component with 0.00 when price is %s",
        (value) => {
          const updatedProps = { ...props, price: { value }, increment: true };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText("0.00")).toBeVisible();
        }
      );
    });

    describe("displayNumericValuesAsIs === true", function () {
      it.each(["10", "10000", "10,000", "10,0", "blah"])(
        "renders pnlchange component as is when price is %s",
        (value) => {
          const updatedProps = {
            ...props,
            price: { value },
            displayNumericValuesAsIs: true,
          };
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText(value)).toBeVisible();
          expect(screen.queryByText(".00")).not.toBeInTheDocument();
        }
      );

      it.each(["", "-", " ", null, undefined])(
        "renders pnlchange component with dash when price is an invalid number when displayNumericValuesAsIs is true",
        (value) => {
          const updatedProps = {
            ...props,
            price: { value },
            displayNumericValuesAsIs: true,
          };
          // @ts-ignore
          render(<PnLChange {...updatedProps} />);
          expect(screen.getByText("-")).toBeVisible();
          expect(screen.queryByText(".00")).not.toBeInTheDocument();
        }
      );
    });
  });
});
