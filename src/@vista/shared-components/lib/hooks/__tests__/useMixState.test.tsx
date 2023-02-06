import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

import { useMixState } from "../useMixState";

describe("test useMixstate", () => {
  const defaultValue = "default";
  it("should update the result to updated props", () => {
    let value: string | null = null;
    const { result, rerender } = renderHook(() =>
      useMixState(value, defaultValue)
    );

    expect(result.current[0]).toBe("default");

    value = "update";
    rerender();
    expect(result.current[0]).toBe("update");
  });

  it("should update the result by call the function", () => {
    const { result } = renderHook(() => useMixState(undefined, defaultValue));

    act(() => {
      result.current[1]("update");
    });

    expect(result.current[0]).toBe("update");
  });
});
