import { css, styled } from "@health/theme-common";

import { theme } from "../../../utils/styleTheme";
import { CellPrimaryText } from "../styled.component";

const DateCellWrapper = styled.div<{ hasPaddingLeftFromTD?: boolean }>`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: ${theme.space_4};
  ${({ hasPaddingLeftFromTD }) =>
    hasPaddingLeftFromTD
      ? css``
      : css`
          padding-left: ${theme.space_16};
        `}
`;

type DateCellProps = {
  dataTestId?: string;
  dateTime: string | null;
  customDateFormat?: string;
  hasPaddingLeftFromTD?: boolean;
};

const DateTimeCell = ({
  dataTestId = "date-cell",
  dateTime,
  customDateFormat,
  hasPaddingLeftFromTD = true,
}: DateCellProps) => (
  <DateCellWrapper
    hasPaddingLeftFromTD={hasPaddingLeftFromTD}
    data-testid={dataTestId}
  >
    <CellPrimaryText>
      {dateTime}
    </CellPrimaryText>
  </DateCellWrapper>
);
export default DateTimeCell;
