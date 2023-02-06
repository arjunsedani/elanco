import { styled } from "@health/theme-common";

import { CellPrimaryText } from "../styled.component";

type TradableQuantityCellProps = {
  tradableData: string;
  cellWidth?: string;
  dataTestId?: string;
};

const NumberCellWrapper = styled.div<{
  cellWidth?: string;
}>`
  ${({ cellWidth }) => cellWidth && `width: ${cellWidth};`}
`;

const TradableQuantityCellTemplate = ({
  tradableData,
  cellWidth,
  dataTestId = "lbl-tradablequantity",
}: TradableQuantityCellProps) => {
  return (
    <NumberCellWrapper cellWidth={cellWidth}>
      <CellPrimaryText data-testid={dataTestId}>
        {tradableData}
      </CellPrimaryText>
    </NumberCellWrapper>
  );
};

export default TradableQuantityCellTemplate;
