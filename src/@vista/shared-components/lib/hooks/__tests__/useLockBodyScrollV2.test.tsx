import { renderHook } from "@testing-library/react-hooks";
import { useRef } from "react";

import useLockBodyScrollV2 from "../useLockBodyScrollV2";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

jest.mock("body-scroll-lock", () => ({
  disableBodyScroll: jest.fn(),
  enableBodyScroll: jest.fn(),
}));

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  return {
    ...originReact,
    useRef: jest.fn(() => ({ current: {} })),
  };
});

const mockRef = useRef(null);

describe("useLockBodyScrollv2", () => {
  it("calls disableBodyScroll if isLocked is true", () => {
    renderHook(() => useLockBodyScrollV2(mockRef));

    expect(disableBodyScroll).toBeCalledWith(mockRef.current);
  });

  it("does not call disableBodyScroll if isLocked is false", () => {
    renderHook(() => useLockBodyScrollV2(mockRef, false));

    expect(disableBodyScroll).not.toBeCalled();
  });

  it("calls enableBodyScroll on unmounting", () => {
    const { unmount } = renderHook(() => useLockBodyScrollV2(mockRef));
    unmount();

    expect(enableBodyScroll).toBeCalledWith(mockRef.current);
  });
});
