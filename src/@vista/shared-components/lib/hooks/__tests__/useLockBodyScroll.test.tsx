import { cleanup, renderHook } from "@testing-library/react-hooks";

import useLockBodyScroll, {
  CssProperties,
  getBodyCssProperty,
} from "../useLockBodyScroll";

describe("useLockBodyScroll", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("sets overflow: hidden on body tag when isLocked is not passed in", () => {
    renderHook(useLockBodyScroll);

    expect(getBodyCssProperty(CssProperties.OVERFLOW)).toBe("hidden");
  });

  it("sets overflow: hidden on body tag when isLocked is true", () => {
    renderHook(() => useLockBodyScroll(true));

    expect(getBodyCssProperty(CssProperties.OVERFLOW)).toBe("hidden");
  });

  it("does NOT sets overflow: hidden on body tag when isLocked is false", () => {
    renderHook(() => useLockBodyScroll(false));

    expect(getBodyCssProperty(CssProperties.OVERFLOW)).toBe("");
  });

  it("does NOT sets overflow: hidden on body tag when isLocked changes from false to true", () => {
    const { rerender } = renderHook((props) => useLockBodyScroll(props), {
      initialProps: false,
    });

    expect(getBodyCssProperty(CssProperties.OVERFLOW)).toBe("");

    rerender(true);

    expect(getBodyCssProperty(CssProperties.OVERFLOW)).toBe("hidden");
  });

  it("unsets overflow property on body tag after unmounting", () => {
    renderHook(useLockBodyScroll);

    const overflowAfterRunningHook = getBodyCssProperty(CssProperties.OVERFLOW);
    cleanup();
    const overflowAfterUnmountingHook = getBodyCssProperty(
      CssProperties.OVERFLOW
    );

    expect(overflowAfterRunningHook).toBe("hidden");
    expect(overflowAfterUnmountingHook).toBe("unset");
  });
});
