import themeCommon, { styled } from "@health/theme-common";

import { FailedServices } from "../../../models/enums";
import {
  formatNumber,
  isValidNumeral,
  retrieveNumerals,
} from "../../../utils/NumberUtil";

import { greenAlt } from "../../PnLChange/styled.component";
import {
  UnrealisedPLField,
  UnrealisedPLMarker,
} from "../../Table/styled.component";
import {
  CellCurrencyText,
  CellPrimaryText,
  CellSecondaryText,
} from "../styled.component";

type UnrealisedPLCellProps = {
  unrealisePLPercentage: string;
  unrealisePL: string;
  failedServices: FailedServices[];
  plCurrencyText: string;
  cellWidth?: string;
  dataTestId?: string;
  toggleColor?: boolean;
};

const UnrealisedPLCellWrapper = styled.div<{
  cellWidth?: string;
}>`
  ${({ cellWidth }) => cellWidth && `width: ${cellWidth};`}
`;

const UnrealisedPLCellTemplate = ({
  toggleColor = false,
  unrealisePLPercentage,
  unrealisePL,
  failedServices,
  cellWidth,
  dataTestId,
  plCurrencyText,
}: UnrealisedPLCellProps) => {
  const unRealisedPercentageBlank = !isValidNumeral(unrealisePLPercentage);
  const unRealisedBlank = !isValidNumeral(unrealisePL);

  const neutral =
    !unRealisedPercentageBlank && retrieveNumerals(unrealisePLPercentage) === 0;
  const gain =
    !unRealisedPercentageBlank &&
    !neutral &&
    retrieveNumerals(unrealisePLPercentage) > 0;

  const mdfServiceFailed = failedServices?.indexOf(FailedServices.MDF) !== -1;

  const getFontColor = () => {
    if (
      !mdfServiceFailed &&
      (!unRealisedBlank || unRealisedPercentageBlank) &&
      !neutral
    ) {
      if ((gain && !toggleColor) || (!gain && toggleColor)) return greenAlt;
      return themeCommon().color_status_danger;
    }

    return "";
  };

  const gainLossIcon =
      !mdfServiceFailed && !unRealisedBlank && !neutral
        ? gain
          ? "▲"
          : "▼"
        : "",
    fontColor = getFontColor();
  return (
    <UnrealisedPLCellWrapper cellWidth={cellWidth} data-testid={dataTestId}>
      <UnrealisedPLField data-testid="unrealized-pnl-currency">
        <UnrealisedPLMarker {...{ fontColor }}>
          {gainLossIcon}
        </UnrealisedPLMarker>
        <CellCurrencyText customStyles={{ paddingRight: "4px" }}>
          {!mdfServiceFailed && !unRealisedBlank ? plCurrencyText : ""}
        </CellCurrencyText>
        <CellPrimaryText customStyles={{ color: fontColor }}>
          {!mdfServiceFailed && !unRealisedBlank
            ? formatNumber(unrealisePL)
            : "-"}
        </CellPrimaryText>
      </UnrealisedPLField>
      <div>
        <CellSecondaryText
          customStyles={{
            paddingLeft: "5px",
            color: fontColor,
          }}
        >
          {!mdfServiceFailed && !unRealisedPercentageBlank
            ? `${gain ? "+" : ""}${formatNumber(unrealisePLPercentage)}%`
            : "-"}
        </CellSecondaryText>
      </div>
    </UnrealisedPLCellWrapper>
  );
};

export default UnrealisedPLCellTemplate;
