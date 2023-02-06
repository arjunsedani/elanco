import { css, styled } from "@health/theme-common";

import { theme } from "../../../utils/styleTheme";

const ResourceGroupWrapper = styled.div<{ hasPaddingLeftFromTD?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ hasPaddingLeftFromTD }) =>
    hasPaddingLeftFromTD
      ? css`
          padding: 15px 0;
        `
      : css`
          padding: 15px 0 15px ${theme.space_16};
        `}
`;

const ResourceGroupHeading = styled.span`
  font-size: ${theme.font_size_sm};
  font-weight: ${theme.font_weight_medium};
  color: ${theme.color_slate110};
  padding-bottom: ${theme.space_4};
  width: 100%;
`;

const ResourceGroupSubHeading = styled.span`
  font-size: ${theme.font_size_sm};
  font-weight: ${theme.font_weight_regular};
  color: ${theme.color_slate70};
  text-overflow: inherit;
  white-space: break-spaces;
`;

type ResourceGroupCellProps = {
  ResourceGroup: string;
  ResourceLocation: string;
  hasPaddingLeftFromTD?: boolean;
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ResourceGroup: string
  ) => void;
};

const ResourceGroupCell = ({
  ResourceGroup,
  ResourceLocation,
  hasPaddingLeftFromTD = true,
  onClick,
}: ResourceGroupCellProps) => (
  <ResourceGroupWrapper
    data-testid="lbl-"
    hasPaddingLeftFromTD={hasPaddingLeftFromTD}
    onClick={(e) => onClick(e, ResourceGroup)}
  >
    <ResourceGroupHeading data-testid="dsds">{ResourceGroup}</ResourceGroupHeading>
    <ResourceGroupSubHeading data-testid="-name">
      {ResourceLocation}
    </ResourceGroupSubHeading>
  </ResourceGroupWrapper>
);

export default ResourceGroupCell;