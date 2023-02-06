import { Locale, RegionId, regionTimeZoneLabels } from "../models/enums";

import { leading0 } from "./NumberUtil";

export enum DateFormat {
  DDMMMYYYY_space = "dd MMM yyyy",
  YYYYDDMM_slash = "yyyy/dd/mm",
  YYYYDDMM_hyphen = "yyyy-dd-mm",
  YYYYMMDD = "yyyymmdd",
  DDMMYYYY_underScore = "DD_MM_YYYY",
  YYYYMMDD_chinese = "YYYYMMDD",
  dateObj = "dateObj",
}

/**
 * Get date, month, year and time from a date object or date string
 *
 * @param {Date | string} date date value in Date or string format
 * @returns {date: string, month: string, year: number, time: string} returns an object
 * with {date: dd, month: MMM, year: XXXX, time: 'hh:mm:ss AM/PM'} format
 *
 */

export const getAllDateFields = (
  date?: string | Date
): { date: string; month: string; year: string; time: string } => {
  let formattedDate: Date | null;
  if (typeof date === "string") {
    const dateWithT = !!date ? date.trim().replace(" ", "T") : "";
    formattedDate = !isNaN(Date.parse(dateWithT)) ? new Date(dateWithT) : null;
  } else {
    formattedDate = !!date ? date : null;
  }

  if (!formattedDate) return { date: "", month: "", year: "", time: "" };

  const hrs = formattedDate.getHours();

  return {
    date: leading0(formattedDate.getDate()),
    month: formattedDate.toLocaleDateString("en-GB", { month: "short" }),
    year: `${formattedDate.getFullYear()}`,
    time: `${hrs > 12 ? leading0(hrs - 12) : leading0(hrs)}:${leading0(
      formattedDate.getMinutes()
    )}:${leading0(formattedDate.getSeconds())} ${hrs >= 12 ? "PM" : "AM"}`,
  };
};

/**
 * Get day is past from a given date by a given days difference
 *
 * @param {Date} date Date initialised with new Date() constructor
 * @param {number} dayDiff integer value of expected difference between days
 * @returns Only the past date with specified difference
 *
 */
export const getPastDay = (date: Date, dayDiff: number) => {
  return new Date(new Date().setDate(date.getDate() - dayDiff));
};

/**
 * Get date range from given date to past considering given range limit
 *
 * @param {Date} date Date initialised with new Date() constructor
 * @param {number} dateRangeLimit integer value of expected range
 * @returns [Date, Date] which corresponds to [Date in past, Input date]
 *
 */
export const getDateRange = (date: Date, dateRangeLimit: number) => {
  return [new Date(new Date().setDate(date.getDate() - dateRangeLimit)), date];
};

/**
 * @param {Date} date date object
 * @param {DateFormat} format
 * @returns date returned in given format
 *
 */
export const formatDateToString = (date: Date, format: DateFormat) => {
  if (!date) {
    return "";
  }
  const transactionDate = getAllDateFields(date);
  switch (format) {
    case DateFormat.DDMMMYYYY_space:
      return `${transactionDate.date} ${transactionDate.month} ${transactionDate.year}`;
    case DateFormat.YYYYDDMM_slash:
      return date.toLocaleDateString("en-US").split("/").reverse().join("/");
    case DateFormat.YYYYMMDD:
      return date.toLocaleDateString("en-GB").split("/").reverse().join("");
    case DateFormat.DDMMYYYY_underScore:
      return date.toLocaleDateString("en-GB").split("/").join("_");
    case DateFormat.YYYYMMDD_chinese:
      return date.toLocaleDateString("zh-SG");
    default:
      return date.toLocaleDateString("en-GB");
  }
};

export const formatDateToYearMonthDate = (
  value: string,
  format: DateFormat
): Date | string => {
  if (!value || !value.trim()) {
    return "";
  }
  switch (format) {
    case DateFormat.dateObj:
      return new Date(
        formatDateToYearMonthDate(value, DateFormat.YYYYDDMM_hyphen)
      );
    case DateFormat.YYYYDDMM_hyphen:
      return value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    case DateFormat.DDMMMYYYY_space:
      const { date, month, year } = getAllDateFields(
        formatDateToYearMonthDate(value, DateFormat.YYYYDDMM_hyphen)
      );
      return `${date} ${month} ${year}`;
    case DateFormat.YYYYMMDD_chinese:
      return formatDateToString(
        formatDateToYearMonthDate(value, DateFormat.dateObj) as Date,
        format
      );
    default:
      return value;
  }
};

export const getAllDateFieldsV2 = (
  value?: string | Date | null,
  locale?: Locale,
  labelObj?: any
): {
  date: string;
  month: string;
  year: string;
  time?: string;
  dateStr?: string;
} => {
  let formattedDate: Date | null;

  if (typeof value === "string") {
    value = value.trim().replace(" ", "T");
    if (isNaN(Date.parse(value))) {
      // only for value in format of YYYYMMDD as per the BE response
      const [year, month, date] = value.split(/(....)(..)(..)/).filter(Boolean);
      return { year, month, date };
    } else {
      formattedDate = !isNaN(Date.parse(value)) ? new Date(value) : null;
    }
  } else {
    formattedDate = !!value ? value : null;
  }

  if (!formattedDate) {
    return { date: "", month: "", year: "", time: "" };
  }

  const hrs = formattedDate.getHours();
  const formattedHours = hrs % 12 || 12;
  const res = {
    date: leading0(formattedDate.getDate()),
    month: formattedDate.toLocaleDateString("en-GB", { month: "short" }),
    year: `${formattedDate.getFullYear()}`,
    time: `${
      formattedHours > 12
        ? leading0(formattedHours - 12)
        : leading0(formattedHours)
    }:${leading0(formattedDate.getMinutes())}:${leading0(
      formattedDate.getSeconds()
    )} ${hrs > 11 ? labelObj.PM : labelObj.AM}`,
  };
  return {
    ...res,
    dateStr:
      locale === Locale.EN
        ? `${res.date} ${res.month} ${res.year}`
        : formattedDate.toLocaleDateString("zh-SG"),
  };
};

export const getDateString = (
  dateTime?: string,
  regionId?: RegionId,
  locale?: Locale,
  labelObj?: any
) => {
  if (!dateTime) {
    return "";
  }
  if (dateTime.indexOf(" ") <= 0) {
    return formatDateToYearMonthDate(dateTime, DateFormat.DDMMMYYYY_space);
  } else {
    const { date, month, year, time, dateStr } = getAllDateFieldsV2(
      dateTime,
      locale,
      labelObj
    );
    return `${
      locale !== Locale.ZH ? `${date} ${month} ${year}` : `${dateStr}`
    }, ${time}  (${regionTimeZoneLabels[regionId || RegionId.SG]})`;
  }
};
