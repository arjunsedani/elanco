import useResizeObserver from "@react-hook/resize-observer";
import {
  CSSProperties,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import ScrollToTopButton from "./components/ScrollToTopButton";
import TableLoader from "./components/TableLoader";
import TableRow from "./components/TableRow";

import { isInWebView } from "../../utils/UserAgentUtil";

import * as Styled from "./styled.component";
import { TableColumnV2 } from "./types";
import smoothscroll from "smoothscroll-polyfill";

export type TableV2Props<T> = {
  columns: TableColumnV2<T>[];
  rowsData: T[];
  onRowClick: (rowData: T) => void;
  isMobile?: boolean;
  dataTestId?: string;
  renderCustomHeader?: (
    columns: TableColumnV2<T>[],
    rowsData: T[],
    isMobile: boolean
  ) => ReactElement[];
  renderCustomRows?: (
    columns: TableColumnV2<T>[],
    rowsData: T[],
    onRowClick: (rowData: T) => void,
    isMobile: boolean,
    handleGroupByRow?: (rowData: T) => string,
    hasPaddingLeft?: boolean
  ) => ReactElement[];
  onScrollToBottom?: () => void;
  displayLoadingAnimation: boolean;
  disableScroll?: boolean;
  renderFallBackUi?: boolean;
  fallBackUi?: ReactElement;
  lastPageOfTable?: boolean;
  className?: string;
  hasScrollToBottomError?: boolean;
  maxHeight?: string;
  handleGroupByRow?: (rowData: T) => string;
  parentForScrollTop?: React.RefObject<HTMLElement>;
  customInfoRow?: {
    content: JSX.Element;
    rowStyles?: CSSProperties;
    colStyles?: CSSProperties;
  };
  hasPaddingLeft?: boolean;
  trackScrollTopButtonName?: string;
};

const TableV2 = <T,>({
  columns,
  rowsData,
  onRowClick,
  isMobile = isInWebView(),
  dataTestId = "table",
  renderCustomHeader,
  renderCustomRows,
  onScrollToBottom,
  displayLoadingAnimation,
  disableScroll = false,
  renderFallBackUi = false,
  fallBackUi,
  lastPageOfTable = false,
  className = "table",
  hasScrollToBottomError = false,
  maxHeight,
  handleGroupByRow,
  parentForScrollTop,
  customInfoRow,
  hasPaddingLeft = true,
  trackScrollTopButtonName,
}: TableV2Props<T>) => {
  smoothscroll.polyfill();
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [isTableScrolled, setIsTableScrolled] = useState(false);
  const [tableWidth, setTableWidth] = useState(0);
  useResizeObserver(tableRef, (entry) =>
    setTableWidth(entry.contentRect.width)
  );

  console.log("reach here")

  // Can't be tested with RTL due to jsdom limitation
  /* istanbul ignore next  */
  const handleScrollEvent = useCallback(
    (scrollEvent: Event) => {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollEvent.target as HTMLTableElement;
      setIsTableScrolled(scrollTop !== 0);
      const heightBuffer = 4.5;
      if (scrollTop + clientHeight + heightBuffer >= scrollHeight) {
        onScrollToBottom && onScrollToBottom();
      }
    },
    [onScrollToBottom]
  );

  const renderRows = (rowsData: T[]) =>
    rowsData.map((rowData, idx) => (
      <TableRow
        dataTestId={`table-row-${idx}`}
        key={`table-row-${idx}`}
        columns={columns}
        rowData={rowData}
        rowNumber={idx}
        onRowClick={onRowClick}
        isEvenRow={idx % 2 === 0}
        hasPaddingLeft={hasPaddingLeft}
      />
    ));

  const renderTableContent = () => (
    <>
      {renderCustomRows
        ? renderCustomRows(
            columns,
            rowsData,
            onRowClick,
            isMobile,
            handleGroupByRow,
            hasPaddingLeft
          )
        : renderRows(rowsData)}
      <TableLoader
        isMobile={isMobile}
        showLoader={displayLoadingAnimation}
        tableWidth={tableWidth}
      />
    </>
  );

  const renderTableHeader = () => {
    return renderCustomHeader
      ? renderCustomHeader(columns, rowsData, isMobile)
      : columns.map((column, idx) => (
          <Styled.TableHeader
            id={`${column.id}-${idx}`}
            key={`${column.id}-${idx}`}
            data-testid={`${column.dataTestId}`}
            minWidth={column.columnMinWidth}
            width={column.columnWidth}
            alignRight={column.alignRight}
          >
            {column.label}
          </Styled.TableHeader>
        ));
  };

  useEffect(() => {
    const ref = tableRef.current;
    ref?.addEventListener("scroll", handleScrollEvent, true);
    return () => ref?.removeEventListener("scroll", handleScrollEvent, true);
  }, [handleScrollEvent]);

  return (
    <>
      <Styled.Table
        id={dataTestId}
        ref={tableRef}
        data-testid={dataTestId}
        disableScroll={renderFallBackUi || disableScroll}
        disableLazyLoading={lastPageOfTable}
        className={className}
        maxHeight={maxHeight}
        isMobile={isMobile}
        renderFallBackUi={renderFallBackUi}
      >
        <Styled.TableHeaderGroup
          hasScrollToBottomError={hasScrollToBottomError}
        >
          <tr id="table-head-row" data-testid="table-head-row">
            {renderTableHeader()}
          </tr>
        </Styled.TableHeaderGroup>
        <Styled.TableBodyGroup hasScrollToBottomError={hasScrollToBottomError}>
          {!!customInfoRow && (
            <tr
              className="custom-info-row"
              data-testid="row-custom-info"
              style={customInfoRow.rowStyles}
            >
              <td
                className="custom-info-col"
                colSpan={24}
                style={customInfoRow.colStyles}
              >
                {customInfoRow.content}
              </td>
            </tr>
          )}
          {!renderFallBackUi && renderTableContent()}
        </Styled.TableBodyGroup>
      </Styled.Table>
      {renderFallBackUi && fallBackUi}
      <ScrollToTopButton
        elementRef={tableRef}
        showButton={isTableScrolled && isMobile}
        parentForScrollTop={parentForScrollTop}
        trackScrollTopButtonName={trackScrollTopButtonName}
      />
    </>
  );
};

export default TableV2;
