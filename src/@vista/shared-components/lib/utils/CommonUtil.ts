/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Currently its checking only for Arrays
 * @param {any[]} value Array value
 */
export const isNotEmpty = (value: any[]) =>
  !!value && Array.isArray(value) && value.length > 0;

export const checkDataType = (val: any) => {
  return typeof val === "string"
    ? !isNaN(Date.parse(val))
      ? "date"
      : "string"
    : !isNaN(val)
    ? "number"
    : "string";
};

export const pick = (obj: any, keys: any) => {
  return Object.assign({}, ...keys.map((key: any) => ({ [key]: obj[key] })));
};

/**
 * interpolate function is used to replace %s with empty space in the strings
 * @param {any[]} valueArray values in sequence to be inserted in the place of %s
 * @param {string} keyString key string containg %s
 * eg: interpolate("%s is %s %s", ["This", "sample", "example"]); // "This is sample example"
 */

export const interpolate = (keyString: string, valueArray: any) => {
  const regex = /%s/;
  const reducerFn = (prevValue: string, currentValue: string) =>
    prevValue.replace(regex, currentValue);
  return valueArray.reduce(reducerFn, keyString);
};

/**
 * call a function given number of times
 * @param {Function} cb function to call
 * @param {n} repeatNum times to call
 */
export const repeat =
  (cb: (...args: any) => void, ...args: any[]) =>
  (n: number) =>
    Array.from(Array(n)).map((x, i) => {
      return cb(...args, i);
    });

/**
 * This function is used to capitalize first letter
 * @param {string} inputStr string which need to capitalize
 * @return {string} string with first letter capitlize
 */
export const capitalizeFirstLetter = (inputStr: string) => {
  return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
};

export const lineBreakMod = (str: string) => str.split("\\n").join("<br />");

/**
 * Group by operation on array based on key and field
 * @param {any[]} array Array value
 * @param {string} identifier object identifier
 * @param {string} groupByKey field to add
 */
export const groupBy = (
  array: any[],
  identifier: string,
  groupByKey: string
) => [
  ...array
    .reduce((map, item) => {
      const key = item[identifier];
      const prev = map.get(key);

      if (prev) {
        prev[groupByKey] += item[groupByKey];
      } else {
        map.set(key, Object.assign({}, item));
      }

      return map;
    }, new Map())
    .values(),
];

/*

Put all non-business related utility methods here.
All methods must be documented

For example:

const getBase64Data = (file: File) : Base64 => {}
const getFileType = (fileName: string) : string => {}
const formatAmount = (amount: number) : string => {}

*/

type EnumValueMap<T extends { [k: string]: string }> = { [K in T[keyof T]]: K };

export function convertEnumValuesToObject<T extends { [k: string]: string }>(
  enumerable: T
): EnumValueMap<T> {
  return (Object as any).fromEntries(
    Object.values(enumerable).map((v) => [v, v])
  );
}

export const hideCurrency = (value: number | string) => value !== "-";
