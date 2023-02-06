import { CSSProperties } from "react";

import Button from "@health/buttons/components/Button";
import { colors, css, styled } from "@health/theme-common";

import { keyframes } from "styled-components";

import { isInWebView } from "../../utils/UserAgentUtil";

import {
  CustomScrollBarProps,
  CustomScrollBarStylesCss,
} from "../CustomScrollStyles";

const streamingHighlights = keyframes`
  0% {
    color: ${colors.color_blue08};
  }
`;

const streamAnimations = css`
  ${streamingHighlights} 1s
`;

const streamingAnimationCss = css`
  animation: ${streamAnimations};
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0 0 8px 8px;
`;

export const StickyWrapper = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  z-index: 200;
`;

interface StylesProps extends CustomScrollBarProps {
  height?: number;
  firstColumnFixed: boolean;
  customTdStyles?: CSSProperties;
  customThStyles?: CSSProperties;
  wrapperMaxHeight: number | string;
  error?: boolean;
  noAltRowColor?: boolean;
  isGrouped?: boolean;
}

export const Styles = styled.div<StylesProps>`
  position: relative;
  overflow: ${(props) => (props.error ? "hidden" : "auto")};
  background: ${(props) => props.theme.color_acai};
  max-height: ${(props) =>
    !!props.wrapperMaxHeight
      ? typeof props.wrapperMaxHeight === "number"
        ? `${props.wrapperMaxHeight}px`
        : props.wrapperMaxHeight
      : "auto"};
  max-width: auto;

  ${CustomScrollBarStylesCss};

  table {
    overflow: auto;
    border-collapse: separate;
    border-spacing: 0;
    width: auto;
    height: 100%;
    table-layout: fixed;

    ${(props) =>
      !props.noAltRowColor &&
      `tbody {
          tr.odd-row {
            background: ${props.theme.color_slate00};
            td:first-child {
              background: ${props.theme.color_slate00};        
            }
          }
          tr.even-row {
            background: ${props.theme.color_white};
            td:first-child {
              background: ${props.theme.color_white};
            }
          }
          tr:hover {
            background-color: ${props.theme.color_gray03};
             td:first-child {
               background-color: ${props.theme.color_gray03};  
            }
          }
        }`}
    tr {
      position: relative;
    }

    th {
      z-index: 2;
      position: sticky;
      top: 0;
      background: ${(props) => props.theme.color_white};
      line-height: 16px;
      ${(props) => (!!props.customThStyles ? { ...props.customThStyles } : {})}
    }

    td {
      font-size: 14px;
      white-space: nowrap;
      line-height: 16px;
      border-bottom: 1px solid ${(props) => props.theme.color_slate10};
      ${(props) => (!!props.customTdStyles ? { ...props.customTdStyles } : {})}
    }

    ${(props) =>
      props.firstColumnFixed &&
      `tr th:first-child {
          z-index: 3 ;
          background: ${props.theme.color_white}};
        }`};

    ${(props) =>
      props.firstColumnFixed
        ? `tr td:first-child,
        tr th:first-child {
          visibility: visible;
          position: sticky;
          position: -webkit-sticky;
          z-index: 2;
          left: 0;
          background: ${props.theme.color_white}};
        }`
        : `tr td:first-child {
          position: relative;
        }`};
  }
`;

export const ScrollToTopContainer = styled.div<{
  containerPaddingMargin: number;
  bgColor?: string;
}>`
  display: block;
  position: fixed;
  bottom: ${(props) => props.theme.space_24};
  right: ${(props) => props.theme.space_32};
  background: ${(props) => props.bgColor || props.theme.color_slate70};
  width: 46px;
  height: 46px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.color_slate60};
  border-radius: 30px;
  line-height: 40px;
  z-index: 100;

  &:hover {
    box-shadow: 0px 0px 4px 0.5px ${(props) => props.theme.color_slate50};
    cursor: pointer;
  }

  &.hide {
    visibility: hidden;
  }

  &.show {
    visibility: visible;
  }
`;

export const StyledSVG = styled.img<{ customStyle?: CSSProperties }>`
  width: 24px;
  height: 16px;
  position: relative;
  top: 4px;
  ${(props) => props.customStyle && { ...props.customStyle }}
`;

export const TableFooter = styled.div`
  height: 70px;
`;

export const OrientationBtn = styled(Button)`
  height: 40px;
  border: 1px solid ${(props) => props.theme.color_slate40};
  border-radius: 4px;
  padding: 8px 14px;
  text-align: center;
  top: 10px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  &:focus {
    background-color: ${(props) => props.theme.color_white};
    border: 1px solid ${(props) => props.theme.color_slate40};
  }
`;

export const OrientationLabel = styled.span`
  font-size: ${(props) => props.theme.font_size_base};
  font-weight: ${(props) => props.theme.font_weight_medium};
  line-height: 20px;
  color: ${(props) => props.theme.color_slate110};
  padding-left: 10px;
`;

export const LblHeader = styled.div`
  color: ${(props) => props.theme.color_slate110};
  font-weight: ${(props) => props.theme.font_weight_medium};
  font-size: ${(props) => props.theme.font_size_sm};
  line-height: ${(props) => props.theme.font_size_base};
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LblSubHeader = styled.div<{ customStyles?: CSSProperties }>`
  white-space: ${isInWebView() ? `inherit` : `nowrap`};
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: ${(props) => props.theme.font_size_sm};
  font-weight: ${(props) => props.theme.font_weight_regular};
  line-height: ${(props) => props.theme.font_size_base};
  color: ${(props) => props.theme.color_slate70};
  ${isInWebView()
    ? `
    -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  `
    : ``};
  ${(props) => (!!props.customStyles ? { ...props.customStyles } : {})}
`;

