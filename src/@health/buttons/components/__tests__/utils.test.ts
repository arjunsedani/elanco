import { warnDeprecated } from "../../_utils/deprecation";

describe("Utils", () => {
  const OLD_WARN = console.warn;
  const OLD_ENV = process.env;
  const TEST_PROPS = {
    var1: 1,
    var2: 2,
    var3: 3,
  };

  beforeEach(() => {
    jest.resetModules();
    console.warn = jest.fn();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    console.warn = OLD_WARN;
    process.env = OLD_ENV;
  });

  describe("warnDeprecated - positives", () => {
    it(`should warn in console with deprecations info and return the result of deprecations checking.`, () => {
      const result = warnDeprecated(
        { prop: TEST_PROPS, propName: `var1` },
        { prop: TEST_PROPS, propName: `var2`, alternative: `var222` },
        {
          prop: TEST_PROPS,
          propName: `var3`,
          alternative: `var333`,
          deprecatedInVer: `1.0.0`,
        }
      );

      expect(result).toMatchObject([
        { result: `warned`, input: { prop: TEST_PROPS, propName: `var1` } },
        {
          result: `warned`,
          input: { prop: TEST_PROPS, propName: `var2`, alternative: `var222` },
        },
        {
          result: `warned`,
          input: {
            prop: TEST_PROPS,
            propName: `var3`,
            alternative: `var333`,
            deprecatedInVer: `1.0.0`,
          },
        },
      ]);

      expect(console.warn).toBeCalledWith(
        `var1 will be deprecated in next Major release! Please use its alternatives instead.`
      );
      expect(console.warn).toBeCalledWith(
        `var2 will be deprecated in next Major release! Please use var222 instead.`
      );
      expect(console.warn).toBeCalledWith(
        `var3 will be deprecated in 1.0.0! Please use var333 instead.`
      );
    });
  });

  describe("warnDeprecated - negatives", () => {
    it(`should NOT warn in console if value or propName is undefined.`, () => {
      const result = warnDeprecated(
        { prop: TEST_PROPS, propName: undefined },
        { prop: TEST_PROPS, propName: `var4`, alternative: `var222` }
      );

      expect(result).toMatchObject([
        { result: `skipped`, input: { prop: TEST_PROPS, propName: undefined } },
        {
          result: `skipped`,
          input: {
            prop: TEST_PROPS,
            propName: `var4`,
            alternative: `var222`,
          },
        },
      ]);
      expect(console.warn).not.toBeCalled();
    });
    it(`should NOT warn in production environment.`, () => {
      process.env.NODE_ENV = "production";
      const result = warnDeprecated({ prop: TEST_PROPS, propName: `var1` });
      expect(result).toMatchObject([]);
      expect(console.warn).not.toBeCalled();
    });
  });
});
