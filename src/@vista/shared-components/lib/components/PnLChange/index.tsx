import { CSSProperties } from "react";

import { colors } from "@health/theme-common";

import { getDecimalAndFraction } from "../../utils/NumberUtil";

import {
  ChangeContainer,
  ChangePercent,
  Currency,
  FlexContainer,
  greenAlt,
  Price,
  Ticker,
} from "./styled.component";

export type PriceItem = {
  value: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  size?: any;
  fontWeight?: string;
};

export type PnLItem = {
  value: number | string;
  size?: any;
  fontWeight?: string;
};

export interface PnLChangeProps {
  testId?: string;
  increment?: boolean;
  currencyCode: PnLItem;
  ccyTag?: {
    size?: string;
  };
  price: PriceItem;
  changePercent?: PnLItem;
  flexDirection?: string;
  showPercentage?: boolean;
  styleObj?: {
    changePercentStyle?: CSSProperties;
    containerStyle?: CSSProperties;
    priceContainerStyle?: CSSProperties;
    flexStyle?: CSSProperties;
  };
  isDefaultValue?: boolean;
  toggleColor?: boolean;
  displayNumericValuesAsIs?: boolean;
}

enum Increment {
  PLUS = "+",
  MINUS = "-",
}

const getColor = (
  toggleColor: boolean,
  increment?: boolean
): string | undefined => {
  if (increment === undefined) {
    return undefined;
  }

  if ((increment && toggleColor) || (!increment && !toggleColor)) {
    return `${colors.color_HEALTH_primary}`;
  }

  return greenAlt;
};

const isValueUnavailable = (value: number | string): boolean => {
  if (typeof value === "number") {
    return false;
  }
  return !value || value.trim().length === 0 || value.trim() === "-";
};

const PnLChange = (props: PnLChangeProps) => {
  const {
    testId = "pnl-change-container",
    increment,
    currencyCode = {} as PnLItem,
    price = {} as PnLItem,
    changePercent = {} as PnLItem,
    showPercentage = true,
    flexDirection = "row",
    styleObj,
    ccyTag,
    toggleColor = false,
    displayNumericValuesAsIs = false,
  } = props;

  let symbol = "";
  if (increment) {
    symbol = Increment.PLUS;
  } else if (increment === false) {
    symbol = Increment.MINUS;
  }

  const { decimal, fraction } = getDecimalAndFraction(
    props.price.value,
    props.isDefaultValue
  );
  const {
    decimal: changePercentageDecimal,
    fraction: changePercentageFraction,
  } = getDecimalAndFraction(changePercent.value, props.isDefaultValue);

  const showCurrency = currencyCode.value !== "";

  const displayPriceValueOrDash = isValueUnavailable(price?.value)
    ? "-"
    : price?.value;
  const displayPercentChangeOrDash = isValueUnavailable(changePercent?.value)
    ? "-"
    : `(${symbol}${changePercent?.value}%)`;

  return (
    <ChangeContainer
      data-testid={testId}
      style={styleObj && styleObj.containerStyle}
    >
      <FlexContainer
        data-testid={`${testId}-flex-container`}
        flexDirection={flexDirection}
        style={styleObj && styleObj.flexStyle}
      >
        <div
          data-testid={`${testId}-price-container`}
          style={styleObj && styleObj.priceContainerStyle}
        >
          {increment !== undefined && (
            <Ticker
              data-testid={`${testId}-ticker`}
              size={ccyTag?.size || currencyCode.size}
              increment={increment}
              displayColor={getColor(toggleColor, increment) as string}
            />
          )}
          {showCurrency && (
            <Currency
              data-testid={`${testId}-currency`}
              size={currencyCode.size}
            >
              {currencyCode.value}
            </Currency>
          )}
          <Price
            data-testid={`${testId}-price`}
            size={price.size}
            fontWeight={price.fontWeight}
            displayColor={
              getColor(toggleColor, increment) ?? colors.color_slate110
            }
          >
            {displayNumericValuesAsIs
              ? displayPriceValueOrDash
              : `${decimal}.${fraction || "00"}`}
          </Price>
        </div>
        {showPercentage && (
          <ChangePercent
            data-testid={`${testId}-percent-change`}
            size={changePercent.size}
            fontWeight={changePercent.fontWeight}
            displayColor={
              getColor(toggleColor, increment) ?? colors.color_slate60
            }
            style={styleObj && styleObj.changePercentStyle}
          >
            {displayNumericValuesAsIs
              ? displayPercentChangeOrDash
              : isNaN(Number(changePercent?.value))
              ? "-"
              : `(${symbol}${changePercentageDecimal}.${
                  changePercentageFraction || "00"
                }%)`}
          </ChangePercent>
        )}
      </FlexContainer>
    </ChangeContainer>
  );
};

export default PnLChange;