export const StockLabelContainer = styled.div`
  padding-bottom: 4px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CountryBox = styled.div`
  width: 25px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.color_slate70};
  color: ${(props) => props.theme.color_slate70};
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  flex: none;
`;

export const CurrencyText = styled.span<{
  bgColor?: string;
  fontColor?: string;
}>`
  font-size: ${(props) => props.theme.font_size_tiny};
  font-weight: ${(props) => props.theme.font_weight_medium};
  line-height: ${(props) => props.theme.font_size_tiny};
  color: ${(props) =>
    !!props.fontColor ? props.fontColor : props.theme.color_slate70};
  vertical-align: 1px;

  > span {
    font-weight: ${(props) => props.theme.font_weight_medium};
    color: ${(props) =>
      !!props.fontColor ? props.fontColor : props.theme.color_slate70};
    border-radius: 18px;
    padding: 2px 8px;
    background-color: ${(props) => (!!props.bgColor ? props.bgColor : "")};
  }
`;

export const PrimaryText = styled.span<{
  fontColor?: string;
  bgColor?: string;
  additionalStyles?: CSSProperties;
  isHighlighted?: boolean;
}>`
  font-size: ${(props) => props.theme.font_size_sm};
  font-weight: ${(props) => props.theme.font_weight_medium};
  line-height: ${(props) => props.theme.font_size_base};
  color: ${(props) =>
    !!props.fontColor ? props.fontColor : props.theme.color_slate110};
  display: inline-block;

  ${(props) => (!!props.additionalStyles ? { ...props.additionalStyles } : {})}
  > span {
    font-weight: ${(props) => props.theme.font_weight_medium};
    color: ${(props) =>
      !!props.fontColor ? props.fontColor : props.theme.color_slate110};
    border-radius: 18px;
    padding: 2px 6px;
    background-color: ${(props) => (!!props.bgColor ? props.bgColor : "")};
  }

  ${(props) => props.isHighlighted && streamingAnimationCss}
`;

export const SecondaryText = styled.div<{
  color?: string;
  size?: string;
  additionalStyles?: CSSProperties;
  isHighlighted?: boolean;
}>`
  font-size: ${(props) =>
    !!props.size ? props.size : (props) => props.theme.font_size_sm};
  font-weight: ${(props) => props.theme.font_weight_regular};
  line-height: ${(props) => props.theme.font_size_base};
  color: ${(props) =>
    !!props.color ? props.color : (props) => props.theme.color_slate70};
  display: inline-block;
  ${(props) => (!!props.additionalStyles ? { ...props.additionalStyles } : {})}
  ${(props) => props.isHighlighted && streamingAnimationCss}
`;

export const OrderTermText = styled.span`
  font-size: ${(props) => props.theme.font_size_sm};
  font-weight: ${(props) => props.theme.font_weight_medium};
  line-height: ${(props) => props.theme.font_size_base};
  color: ${(props) => props.theme.color_slate110};
`;

export const InitiateBtn = styled(Button)<{ customstyles?: CSSProperties }>`
  width: 125px;
  height: 32px;
  white-space: nowrap;
  border: 1px solid ${(props) => props.theme.color_slate40};
  border-radius: 4px;
  font-style: normal;
  font-weight: ${(props) => props.theme.color_slate110};
  font-size: 14px;
  line-height: 16px;
  font-family: inherit !important;
  padding: 10px 22px;
  justify-content: center;
  &:focus {
    border: 2px solid ${(props) => props.theme.color_slate40};
    background-color: ${(props) => props.theme.color_slate10};
  }
  ${(props) => (props.customstyles ? { ...props.customstyles } : {})}
`;

export const TransactionIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #dde3e7;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const TransactionIcon = styled.span`
  font-size: 20px;
  line-height: 0px;
`;

export const TransactionIconImg = styled.img`
  line-height: 0px;
`;

export const TransactionUnitContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TransactionUnitContainer2 = styled.div`
  display: flex;
  justify-content: start;
`;

export const TransactionUnitTextsContainer = styled.div`
  width: 255px;
`;

export const TransactionAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  padding: 0px 16px 16px 0px;
  width: 276px;
  border-bottom: 1px solid ${(props) => props.theme.color_slate10};
  float: right;
`;

export const RightArrow = styled.div`
  left: 14px;
  position: relative;
`;

export const UnrealisedPLField = styled.div`
  padding: 14px 0 4px 0;
`;

export const UnrealisedPLMarker = styled.span<{ fontColor: string }>`
  color: ${(props) => props.fontColor};
  padding-right: 4px;
  font-size: 13px;
`;

export const EquityTransactionContainer = styled.div`
  padding: 16px 0 0 16px;
`;

export const TransactionRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  &:last-child {
    border-bottom: 1px solid ${colors.color_divider};
    padding-bottom: 16px;
  }
  ${TransactionIconContainer} {
    margin: 0 8px 8px 0;
    & + div[data-testid="transaction-type-value"] {
      text-align: left;
      font-family: "Public Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: ${colors.color_slate110};
      padding: 10px 0;
    }
  }
`;

export const TransactionLabel = styled.div`
  text-align: left;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: ${colors.color_slate70};
`;
export const TransactionValue = styled.div`
  text-align: right;
  flex: 1;
  padding-right: 16px;

  ${CurrencyText} {
    padding-right: 4px;
  }
  span {
    padding-left: 4px;
  }
`;
