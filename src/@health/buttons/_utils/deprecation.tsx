type Deprecation = {
  prop: any;
  propName: string;
  alternative?: string;
  deprecatedInVer?: string;
};

export function warnDeprecated(...deprecations: Deprecation[]): any[] {
  if (process.env.NODE_ENV === "production") {
    return [];
  }

  const result: any[] = [];
  try {
    deprecations.forEach((dep: Deprecation) => {
      const {
        prop,
        propName,
        alternative = `its alternatives`,
        deprecatedInVer = `next Major release`,
      } = dep;

      if ([prop[propName], propName].includes(undefined)) {
        result.push({ result: "skipped", input: dep });
      } else {
        result.push({ result: "warned", input: dep });
        console.warn(
          `${propName} will be deprecated in ${deprecatedInVer}! Please use ${alternative} instead.`
        );
      }
    });
  } catch (error) {
    console.log(`Deprecations checking has been an error.`, error);
  }

  return result;
}
