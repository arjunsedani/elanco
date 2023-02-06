import { ReactElement } from "react";

import GroupByRowDivider from "../components/GroupByRowDivider";
import TableRow from "../components/TableRow";

import { TableColumnV2 } from "../types";

export const getTableRowsInGroup = <T,>(
  columns: TableColumnV2<T>[],
  rowsData: T[],
  onRowClick: (rowData: T) => void,
  isMobile: boolean,
  handleGroupByRow?: (rowData: T) => string,
  hasPaddingLeft?: boolean
) => {
  const rowsToRender: ReactElement[] = [];
  let rowNumberInDateGroup = 0;

  for (let i = 0; i < rowsData.length; i++) {
    const currentRowValue = handleGroupByRow
      ? handleGroupByRow(rowsData[i])
      : "";
    const nextRowValue = handleGroupByRow
      ? handleGroupByRow(rowsData[i + 1])
      : "";

    if (currentRowValue && i === 0) {
      rowsToRender.push(
        <GroupByRowDivider
          dataTestId={`group-by-row-divider-${currentRowValue}`}
          key={`group-by-row-divider-${currentRowValue}`}
          groupByValue={currentRowValue}
          noOfColumns={columns.length}
        />
      );
    }

    rowsToRender.push(
      <TableRow
        dataTestId={`table-row-${i}`}
        key={`table-row-${i}`}
        columns={columns}
        rowData={rowsData[i]}
        rowNumber={i}
        isEvenRow={rowNumberInDateGroup % 2 === 0}
        onRowClick={() => onRowClick(rowsData[i])}
        hasPaddingLeft={hasPaddingLeft}
      />
    );
    rowNumberInDateGroup++;

    if (
      nextRowValue &&
      currentRowValue !== nextRowValue &&
      i < rowsData.length - 1
    ) {
      rowNumberInDateGroup = 0;
      rowsToRender.push(
        <GroupByRowDivider
          dataTestId={`group-by-row-divider-${nextRowValue}`}
          key={`group-by-row-divider-${nextRowValue}`}
          groupByValue={nextRowValue}
          noOfColumns={columns.length}
        />
      );
    }
  }

  return rowsToRender;
};
