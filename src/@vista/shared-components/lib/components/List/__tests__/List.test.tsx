import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import List, { ListProps, ListTestId, Panel } from "..";

beforeEach(() => cleanup());

describe("List render test", () => {
  const defaultProps: ListProps = {
    title: "List Title",
    type: "single",
  };
  const itemContent = "Item Content";
  const itemContent2 = "Item Content2";
  const panelContent = "Panel Content";
  const panelContent2 = "Panel Content2";
  it("can render", () => {
    render(
      <List {...defaultProps}>
        <Panel listItemContent={itemContent} key="1">
          {panelContent}
        </Panel>
      </List>
    );
    // List render
    expect(screen.getByTestId(ListTestId.listContainer)).toBeInTheDocument();
    // List head render
    expect(screen.getByTestId(ListTestId.listHeader)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title as string)).toBeInTheDocument();
    // List item render
    expect(screen.getByTestId(ListTestId.listItem)).toBeInTheDocument();
    expect(screen.getByText(itemContent)).toBeInTheDocument();
    // List panel content render
    expect(screen.getByTestId(ListTestId.listPanelContent)).toBeInTheDocument();
    expect(screen.getByText(panelContent)).toBeInTheDocument();
    // List item arrow render
    expect(screen.getByTestId(ListTestId.listArrowIcn)).toBeInTheDocument();
  });

  it("can open multi panel content at same time in multi mode", () => {
    render(
      <List type="multi" title="test">
        <Panel listItemContent={itemContent} key="1">
          {panelContent}
        </Panel>
        <Panel listItemContent={itemContent2} key="2">
          {panelContent2}
        </Panel>
      </List>
    );
    // List render
    expect(screen.getByTestId(ListTestId.listContainer)).toBeInTheDocument();
    // All items render
    expect(screen.getByText(panelContent)).toBeInTheDocument();
    expect(screen.getByText(panelContent2)).toBeInTheDocument();
    const panels = screen.getAllByTestId(ListTestId.listItem);
    const panelContents = screen.getAllByTestId(ListTestId.listPanelContent);
    const contentElement1 = panelContents[0];
    const contentElement2 = panelContents[1];
    // panel content's height shoule be 0 before we expend panel
    expect(contentElement1).toHaveStyle("height: 0");
    expect(contentElement2).toHaveStyle("height: 0");
    // mock user click
    const panel1 = panels[0];
    const panel2 = panels[1];
    fireEvent.click(panel1);
    fireEvent.click(panel2);
    // panel content's height will not be 0 after we expend panel
    expect(contentElement1).not.toHaveStyle("height: 0");
    expect(contentElement2).not.toHaveStyle("height: 0");
  });

  it("will call a onChange callback when open or close the panel", () => {
    const onChange = jest.fn();

    render(
      <List {...defaultProps} onChange={onChange}>
        <Panel listItemContent={itemContent} key="1">
          {panelContent}
        </Panel>
      </List>
    );

    const panel = screen.getByTestId(ListTestId.listItem);
    // trigger onChange when open
    fireEvent.click(panel);
    expect(onChange).toBeCalled();
    // trigger onChange when close
    fireEvent.click(panel);
    expect(onChange).toBeCalled();
  });

  it("will call a onClick callback when click the panel", () => {
    const onClick = jest.fn();

    render(
      <List {...defaultProps}>
        <Panel listItemContent={itemContent} key="1" onClick={onClick}>
          {panelContent}
        </Panel>
      </List>
    );

    const panel = screen.getByTestId(ListTestId.listItem);
    // trigger onClick when click panel
    fireEvent.click(panel);
    expect(onClick).toBeCalled();
  });

  it("can be controled by props", () => {
    const { rerender } = render(
      <List type="single" title="test" defaultKey="1" activeKey={null}>
        <Panel listItemContent={itemContent} key="1">
          {panelContent}
        </Panel>
        <Panel listItemContent={itemContent2} key="2">
          {panelContent2}
        </Panel>
      </List>
    );
    const panel1 = screen.getAllByTestId(ListTestId.listPanelContent)[0];
    const panel2 = screen.getAllByTestId(ListTestId.listPanelContent)[1];

    // default open panel 1, and close panel 2
    expect(panel1).not.toHaveStyle("height: 0");
    expect(panel2).toHaveStyle("height: 0");

    // update active prop then rerender
    rerender(
      <List type="single" title="test" defaultKey="1" activeKey="2">
        <Panel listItemContent={itemContent} key="1">
          {panelContent}
        </Panel>
        <Panel listItemContent={itemContent2} key="2">
          {panelContent2}
        </Panel>
      </List>
    );
    // now panel1 shoule be close and panel2 shoule be open
    expect(panel1).toHaveStyle("height: 0");
    expect(panel2).not.toHaveStyle("height: 0");
  });

  it("can custom arrow icon", () => {});
  const customArrow = <div>CustomArrow</div>;
  render(
    <List {...defaultProps} arrow={customArrow}>
      <Panel listItemContent={itemContent} key="1">
        {panelContent}
      </Panel>
    </List>
  );
  expect(screen.getByText("CustomArrow")).toBeInTheDocument();
});
