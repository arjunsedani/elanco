import { act, render } from "@testing-library/react";

import useOnScreen from "../useOnScreen";

const TestComponent = ({ callback }: { callback?: () => void }) => {
  callback?.();
  return null;
};

type Item = {
  callback: IntersectionObserverCallback;
};

const mockRect: DOMRectReadOnly = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => {},
};
const mockElement: Element = Object.create(Element.prototype, {});
const mockEntry = (intersecting: boolean): IntersectionObserverEntry => {
  return {
    isIntersecting: intersecting,
    boundingClientRect: mockRect,
    intersectionRatio: 0,
    intersectionRect: mockRect,
    rootBounds: null,
    target: mockElement,
    time: 0,
  };
};

describe("useOnScreen Hook Test", () => {
  let isIntersecting = false;

  afterEach(() => {
    isIntersecting = false;
  });

  it("should return true if the element is visible", () => {
    let observer: IntersectionObserver, observerItem: Item;

    window.IntersectionObserver = jest.fn((cb, options = {}) => {
      const item: Item = {
        callback: cb,
      };
      const instance: IntersectionObserver = {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
        root: null,
        rootMargin: "",
        thresholds: [],
      };
      observer = instance;
      observerItem = item;
      return instance;
    });

    const container = {
      current: {},
    };
    renderHook({ container });

    act(() => {
      observerItem.callback([mockEntry(true)], observer);
    });
    expect(isIntersecting).toEqual(true);

    act(() => {
      observerItem.callback([mockEntry(false)], observer);
    });
    expect(isIntersecting).toEqual(false);
  });

  const renderHook = (args: any) => {
    render(
      <TestComponent
        callback={() => {
          const actual = useOnScreen(args.container);
          isIntersecting = actual;
        }}
      />
    );
  };
});
