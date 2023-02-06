import * as React from "react";
import { warnDeprecated } from "../utils";

describe("Utils", () => {
  const originalWarn = console.warn;

  beforeEach(() => {
    console.warn = jest.fn();
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  describe("warnDeprecated - positives", () => {
    it(`should warn in console with deprecations info and return the result of deprecations checking.`, () => {
      const var1 = 1;
      const var2 = 2;
      const var3 = 3;

      const result = warnDeprecated(
        [var1, `var1`],
        [var2, `var2`, `var222`],
        [var3, `var3`, `var333`, `1.0.0`],
      );

      expect(result).toMatchObject([
        { result: `warned`, input: [var1, `var1`] },
        { result: `warned`, input: [var2, `var2`, `var222`] },
        { result: `warned`, input: [var3, `var3`, `var333`, `1.0.0`] },
      ]);

      expect(console.warn).toBeCalledWith(
        `var1 will be deprecated in next Major release! Please use its alternatives instead.`,
      );
      expect(console.warn).toBeCalledWith(
        `var2 will be deprecated in next Major release! Please use var222 instead.`,
      );
      expect(console.warn).toBeCalledWith(
        `var3 will be deprecated in 1.0.0! Please use var333 instead.`,
      );
    });
  });

  describe("warnDeprecated - negatives", () => {
    it(`should NOT warn in console if value or propName is undefined.`, () => {
      const result = warnDeprecated(
        [, `var1`],
        [2, undefined],
        [2, , `var222`],
      );

      expect(result).toMatchObject([
        { result: `skipped`, input: [undefined, `var1`] },
        { result: `skipped`, input: [2, undefined] },
        { result: `skipped`, input: [2, undefined, `var222`] },
      ]);

      expect(console.warn).not.toBeCalled();
    });
  });
});
