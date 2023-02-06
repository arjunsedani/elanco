import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(tz);

export const getFormattedDate = (
  dateTime: string | null,
  customFormat?: string
) => {
  if (dayjs(dateTime).isValid()) {
    return customFormat
      ? dayjs(dateTime).format(customFormat)
      : dayjs(dateTime).format("DD MMM YYYY");
  }

  return "-";
};

export const getFormattedTime = (dateTime: string | null) =>
  dayjs(dateTime).isValid() ? dayjs(dateTime).format("hh:mm:ss A") : "-";

export const getISOString = (dateTime: string | null) =>
  dayjs(dateTime).isValid() ? dayjs.utc(dateTime).toISOString() : "";

export const parseISODateTimeToLocal = (
  dateTimeInISO: string | null,
  format: string
) =>
  dayjs(dateTimeInISO).isValid()
    ? dayjs.utc(dateTimeInISO).local().format(format)
    : "-";

export const getFormattedLocalDateTime = (
  dateTimeInLocal: string | null,
  format: string
) =>
  dayjs(dateTimeInLocal).isValid()
    ? dayjs(dateTimeInLocal).format(format)
    : "-";

export const FULL_DATE_TIME = "YYYY-MM-DD HH:mm:ss";
export const FULL_DATE_TIME_IN_SGT = "DD MMM YYYY, hh:mm:ss A (SGT)";
