import { styled } from "@health/theme-common";

const Gutter = styled.div<{ height?: number }>`
  height: ${(props) => props.height || 8}px;
`;

export default Gutter;
