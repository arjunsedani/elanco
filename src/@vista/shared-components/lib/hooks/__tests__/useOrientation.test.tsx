import { act, fireEvent, render } from "@testing-library/react";

import { useOrientation } from "../useOrientation";

const TestComponent = ({ callback }: { callback?: () => void }) => {
  callback?.();
  return null;
};

describe("useOrientation Hook Test", () => {
  let orientation = "";
  let layout = "";
  let isLock = false;
  let rotateToLandscape: () => void | undefined;
  let rotateToPortrait: () => void | undefined;
  let clear: () => void | undefined;

  it("inital hook", () => {
    renderHook();
    expect(orientation).toEqual("Portrait");
    expect(layout).toEqual("Portrait");
    expect(isLock).toEqual(false);
  });

  it("updated hook when window resize", () => {
    renderHook();
    // inital
    expect(orientation).toEqual("Portrait");
    // resize
    window.resizeTo(400, 200);
    fireEvent.resize(window);
    expect(orientation).toEqual("Landscape");
    expect(layout).toEqual("Landscape");
    expect(isLock).toEqual(false);
    // clear
    clear();
  });

  it("manul rotate to landscape, then change back", () => {
    renderHook();
    // inital
    expect(orientation).toEqual("Portrait");
    // rotate to landscape manually
    act(() => {
      rotateToLandscape();
    });
    expect(orientation).toEqual("Portrait");
    expect(layout).toEqual("LockLandscape");
    expect(isLock).toEqual(true);
    // change back
    act(() => {
      rotateToPortrait();
    });
    expect(orientation).toEqual("Portrait");
    expect(layout).toEqual("Portrait");
    expect(isLock).toEqual(false);

    clear();
  });

  const renderHook = () => {
    render(
      <TestComponent
        callback={() => {
          const result = useOrientation();
          orientation = result.orientation;
          layout = result.layout;
          isLock = result.isLock;
          rotateToLandscape = result.lockLandscape;
          rotateToPortrait = result.unlockLandscape;
          clear = result.clear;
        }}
      />
    );
  };
});
