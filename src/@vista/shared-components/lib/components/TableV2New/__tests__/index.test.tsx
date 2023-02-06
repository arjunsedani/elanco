import { fireEvent, render, screen } from "@testing-library/react";

import { theme } from "../../../utils/styleTheme";

import {
  getMockTableColumns,
  mockOrderStatusTableRowsV2,
} from "../__mocks__/mockTableData";
import TableV2 from "../index";
import { TableHeader } from "../styled.component";
import { MockTableRowV2, TableColumnV2 } from "../types";

describe("<TableV2 />", () => {
  it("should have default data-testid", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(screen.getByTestId("table")).toBeInTheDocument();
  });

  it("should attach custom data-testid", () => {
    const customTestid = "some-testid";
    render(
      <TableV2
        dataTestId={customTestid}
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(screen.getByTestId(customTestid)).toBeInTheDocument();
  });

  describe("table headers", () => {
    it("should render table headers", async () => {
      const mockTableColumns = getMockTableColumns();
      render(
        <TableV2
          columns={mockTableColumns}
          rowsData={mockOrderStatusTableRowsV2}
          renderCustomRows={() => []}
          onRowClick={() => {}}
          displayLoadingAnimation={false}
        />
      );

      mockTableColumns.forEach((column) => {
        expect(screen.getByTestId(`${column.dataTestId}`)).toBeInTheDocument();
      });
    });

    it("should render custom table headers", async () => {
      const mockTableColumns = getMockTableColumns();
      const renderCustomHeader = jest.fn().mockImplementation((columns) => {
        return columns.map((column: any, idx: number) => (
          <TableHeader
            key={`${column.id}-${idx}`}
            data-testid={`${column.dataTestId}`}
            minWidth={column.columnMinWidth}
            width={column.columnWidth}
            alignRight={column.alignRight}
          >
            {column.label}
          </TableHeader>
        ));
      });

      render(
        <TableV2
          columns={mockTableColumns}
          rowsData={mockOrderStatusTableRowsV2}
          renderCustomRows={() => []}
          renderCustomHeader={renderCustomHeader}
          onRowClick={() => {}}
          displayLoadingAnimation={false}
        />
      );

      expect(renderCustomHeader).toHaveBeenCalled();

      mockTableColumns.forEach((column) => {
        expect(screen.getByTestId(`${column.dataTestId}`)).toBeInTheDocument();
      });
    });

    it("should render table headers aligned to left by default", () => {
      const mockTableColumns = getMockTableColumns();
      render(
        <TableV2
          columns={mockTableColumns}
          rowsData={mockOrderStatusTableRowsV2}
          renderCustomRows={() => []}
          onRowClick={() => {}}
          displayLoadingAnimation={false}
        />
      );

      expect(
        screen.getByTestId(`${mockTableColumns[0].dataTestId}`)
      ).toHaveStyle("text-align: left");
    });

    it("should render table headers aligned to right", () => {
      const mockTableColumns: TableColumnV2<MockTableRowV2>[] = [
        {
          ...getMockTableColumns()[0],
          alignRight: true,
        },
      ];

      render(
        <TableV2
          columns={mockTableColumns}
          rowsData={mockOrderStatusTableRowsV2}
          renderCustomRows={() => []}
          onRowClick={() => {}}
          displayLoadingAnimation={false}
        />
      );

      expect(
        screen.getByTestId(`${mockTableColumns[0].dataTestId}`)
      ).toHaveStyle("text-align: right");
    });
  });

  it("should render rows when renderData is not passed in", () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(screen.getAllByTestId(/^table-row-\d+$/)).toHaveLength(
      mockOrderStatusTableRowsV2.length
    );
  });

  it("should render scroll to top button", async () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(
      await screen.findByTestId("scroll-to-top-button")
    ).toBeInTheDocument();
  });

  it("should call onRowClick when row is clicked on", () => {
    const mockOnRowClick = jest.fn();
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={mockOnRowClick}
        displayLoadingAnimation={false}
      />
    );

    fireEvent.click(screen.getByTestId("table-row-1"));

    expect(mockOnRowClick).toBeCalledTimes(1);
  });

  it("table holds customInfoRow", () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        customInfoRow={{
          content: <div data-testid="customInfoRow">Abc</div>,
          rowStyles: {
            backgroundColor: theme.color_white,
            height: "40px",
          },
          colStyles: {
            backgroundColor: theme.color_white,
            width: "40px",
          },
        }}
      />
    );

    const customInfoEle = screen.getByTestId("customInfoRow");
    expect(customInfoEle).toBeInTheDocument();
    expect(screen.getByTestId("row-custom-info")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
    expect(screen.getByTestId("row-custom-info")).toHaveStyle("height: 40px");
    const elements = screen
      .getByTestId("row-custom-info")
      .getElementsByClassName("custom-info-col");

    expect(elements[0]).toHaveStyle(`background-color: ${theme.color_white}`);
    expect(elements[0]).toHaveStyle("width: 40px");
  });

  it("should render fixed first column when in mobile view", () => {
    const mockColumns = getMockTableColumns();
    render(
      <TableV2
        columns={mockColumns}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        isMobile={true}
        displayLoadingAnimation={false}
      />
    );

    const firstColumnTableHeader = screen.getByTestId(
      `${mockColumns[0].dataTestId}`
    );

    expect(firstColumnTableHeader).toHaveStyle("z-index: 4");
    expect(firstColumnTableHeader).toHaveStyle("left: 0");
  });

  it("should disable scroll and remove btm spacing when renderFallBackUi is true", () => {
    const mockColumns = getMockTableColumns();
    render(
      <TableV2
        columns={mockColumns}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        isMobile={true}
        displayLoadingAnimation={false}
        renderFallBackUi={true}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: hidden");
    expect(screen.getByRole("table")).toHaveStyle("padding-bottom: 0");
  });

  it("should remove lazy loading config when lastPageOfTable is true", () => {
    const mockColumns = getMockTableColumns();
    render(
      <TableV2
        columns={mockColumns}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        isMobile={true}
        displayLoadingAnimation={false}
        lastPageOfTable={true}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: auto");
    expect(screen.getByRole("table")).toHaveStyle("padding-bottom: 0");
    expect(screen.getByRole("table")).toHaveStyle("scroll-snap-type: unset");
  });

  it("should NOT disable scroll and NOT remove btm spacing when renderFallBackUi and lastPageOfTable is false", () => {
    const mockColumns = getMockTableColumns();
    render(
      <TableV2
        columns={mockColumns}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        isMobile={true}
        displayLoadingAnimation={false}
        renderFallBackUi={false}
        lastPageOfTable={false}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: auto");
    expect(screen.getByRole("table")).toHaveStyle("padding-bottom: 10px");
  });

  it("should display loading dots when displayLoadingAnimation is true", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={true}
      />
    );

    expect(screen.getByTestId("three-dot-loading")).toBeInTheDocument();
  });

  it("should have lazy loading scroll snap css properties", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        hasScrollToBottomError={true}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toHaveStyle("scroll-snap-type: y mandatory");
    expect(table).toHaveStyle("padding-bottom: 10px");

    const rowGroups = screen.getAllByRole("rowgroup");
    rowGroups.forEach((rowGroup) => {
      expect(rowGroup).toHaveStyle("scroll-snap-align: end");
      expect(rowGroup).toHaveStyle("scroll-snap-stop: normal");
    });
  });

  it("should have onScrollToBottomError css properties where there is error", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        hasScrollToBottomError={true}
      />
    );

    const rowGroups = screen.getAllByRole("rowgroup");
    rowGroups.forEach((rowGroup) => {
      expect(rowGroup).toHaveStyle("scroll-snap-align: end");
      expect(rowGroup).toHaveStyle("scroll-snap-stop: normal");
    });
  });

  it("should not have onScrollToBottomError css properties when there is no error", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        renderCustomRows={() => []}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        hasScrollToBottomError={false}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toHaveStyle("scroll-snap-type: y mandatory");
    expect(table).toHaveStyle("padding-bottom: 10px");

    const rowGroups = screen.getAllByRole("rowgroup");
    rowGroups.forEach((rowGroup) => {
      expect(rowGroup).not.toHaveStyle("scroll-snap-align: end");
      expect(rowGroup).not.toHaveStyle("scroll-snap-stop: normal");
    });
  });

  describe("fallback ui", () => {
    const fallBackUiText = "FallbackUi";
    const fallBackUi = <div>{fallBackUiText}</div>;

    it("should render fallback ui if renderFallBackUi is true", () => {
      render(
        <TableV2
          columns={getMockTableColumns()}
          rowsData={mockOrderStatusTableRowsV2}
          onRowClick={() => {}}
          onScrollToBottom={() => {}}
          displayLoadingAnimation={false}
          renderFallBackUi={true}
          fallBackUi={fallBackUi}
        />
      );

      expect(screen.getByText(fallBackUiText)).toBeInTheDocument();
    });

    it("should NOT render fallback ui if renderFallBackUi is false", () => {
      render(
        <TableV2
          columns={getMockTableColumns()}
          rowsData={mockOrderStatusTableRowsV2}
          onRowClick={() => {}}
          onScrollToBottom={() => {}}
          displayLoadingAnimation={false}
          renderFallBackUi={false}
          fallBackUi={fallBackUi}
        />
      );

      expect(screen.queryByText(fallBackUiText)).not.toBeInTheDocument();
    });

    it("should NOT render fallback ui by default", () => {
      render(
        <TableV2
          columns={getMockTableColumns()}
          rowsData={mockOrderStatusTableRowsV2}
          onRowClick={() => {}}
          onScrollToBottom={() => {}}
          displayLoadingAnimation={false}
          fallBackUi={fallBackUi}
        />
      );

      expect(screen.queryByText(fallBackUiText)).not.toBeInTheDocument();
    });
  });

  it("should have alternate background colors for rows", () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        onScrollToBottom={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(screen.getByTestId("table-row-0")).toHaveStyle(
      `background-color: ${theme.color_white}`
    );
    expect(screen.getByTestId("table-row-1")).toHaveStyle(
      `background-color: ${theme.color_slate00}`
    );
  });

  it.each`
    isMobile | renderFallBackUi | expectedStyle
    ${true}  | ${true}          | ${"border-radius: initial"}
    ${true}  | ${false}         | ${"border-radius: initial"}
    ${false} | ${true}          | ${"border-radius: initial"}
    ${false} | ${false}         | ${`border-radius: ${theme.space_0} ${theme.space_0} ${theme.space_8} ${theme.space_8}`}
  `(
    "should configure border-radius correctly for isMobile is '$isMobile' and renderFallBackUi is '$renderFallBackUi'",
    ({ isMobile, renderFallBackUi, expectedStyle }) => {
      render(
        <TableV2
          columns={getMockTableColumns()}
          rowsData={mockOrderStatusTableRowsV2}
          onRowClick={() => {}}
          onScrollToBottom={() => {}}
          displayLoadingAnimation={false}
          isMobile={isMobile}
          renderFallBackUi={renderFallBackUi}
        />
      );

      expect(screen.getByRole("table")).toHaveStyle(expectedStyle);
    }
  );

  it("should enable scroll as default", () => {
    render(
      <TableV2
        columns={[]}
        rowsData={[]}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: auto");
  });

  it("should disable scroll when disableScroll is true", () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        disableScroll={true}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: hidden");
  });

  it("should enable scroll when disableScroll is false", () => {
    render(
      <TableV2
        columns={getMockTableColumns()}
        rowsData={mockOrderStatusTableRowsV2}
        onRowClick={() => {}}
        displayLoadingAnimation={false}
        disableScroll={false}
      />
    );

    expect(screen.getByRole("table")).toHaveStyle("overflow: auto");
  });
});
