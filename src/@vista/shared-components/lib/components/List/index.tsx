import React, { ComponentProps, ReactElement } from "react";

import ArrowIcon from "../../assets/images/dropdown.svg";

import { useMixState } from "../../hooks/useMixState";

import {
  Arrow,
  ArrowContainer,
  Item,
  ListContainer,
  ListHeader,
  PanelContent,
} from "./styled.component";

export interface ListBaseProps<T extends string | string[] | null> {
  defaultKey?: T;
  activeKey?: T;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * @default true
   */
  arrow?: React.ReactNode;
  onChange?: (key: T, isActive: boolean) => void;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  testId?: string;
  arrowTestId?: string;
  headerTestId?: string;
  key?: string;
}

export type ListProps =
  | ({ type: "single" } & ListBaseProps<string | null>)
  | ({ type: "multi" } & ListBaseProps<string[]>);

export interface ListItemProps {
  key: string;
  children: React.ReactNode;
  disable?: boolean;
  onClick?: (key: string | string[]) => void;
  style?: React.CSSProperties;
  testId?: string;
}

export interface PanelProps extends ListItemProps {
  listItemContent: React.ReactNode;
  panelContentTestId?: string;
  panelStyle?: React.CSSProperties;
}

type ListInnerChild =
  | ReactElement<ComponentProps<typeof Panel>>
  | ReactElement<ComponentProps<typeof ListItem>>;

const ListPrefix = "vista-list";
export const ListTestId = {
  listContainer: `${ListPrefix}-container`,
  listHeader: `${ListPrefix}-header`,
  listItem: `${ListPrefix}-item`,
  listPanelContent: `${ListPrefix}-panel-content`,
  listArrowIcn: `${ListPrefix}-arrow-icn`,
};

export const ListItem: React.FC<ListItemProps> = () => null;

export const Panel: React.FC<PanelProps> = () => null;

const isPanel = (
  type: ListInnerChild
): type is ReactElement<ComponentProps<typeof Panel>> => {
  const PanelType = React.createElement(Panel).type;
  return type.type === PanelType;
};

const List = ({
  type = "single",
  arrow = true,
  testId = ListTestId.listContainer,
  arrowTestId = ListTestId.listArrowIcn,
  headerTestId = ListTestId.listHeader,
  ...restProps
}: ListProps) => {
  const [activeKey, setActiveKey] = useMixState(
    restProps.activeKey,
    restProps.defaultKey
  );
  const setActiveKeyWithCallback = (key: any, isActive: boolean) => {
    setActiveKey(key);
    restProps.onChange?.(key, isActive);
  };
  const activeKeyList = !Array.isArray(activeKey) ? [activeKey] : activeKey;

  const validateChild: Array<ListInnerChild> = [];
  React.Children.forEach(restProps.children, (child) => {
    if (!React.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== "string") return;
    validateChild.push(child as ListInnerChild);
  });
  

  return (
    <ListContainer
      style={restProps.style}
      data-testid={testId}
      key={restProps.key}
    >
      <ListHeader style={restProps.headerStyle} data-testid={headerTestId}>
        {restProps.title}
      </ListHeader>
      {validateChild.map((panel) => {
        const key = panel.key as string;
        const active = activeKeyList.includes(key);

        const handleClick = (key: string) => {
          if (panel.props.disable) return;
          if (type === "single") {
            setActiveKeyWithCallback(active ? null : key, active);
          } else {
            setActiveKeyWithCallback(
              active
                ? activeKeyList.filter((v) => v !== key)
                : [...activeKeyList, key],
              active
            );
          }
          panel.props.onClick?.(key);
        };

        let listItem: React.ReactNode;
        let panelContent: React.ReactNode;
        let arrowIcon: React.ReactNode;
        if (isPanel(panel)) {
          listItem = panel.props.listItemContent;

          arrowIcon =
            typeof arrow === "boolean" && arrow ? (
              <Arrow
                src={ArrowIcon}
                active={active}
                width={12}
                data-testid={arrowTestId}
              />
            ) : (
              arrow
            );
          panelContent = (
            <PanelContent
              active={active}
              data-testid={
                panel.props.panelContentTestId ?? ListTestId.listPanelContent
              }
            >
              {panel.props.children}
            </PanelContent>
          );
        } else {
          listItem = panel.props.children;
        }
        return (
          <React.Fragment key={key}>
            <Item
              active={active}
              onClick={() => handleClick(key)}
              data-testid={panel.props.testId ?? ListTestId.listItem}
            >
              {listItem}
              <ArrowContainer style={restProps.arrowStyle}>
                {arrowIcon}
              </ArrowContainer>
            </Item>
            {panelContent}
          </React.Fragment>
        );
      })}
    </ListContainer>
  );
};

export default List;
