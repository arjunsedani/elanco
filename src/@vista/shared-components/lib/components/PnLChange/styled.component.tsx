import { styled } from "@health/theme-common";

export const ChangeContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: baseline;
`;
export const Currency = styled.span<{ size?: string }>`
  font-weight: ${(props) => props.theme.font_weight_medium};
  font-size: ${(props) => props.size};
  line-height: 10px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color_slate70};
  margin-right: 4px;
`;

export const greenAlt = "#0C8363";

export const Price = styled.span<{
  size?: string;
  fontWeight?: string;
  displayColor: string;
}>`
  font-weight: ${(props) => props.fontWeight || props.theme.font_weight_medium};
  font-size: ${(props) => props.size};
  line-height: 20px;
  color: ${(props) => props.displayColor};
`;

export const ChangePercent = styled.span<{
  size?: string;
  fontWeight?: string;
  displayColor: string;
}>`
  font-weight: ${(props) => props.fontWeight || props.theme.font_weight_medium};
  font-size: ${(props) => props.size};
  line-height: 20px;
  margin-left: 4px;
  color: ${(props) => props.displayColor};
`;

export const Ticker = styled.span<{
  size?: string;
  increment?: boolean;
  displayColor: string;
}>`
  display: inline-block;
  font-size: ${(props) => props.size};
  line-height: 20px;
  letter-spacing: -0.25px;
  vertical-align: middle;
  margin-right: 4px;
  color: ${(props) => props.displayColor};

  transform: ${(props) => (props.increment ? `unset` : `rotate(180deg)`)};

  ::before {
    content: "▲";
  }
`;

export const FlexContainer = styled.div<{ flexDirection: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
