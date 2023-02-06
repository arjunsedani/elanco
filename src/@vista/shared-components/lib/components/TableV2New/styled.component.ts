import { styled } from "@health/theme-common";

import { css, CSSProperties } from "styled-components";

import { theme } from "../../utils/styleTheme";

export const fixedFirstColumn = css`
  :first-child {
    z-index: 4;
    left: 0;
  }
`;

export const lazyLoadingConfig = css`
  scroll-snap-align: end;
  scroll-snap-stop: normal;
`;

export const Table = styled.table<{
  disableScroll?: boolean;
  maxHeight?: string;
  disableLazyLoading?: boolean;
  isMobile?: boolean;
  renderFallBackUi?: boolean;
}>`
  /*To achieve position sticky with overflow property, a meaningful max-height must be set */
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "unset")};

  display: block;
  background-color: ${theme.color_white};
  border-spacing: 0;
  border-collapse: separate;
  overflow: ${({ disableScroll }) => (disableScroll ? "hidden" : "auto")};
  border-radius: ${({ isMobile, renderFallBackUi }) =>
    !isMobile && !renderFallBackUi
      ? `${theme.space_0} ${theme.space_0} ${theme.space_8} ${theme.space_8}`
      : "initial"};

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color_slate50};
    border: 9px solid transparent;
    border-radius: 100px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar:horizontal {
    height: 24px;
  }

  // Lazy loading config
  padding-bottom: ${({ disableScroll, disableLazyLoading }) =>
    disableScroll || disableLazyLoading ? "0" : "10px"};
  scroll-snap-type: ${({ disableLazyLoading }) =>
    disableLazyLoading ? "unset" : "y mandatory"};
`;

export const TableHeaderGroup = styled.thead<{
  hasScrollToBottomError?: boolean;
}>`
  ${({ hasScrollToBottomError }) => hasScrollToBottomError && lazyLoadingConfig}
`;

export const TableBodyGroup = styled.tbody<{ hasScrollToBottomError: boolean }>`
  ${({ hasScrollToBottomError }) => hasScrollToBottomError && lazyLoadingConfig}
`;

export const TableHeader = styled.th<{
  minWidth?: string;
  alignRight?: boolean;
  width?: string;
}>`
  position: sticky;
  top: 0;
  height: 64px;
  font-size: ${theme.font_size_base_sm};
  font-weight: ${theme.font_weight_regular};
  text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
  padding-left: ${theme.space_16};
  color: ${theme.color_slate70};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  border-bottom: 1px solid ${theme.color_slate20};
  border-top: 1px solid ${theme.color_slate20};
  background-color: ${theme.color_white};
  z-index: 3;
  white-space: nowrap;

  :first-child {
    padding-left: ${theme.space_24};
    z-index: 4;
    left: 0;
  }
`;

export const CellPrimaryText = styled.span<{ customStyles?: CSSProperties }>`
  font-size: ${theme.font_size_sm};
  font-weight: ${theme.font_weight_medium};
  line-height: ${theme.font_size_base};
  color: ${theme.color_slate110};
  ${(props) => props.customStyles && { ...props.customStyles }}
`;

export const CellSecondaryText = styled.span<{ customStyles?: CSSProperties }>`
  font-size: ${theme.font_size_sm};
  font-weight: ${theme.font_weight_regular};
  line-height: ${theme.font_size_base};
  color: ${theme.color_slate70};
  ${(props) => props.customStyles && { ...props.customStyles }}
`;

export const CellCurrencyText = styled.span<{ customStyles?: CSSProperties }>`
  font-size: ${theme.font_size_tiny};
  font-weight: ${theme.font_weight_medium};
  line-height: ${theme.font_size_tiny};
  color: ${theme.color_slate70};
  vertical-align: 1px;
  padding-right: ${theme.space_4};
  ${(props) => props.customStyles && { ...props.customStyles }}
`;
