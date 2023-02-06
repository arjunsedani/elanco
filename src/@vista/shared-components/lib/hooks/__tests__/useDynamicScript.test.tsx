import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useDynamicScript } from "../useDynamicScript";

describe("useDynamicScript", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });
  it("create a <script> in header", () => {
    const { result } = renderHook(() => useDynamicScript("test"));
    const script = document.getElementsByTagName("script")[0];
    expect(script).toBeInTheDocument();
    expect(script.src).toBe("http://localhost/test");
    expect(script.type).toBe("text/javascript");
    expect(script.async).toBe(true);
    expect(result.current).toEqual({
      ready: false,
      errorLoading: false,
      loading: true,
    });
  });

  it("ready when script is loaded", () => {
    const { result } = renderHook(() => useDynamicScript("test"));
    const script = document.getElementsByTagName("script")[0];
    fireEvent.load(script);
    expect(result.current.loading).toBe(false);
    expect(result.current.errorLoading).toBe(false);
    expect(result.current.ready).toBe(true);
  });

  it("return errorLoading when script is failed", () => {
    const { result } = renderHook(() => useDynamicScript("test"));
    const script = document.getElementsByTagName("script")[0];
    fireEvent.error(script);
    expect(result.current.loading).toBe(false);
    expect(result.current.errorLoading).toBe(true);
    expect(result.current.ready).toBe(false);
  });

  it("remove the script tag after component destory", () => {
    const { unmount } = renderHook(() => useDynamicScript("test"));
    const script = document.getElementsByTagName("script")[0];
    expect(script).toBeInTheDocument();
    unmount();
    expect(script).not.toBeInTheDocument();
  });
});
