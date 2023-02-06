import { styled } from "@health/theme-common";

import { theme } from "../../../utils/styleTheme";

const GroupByRow = styled.tr`
  background-color: ${theme.color_slate10};
`;

const GroupByValueCell = styled.td`
  padding: ${theme.space_12} ${theme.space_0} ${theme.space_12}
    ${theme.space_16};
  font-size: ${theme.font_size_sm};
  color: ${theme.color_slate70};
  font-weight: ${theme.font_weight_medium};
  line-height: ${theme.space_16};
  text-transform: uppercase;
  white-space: nowrap;

  :first-child {
    position: sticky;
    z-index: 2;
    left: 0;
  }
`;

type GroupByRowDividerProps = {
  groupByValue: string;
  noOfColumns: number;
  dataTestId?: string;
};

const GroupByRowDivider = ({
  groupByValue,
  noOfColumns,
  dataTestId = "group-by-row-divider",
}: GroupByRowDividerProps) => (
  <GroupByRow data-testid={dataTestId}>
    <GroupByValueCell>{groupByValue}</GroupByValueCell>
    {Array.from({ length: noOfColumns - 1 }, (_, idx) => (
      <td key={idx} />
    ))}
  </GroupByRow>
);

export default GroupByRowDivider;
