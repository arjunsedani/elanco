import { css, styled } from "@health/theme-common";

import { theme } from "../../../utils/styleTheme";

import { TableColumnV2 } from "../types";

export const StyledTableRow = styled.tr<{ isEvenRow: boolean }>`
  cursor: pointer;
  background-color: ${({ isEvenRow }) =>
    isEvenRow ? theme.color_white : theme.color_slate00};
`;

export const TableCell = styled.td<{
  alignRight?: boolean;
  hasPaddingLeft?: boolean;
  isEvenRow: boolean;
}>`
  white-space: nowrap;
  line-height: 16px;
  border-bottom: 1px solid ${theme.color_slate10};
  text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
  ${({ hasPaddingLeft }) =>
    hasPaddingLeft
      ? css`
          padding-left: ${theme.space_16};
        `
      : css``}

  :first-child {
    background-color: ${({ isEvenRow }) =>
      isEvenRow ? theme.color_white : theme.color_slate00};
    border-right: 1px solid ${theme.color_slate20};
    position: sticky;
    z-index: 2;
    left: 0;
  }
`;

export type TableRowProps<T> = {
  columns: TableColumnV2<T>[];
  rowData: T;
  rowNumber: number;
  onRowClick: (rowData: T) => void;
  isEvenRow: boolean;
  hasPaddingLeft?: boolean;
  dataTestId?: string;
};

const TableRow = <T,>({
  columns,
  rowData,
  rowNumber,
  onRowClick,
  isEvenRow,
  hasPaddingLeft,

  dataTestId = "table-row",
}: TableRowProps<T>) => (
  <StyledTableRow
    id={dataTestId}
    data-testid={dataTestId}
    isEvenRow={isEvenRow}
    onClick={() => onRowClick(rowData)}
  >
    {columns.map((column, idx) => (
      <TableCell
        id={`${dataTestId}-col-${idx}`}
        data-testid={`${dataTestId}-col-${idx}`}
        key={`${column.id}-row-${rowNumber}-col-${idx}`}
        alignRight={column.alignRight}
        isEvenRow={isEvenRow}
        hasPaddingLeft={hasPaddingLeft}
      >
        {column.cellTemplate(rowData, rowNumber)}
      </TableCell>
    ))}
  </StyledTableRow>
);

export default TableRow;
