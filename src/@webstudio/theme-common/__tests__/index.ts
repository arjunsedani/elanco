import themeBuilder, { prop } from "../index";
const themeBase12 = themeBuilder({ baseFontSize: 12 });
const themeDefault = themeBuilder();
const props = { theme: themeBase12 };
const extendedThemePropsBase12 = {
  theme: {
    ...themeBase12,
    someThingNew: "yyy",
    brandPrimary: "xxx",
    defaultColorSample: "red",
  },
};
const extendedThemePropsDefault = {
  theme: {
    ...themeDefault,
    defaultColorSample: "red",
  },
};
describe("Theme Common", () => {
  it("Should have some props", () => {
    expect("colourBlack1").toBeDefined();
    expect("colourBlack1").toBe("colourBlack1");
    expect("colourBlack2").toBe("colourBlack2");
    expect("brandPrimary").toBe("brandPrimary");
  });
  it("Should return correct values", () => {
    expect(prop("colourBlack1")(props)).toBe("#172633");
    expect(prop("colourBlack2")(props)).not.toBe("#172633");
    expect(prop("colourBlack1")(props)).toBe("#172633");
    expect(prop("brandPrimary")(props)).toBe("#ff3e3e");
  });
  it("Should baseFontSize correct", () => {
    expect(prop("textH1")(props)).toBe(`2.667rem`); // (16 / 12) * 2
    expect(prop("textH4")(props)).toBe(`1.5rem`); // (16 / 12) * 1.125
  });
  it("Should extend theme", () => {
    expect(prop("someThingNew")(extendedThemePropsBase12)).toBe("yyy");
    expect(prop("brandPrimary")(extendedThemePropsBase12)).not.toBe("#ff3e3e");
    expect(prop("brandPrimary")(extendedThemePropsBase12)).toBe("xxx");
  });
  it("should convert px to rem", () => {
    expect(themeBase12.pxToRem(12)).toBe("1rem");
    expect(prop("xxs")(extendedThemePropsBase12)).toBe("1.333rem"); // (16 / 12) * 1
    expect(prop("xxxs")(extendedThemePropsBase12)).toBe("1.167rem"); // (16 / 12) * 0.875
  });
  it("Should getDefault Color", () => {
    expect(
      (prop as any)(
        "someThingNewNotExits",
        "defaultColorSample"
      )(extendedThemePropsDefault)
    ).toBe("red");
    expect(
      (prop as any)("someThingNewNotExits")(extendedThemePropsDefault)
    ).toBe(undefined);
  });
  it("should convert px to rem on default", () => {
    expect(prop("xxs")(extendedThemePropsDefault)).toBe("1rem"); // (16 / 16) * 1
    expect(prop("xxxs")(extendedThemePropsDefault)).toBe("0.875rem"); // (16 / 16) * 0.875
  });
});
