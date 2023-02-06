import { colors, elevations, styled } from "@health/theme-common";

export const ListContainer = styled.div`
  background: ${colors.color_slate10};
`;

export const ListHeader = styled.div`
  padding: 12px 24px;
  color: ${colors.color_slate70};
  font-size: 13px;
  font-weight: 500;
`;

export const Item = styled.div<{ active: boolean }>`
  background: ${colors.color_white};
  display: flex;
  position: relative;
  border-top: 0.5px ${colors.color_slate10} solid;
  ${(props) => props.active && `box-shadow: ${elevations.elevation_2}`}
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const PanelContent = styled.div<{ active: boolean }>`
  background: ${colors.color_slate00};
  height: 0;
  transition: height 0.15s ease-out;
  overflow: hidden;
  ${(props) =>
    `${
      props.active &&
      `
  height: auto;
  transition: height 100s ease-in;
  `
    }`}
`;

export const Arrow = styled.img<{ active: boolean }>`
  transition: all 0.3s ease;
  transform: rotate(180deg);
  ${(props) => `${props.active && `transform: rotate(0)`}`}
`;

export const ArrowContainer = styled.div``;
