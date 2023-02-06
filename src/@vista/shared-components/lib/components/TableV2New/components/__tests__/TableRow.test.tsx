import { fireEvent, render, screen } from "@testing-library/react";

import { TemplateID } from "../../../../models/enums";
import { theme } from "../../../../utils/styleTheme";

import { mockOrderStatusTableRowsV2 } from "../../__mocks__/mockTableData";
import CoinCell from "../../cellTemplates/CoinCell";
import SideAndStatusCell from "../../cellTemplates/SideAndStatusCell";
import { MockTableRowV2, TableColumnV2 } from "../../types";
import TableRow, { TableRowProps } from "../TableRow";

describe("<TableRow />", () => {
  const mockTableColumns: TableColumnV2<MockTableRowV2>[] = [
    {
      id: TemplateID.COIN,
      dataTestId: "ORDERMGT_TABLE_COIN_HEADING",
      label: "column1",
      columnMinWidth: "104px",
      cellTemplate: (row) => (
        <CoinCell
          coinCode={row.baseAssetCode}
          coinName={row.baseAssetName}
          onClick={() => {}}
        />
      ),
    },

    {
      id: TemplateID.STATUS,
      dataTestId: "status row",
      label: "column2",
      columnMinWidth: "104px",
      cellTemplate: (row) => (
        <SideAndStatusCell
          sideFontColor={"Green"}
          sideLabel={row.side}
          statusLabel={row.status}
          statusBgColor={"#fff"}
        />
      ),
    },
  ];

  const testProps = {
    columns: mockTableColumns,
    rowData: mockOrderStatusTableRowsV2[0],
    rowNumber: 1,
    onRowClick: () => {},
    isMobile: true,
    isEvenRow: true,
    dataTestId: "table-row-1",
    hasPaddingLeft: true,
  };

  const getProps = (
    customProps?: Partial<TableRowProps<MockTableRowV2>>
  ): TableRowProps<MockTableRowV2> => ({
    ...testProps,
    ...customProps,
  });

  it("should attach default data-testid to component", () => {
    render(<TableRow {...getProps()} />);

    expect(screen.getByTestId("table-row-1")).toBeInTheDocument();
  });

  it("should attach custom data-testid to component", () => {
    const mockTestId = "some-testid";
    render(<TableRow {...getProps()} dataTestId={mockTestId} />);

    expect(screen.getByTestId(mockTestId)).toBeInTheDocument();
  });

  it("should render table row", () => {
    render(<TableRow {...getProps()} />);

    const cell0TextContent = `${mockOrderStatusTableRowsV2[0].baseAssetCode}${mockOrderStatusTableRowsV2[0].baseAssetName}`;
    const cell1TextContent = `${mockOrderStatusTableRowsV2[0].side}${mockOrderStatusTableRowsV2[0].status}`;

    expect(screen.getByTestId("table-row-1-col-0")).toHaveTextContent(
      cell0TextContent
    );
    expect(screen.getByTestId("table-row-1-col-1")).toHaveTextContent(
      cell1TextContent
    );
    expect(screen.getAllByRole("cell")).toHaveLength(2);
  });

  // Remove tests when hasPaddingLeft prop got removed in the future
  it(`all tds should have padding left ${theme.space_16} when hasPaddingLeft prop is true`, () => {
    render(<TableRow {...getProps()} />);

    expect(screen.getByTestId("table-row-1-col-0")).toHaveStyle(
      `padding-left: ${theme.space_16};`
    );
    expect(screen.getByTestId("table-row-1-col-1")).toHaveStyle(
      `padding-left: ${theme.space_16};`
    );
  });

  it(`all tds should not have padding left ${theme.space_16} when hasPaddingLeft prop is false`, () => {
    render(<TableRow {...getProps({ hasPaddingLeft: false })} />);

    expect(screen.getByTestId("table-row-1-col-0")).not.toHaveStyle(
      `padding-left: ${theme.space_16};`
    );
    expect(screen.getByTestId("table-row-1-col-1")).not.toHaveStyle(
      `padding-left: ${theme.space_16};`
    );
  });

  it("should call onClick when row is clicked on", () => {
    const mockOnClick = jest.fn();
    render(<TableRow {...getProps({ onRowClick: mockOnClick })} />);

    fireEvent.click(screen.getByRole("row"));

    expect(mockOnClick).toBeCalledTimes(1);
  });

  it("should render fixed first column cell when in mobile view", () => {
    render(<TableRow {...getProps()} />);

    const firstColumnCell = screen.getByTestId("table-row-1-col-0");

    expect(firstColumnCell).toHaveStyle(
      `border-right: 1px solid ${theme.color_slate20}`
    );
    expect(firstColumnCell).toHaveStyle("position: sticky");
    expect(firstColumnCell).toHaveStyle("z-index: 2");
    expect(firstColumnCell).toHaveStyle("left: 0");
  });

  it("should render in mobile view when user agent is using webview and isMobile is not passed in", () => {
    render(<TableRow {...getProps()} />);

    const firstColumnCell = screen.getByTestId("table-row-1-col-0");

    expect(firstColumnCell).toHaveStyle(
      `border-right: 1px solid ${theme.color_slate20}`
    );
    expect(firstColumnCell).toHaveStyle("position: sticky");
    expect(firstColumnCell).toHaveStyle("z-index: 2");
    expect(firstColumnCell).toHaveStyle("left: 0");
  });

  it("should render row cell text content aligned to left by default", () => {
    render(<TableRow {...getProps()} />);

    expect(screen.getByTestId("table-row-1-col-0")).toHaveStyle(
      "text-align: left"
    );
  });

  it("should render row cell text content aligned to right", () => {
    const mockTableColumnsWithAlignRight: TableColumnV2<MockTableRowV2>[] = [
      { ...mockTableColumns[0], alignRight: true },
    ];
    render(
      <TableRow {...getProps({ columns: mockTableColumnsWithAlignRight })} />
    );

    expect(screen.getByTestId("table-row-1-col-0")).toHaveStyle(
      "text-align: right"
    );
  });

  it(`should render table row with ${theme.color_white} as bg colour when isEvenRow prop is true`, () => {
    render(<TableRow {...getProps()} />);

    expect(screen.getByRole("row")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
  });

  it(`should render table row with ${theme.color_slate00} as bg colour when isEvenRow prop is false`, () => {
    render(<TableRow {...getProps({ isEvenRow: false })} />);

    expect(screen.getByRole("row")).toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
  });

  it(`should render first table cell with ${theme.color_white} as bg colour isEvenRow prop is true`, () => {
    render(<TableRow {...getProps()} />);

    expect(screen.getByTestId("table-row-1-col-0")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
    expect(screen.getByTestId("table-row-1-col-1")).not.toHaveStyle(
      `background-color: ${theme.color_white}`
    );
  });

  it(`should render first table cell with ${theme.color_slate00} as bg colour isEvenRow prop is false`, () => {
    render(<TableRow {...getProps({ isEvenRow: false })} />);

    expect(screen.getByTestId("table-row-1-col-0")).toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
    expect(screen.getByTestId("table-row-1-col-1")).not.toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
  });
});
