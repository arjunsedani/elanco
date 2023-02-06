import { render, screen } from "@testing-library/react";

import { getFormattedDate } from "../../utils/dateTimeUtils";

import GroupByRowDivider from "../GroupByRowDivider";

describe("<GroupByRowDivider />", () => {
  const groupByValue = getFormattedDate("2022-04-29T22:21:25+08:00");

  it("should attach default data-testid to component", () => {
    render(<GroupByRowDivider groupByValue={groupByValue} noOfColumns={3} />);

    expect(screen.getByTestId("group-by-row-divider")).toBeInTheDocument();
  });

  it("should attach custom data-testid to component", () => {
    const mockTestId = "some-testid";
    render(
      <GroupByRowDivider
        dataTestId={mockTestId}
        groupByValue={groupByValue}
        noOfColumns={3}
      />
    );

    expect(screen.getByTestId(mockTestId)).toBeInTheDocument();
  });

  it("should render groupByValue with empty cells covering whole row", () => {
    render(<GroupByRowDivider groupByValue={groupByValue} noOfColumns={3} />);

    expect(
      screen.getByText(getFormattedDate(groupByValue))
    ).toBeInTheDocument();
    expect(screen.getAllByRole("cell")).toHaveLength(3);
  });

  it("should render fixed first column", () => {
    render(<GroupByRowDivider groupByValue={groupByValue} noOfColumns={3} />);
    const dateDividerCell = screen.getByRole(`cell`, {
      name: groupByValue,
    });

    expect(dateDividerCell).toHaveStyle("position: sticky");
    expect(dateDividerCell).toHaveStyle("z-index: 2");
    expect(dateDividerCell).toHaveStyle("left: 0");
  });
});
