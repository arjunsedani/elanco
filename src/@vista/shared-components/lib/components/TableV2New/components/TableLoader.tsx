import { styled } from "@health/theme-common";

import threeDotLoading from "../../../assets/images/threeDotLoading.gif";

const screenWidth = window.innerWidth;
const imgCenter = 32;

const LoadingAnimation = styled.img<{ isMobile: boolean; tableWidth: number }>`
  width: 64px;
  height: 64px;
  position: sticky;
  left: ${({ isMobile, tableWidth }) =>
    isMobile
      ? `${screenWidth / 2 - imgCenter}px`
      : `${tableWidth / 2 - imgCenter}px`};
`;

const LoaderTableCell = styled.td<{
  showLoader: boolean;
}>`
  white-space: nowrap;
  display: ${({ showLoader }) => !showLoader && "none"};
`;

type TableLoaderProps = {
  showLoader: boolean;
  isMobile: boolean;
  tableWidth: number;
};

const TableLoader = ({
  showLoader,
  isMobile,
  tableWidth,
}: TableLoaderProps) => (
  <tr>
    <LoaderTableCell
      showLoader={showLoader}
      colSpan={7}
      data-testid="three-dot-loading"
    >
      <LoadingAnimation
        data-testid="loading-img"
        src={threeDotLoading}
        alt="loading..."
        isMobile={isMobile}
        tableWidth={tableWidth}
      />
    </LoaderTableCell>
  </tr>
);

export default TableLoader;
