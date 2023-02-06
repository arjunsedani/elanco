type Deprecation = [unknown, string, string?, string?];

export function warnDeprecated(...deprecations: Deprecation[]) {
  const result: any[] = [];
  try {
    deprecations.forEach((dep: Deprecation) => {
      const [
        value,
        propName,
        alternative = `its alternatives`,
        deprecatedInVer = `next Major release`,
      ] = dep;

      if ([value, propName].includes(undefined)) {
        result.push({ result: "skipped", input: dep });
        return;
      }
      if (value !== propName) {
        result.push({ result: "skipped", input: dep });
        return;
      }

      console.warn(
        `${propName} will be deprecated in ${deprecatedInVer}! Please use ${alternative} instead.`,
      );
      result.push({ result: "warned", input: dep });
    });
  } catch (error) {
    console.log(`Deprecations checking has been an error.`, error);
  }

  return result;
}
