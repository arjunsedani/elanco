import { css, styled } from "@health/theme-common";

import { theme } from "../../../utils/styleTheme";

const SideAndStatusWrapper = styled.div<{ hasPaddingLeftFromTD?: boolean }>`
  ${({ hasPaddingLeftFromTD }) =>
    hasPaddingLeftFromTD
      ? css``
      : css`
          padding-left: ${theme.space_16};
        `}
`;

// const SideLabel = styled.span<{ sideFontColor: string }>`
//   display: block;
//   font-size: ${theme.font_size_sm};
//   font-weight: ${theme.font_weight_medium};
//   padding-bottom: ${theme.space_8};
//   color: ${({ sideFontColor }) => sideFontColor};
// `;

export const StatusLabel = styled.span<{ bgColor: string }>`
  display: block;
  margin-bottom: ${theme.space_8};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 18px;
  font-size: ${theme.font_size_tiny};
  font-weight: ${theme.font_weight_medium};
  color: ${theme.color_slate110};
  padding: ${theme.space_2} ${theme.space_8};
`;

export type SideAndStatusCellProps = {
  sideFontColor: string;
  sideLabel: string;
  tag1Label: string;
  tag2Label: string;
  tag3Label: string;
  tag1BgColor: string;
  tag2BgColor: string;
  tag3BgColor: string;
  hasPaddingLeftFromTD?: boolean;
};

const SideAndStatusCell = ({
  sideFontColor,
  sideLabel,
  tag1Label,
  tag2Label,
  tag3Label,
  tag1BgColor,
  tag2BgColor,
  tag3BgColor,
  hasPaddingLeftFromTD = true,
}: SideAndStatusCellProps) => (
  <SideAndStatusWrapper
    hasPaddingLeftFromTD={hasPaddingLeftFromTD}
    data-testid="lbl-action-status"
  >
    {/* <SideLabel sideFontColor={sideFontColor}>{sideLabel}</SideLabel> */}
    <StatusLabel bgColor={tag1BgColor}>{tag1Label}</StatusLabel>
    <StatusLabel bgColor={tag2BgColor}>{tag2Label}</StatusLabel>
    <StatusLabel bgColor={tag3BgColor}>{tag3Label}</StatusLabel>
  </SideAndStatusWrapper>
);

export default SideAndStatusCell;
