import { fireEvent, render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { theme } from "../../../../utils/styleTheme";

import {
  getMockTableColumns,
  mockTableRowsV2,
} from "../../__mocks__/mockTableData";
import { MockTableRowV2 } from "../../types";
import { getFormattedDate } from "../dateTimeUtils";
import { getTableRowsInGroup } from "../getTableRowsInGroup";

describe("getTableRowsInGroup", () => {
  const mockOnClick = jest.fn();
  const handleGroupByRow = (rowData: MockTableRowV2) =>
    getFormattedDate(rowData?.placedDateTime);
  const RowsInGroupedByPlacedDate = (
    hasPaddingLeft?: boolean
  ): ReactElement[] => {
    return hasPaddingLeft
      ? getTableRowsInGroup(
          getMockTableColumns(),
          mockTableRowsV2,
          mockOnClick,
          true,
          handleGroupByRow,
          true
        )
      : getTableRowsInGroup(
          getMockTableColumns(),
          mockTableRowsV2,
          mockOnClick,
          true,
          handleGroupByRow,
          false
        );
  };

  it("should render rows of data separated by group by row divider", () => {
    render(<>{RowsInGroupedByPlacedDate(true)}</>);

    expect(screen.getAllByTestId(/^table-row-\d+$/)).toHaveLength(
      mockTableRowsV2.length
    );
    for (const row of mockTableRowsV2) {
      const date = getFormattedDate(row.placedDateTime);
      expect(
        screen.getByTestId(`group-by-row-divider-${date}`)
      ).toBeInTheDocument();
    }
  });

  // Remove tests when hasPaddingLeft prop got removed in the future
  it(`all tds should have padding left ${theme.space_16} when hasPaddingLeft prop is true`, () => {
    render(<>{RowsInGroupedByPlacedDate(true)}</>);
    const columnsLength = getMockTableColumns().length;

    expect(screen.getAllByTestId(/^table-row-\d+-col-\d+$/)).toHaveLength(
      mockTableRowsV2.length * columnsLength
    );
    for (let row = 0; row < mockTableRowsV2.length; row++) {
      for (let col = 0; col < columnsLength; col++) {
        expect(screen.getByTestId(`table-row-${row}-col-${col}`)).toHaveStyle(
          `padding-left: ${theme.space_16}`
        );
      }
    }
  });

  it(`all tds should not have padding left ${theme.space_16} when hasPaddingLeft prop is false`, () => {
    render(<>{RowsInGroupedByPlacedDate(false)}</>);
    const columnsLength = getMockTableColumns().length;

    expect(screen.getAllByTestId(/^table-row-\d+-col-\d+$/)).toHaveLength(
      mockTableRowsV2.length * columnsLength
    );
    for (let row = 0; row < mockTableRowsV2.length; row++) {
      for (let col = 0; col < columnsLength; col++) {
        expect(
          screen.getByTestId(`table-row-${row}-col-${col}`)
        ).not.toHaveStyle(`padding-left: ${theme.space_16}`);
      }
    }
  });

  it("should call onRowClick when row is clicked", () => {
    render(<>{RowsInGroupedByPlacedDate(true)}</>);

    fireEvent.click(screen.getByTestId("table-row-0"));

    expect(mockOnClick).toBeCalledTimes(1);
  });

  it(`should render ${theme.color_white} as bg colour for every odd row in each group`, () => {
    render(<>{RowsInGroupedByPlacedDate(true)}</>);

    expect(screen.getByTestId("table-row-0")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
    expect(screen.getByTestId("table-row-2")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
    expect(screen.getByTestId("table-row-4")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
  });

  it(`should render ${theme.color_slate00} as bg colour for every even row in each group`, () => {
    render(<>{RowsInGroupedByPlacedDate(true)}</>);

    expect(screen.getByTestId("table-row-1")).toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
    expect(screen.getByTestId("table-row-3")).toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
  });
});
