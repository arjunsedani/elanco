import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";

import { MfeName } from "../../models/enums";

import { useDynamicScript } from "../useDynamicScript";
import { useFederatedComp } from "../useFederComp";

jest.mock("../useDynamicScript", () => ({ useDynamicScript: jest.fn() }));

describe("useFederComp", () => {
  beforeEach(() => {
    (window as any).__webpack_share_scopes__ = {
      default: {
        get: () => new Promise((res) => res(jest.fn())),
      },
    };
    (window as any).__webpack_init_sharing__ = jest.fn();

    (useDynamicScript as unknown as jest.Mock).mockReturnValue({
      ready: false,
      errorLoading: false,
      loading: true,
    });
    (window as any).test = {
      get: jest
        .fn()
        .mockImplementation(
          (module: string) => () =>
            Promise.resolve({ default: () => "Lazy Component" })
        ),
      init: jest.fn(),
    };
  });

  it("will download remote component and load it", () => {
    const { result } = renderHook(() => useFederatedComp());
    expect(result.current.errorLoading).toBe(false);
    expect(result.current.Component).not.toBeNull();
  });

  it("throw a error when the process of downloading remote component", async () => {
    expect.assertions(1);
    const { result, rerender } = renderHook(() => useFederatedComp());
    (useDynamicScript as unknown as jest.Mock).mockReturnValue({
      ready: false,
      errorLoading: true,
      loading: false,
    });
    rerender();
    try {
      expect(result).toThrowError();
    } catch (e: any) {
      expect(e.message).toBe("Failed to load remote module");
    }
  });

  it("will return a lazy component", async () => {
    const LoadComp = () => {
      const { Component } = useFederatedComp("./", "test" as MfeName, "./");
      return (
        <React.Suspense fallback="loading">
          {Component && <Component />}
        </React.Suspense>
      );
    };
    const { rerender } = render(<LoadComp />);
    (useDynamicScript as unknown as jest.Mock).mockReturnValue({
      ready: true,
      errorLoading: false,
      loading: false,
    });
    rerender(<LoadComp />);

    expect(await screen.findByText("Lazy Component")).toBeInTheDocument();
  });
});
