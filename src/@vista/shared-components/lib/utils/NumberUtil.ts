/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Get Decimal and Fraction for a number
 *
 * @param {number, string} n Number value with decimal
 * @param {boolean} isDefaultValue Boolean value with either true or false
 * @returns {{ decimal: string; fraction: string }} Object containing deicmal and fraction values
 */
export const getDecimalAndFraction = (
  n: number | string,
  isDefaultValue?: boolean
): { decimal: string; fraction: string } => {
  const [dec, frac] = `${n}`.split(".");

  const getFulfillFraction = (inputtedFrac = "") => {
    if (isDefaultValue) {
      return inputtedFrac;
    }

    const fracInFloat = parseFloat(`0.${inputtedFrac}`);
    const formattedFrac = `${fracInFloat}`.split(".")[1] || "";

    const zeroLength =
      formattedFrac.length <= 2
        ? 2 - formattedFrac.length
        : formattedFrac.length;
    const fulfillZero = Array.from("0".repeat(zeroLength)).join("");

    return formattedFrac.length <= 2
      ? `${formattedFrac}${fulfillZero}`
      : formattedFrac;
  };

  return {
    decimal: isNaN(Number(dec)) ? dec : Number(dec || "0").toLocaleString(),
    fraction: getFulfillFraction(frac),
  };
};

/**
 * Get leading 0 added
 *
 * @param {number} num
 * @returns string, number with '0' added before, if < 10
 */
export const leading0 = (num: number) => (num < 10 ? `0${num}` : `${num}`);

/**
 * Get number with + as prefix and % as suffix.
 *
 * @param {number} num
 * @returns string, number with '+' added before and '%' added after if > 0
 */
export const formatPercentageValue = (val: string) => {
  const v = Number(val);
  if (v > 0) {
    return `+${v}%`;
  }
  return `${v}%`;
};

/**
 * Get number with , at thousands position.
 *
 * @param {number} num
 * @returns string with ',' added at thousands position
 */
export const formatNumber = (num: string | number) => {
  if (!isValidNumeral(num)) {
    return "";
  }
  const output = num.toString().split(".");
  output[0] = output[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return output.join(".");
};

export const formatFractionToFixedValue = (
  n: number | string,
  fractionDigits?: number
): string => {
  if (isNaN(Number(n)) || !n) {
    return "";
  }
  return Number(n).toFixed(fractionDigits);
};

/**
 * Check whether a parameter is a valid number or not
 *
 * @param {any} val
 * @returns boolean
 */
export const isValidNumeral = (val?: any) => {
  if (
    val !== undefined &&
    val !== null &&
    String(val).trim() !== "" &&
    !isNaN(val as any)
  ) {
    return true;
  }
  return false;
};

/**
 * Converts a parameter to number if valid, otherwise 0 and returns it
 *
 * @param {any} val
 * @returns a number, e.g. retrieveNumerals("123.22") => 123.22, retrieveNumerals("53a") => 0
 */
export const retrieveNumerals = (val?: any) =>
  isValidNumeral(val) ? Number(val) : 0;

/**
 * Rounds off a decimal number upto the decimal count and has the option to keep the number of decimals fixed
 *
 * @param val The value to be rounded off. Can be supplied in number as well as string format.
 * @param roundUpto The decimal count to be rounded off to. Negative numbers are treat as 0.
 * @param fixedDecimal (Optional) Keep the decimal count fixed, will add trailing 0s
 * @returns {string|null} Rounded off value in string format. Will return `null` if invalid value is supplied.
 * @example
 * roundOffWithOptionalFixedDecimal(7754.835993, 3) => "7754.836"
 * roundOffWithOptionalFixedDecimal("7754.835993", 1) => "7754.8"
 * roundOffWithOptionalFixedDecimal(7754.835993, 8, true) => "7754.83599300"
 * roundOffWithOptionalFixedDecimal(7754.835993, 0, true) => "7755"
 * roundOffWithOptionalFixedDecimal(7754.835993, 4, false) => "7754.836"
 * roundOffWithOptionalFixedDecimal("234j2123", 4, false) => null
 */
export const roundOffWithOptionalFixedDecimal = (
  val: number | string,
  roundUpto: number,
  fixedDecimal?: boolean
): string | null => {
  if (!isValidNumeral(val)) {
    return null;
  }
  const roundedOffNum =
    roundUpto > 0
      ? Math.round(retrieveNumerals(val) * Math.pow(10, roundUpto)) /
        Math.pow(10, roundUpto)
      : Math.round(retrieveNumerals(val));
  if (
    !!fixedDecimal &&
    (roundedOffNum % 1 === 0 ||
      roundedOffNum.toString().split(".")[1].length < roundUpto)
  ) {
    return retrieveNumerals(val).toFixed(roundUpto);
  }
  return roundedOffNum.toString();
};
