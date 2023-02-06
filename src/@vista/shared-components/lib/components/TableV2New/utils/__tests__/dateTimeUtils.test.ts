import {
  FULL_DATE_TIME,
  FULL_DATE_TIME_IN_SGT,
  getFormattedDate,
  getFormattedLocalDateTime,
  getFormattedTime,
  getISOString,
  parseISODateTimeToLocal,
} from "../dateTimeUtils";

describe("dateTimeUtils", () => {
  describe("getFormattedDate", () => {
    it("should return formatted date", () => {
      expect(getFormattedDate("2022-09-30T22:21:25+08:00")).toBe("30 Sep 2022");
    });

    it("should return - when datetime is an empty string", () => {
      expect(getFormattedDate("")).toBe("-");
    });

    it("should return - when datetime is null", () => {
      expect(getFormattedDate(null)).toBe("-");
    });

    it("should return custom date format if customDateFormat is passed", () => {
      expect(getFormattedDate("2022-09-30T22:21:25+08:00", "YYYY-MM-DD")).toBe(
        "2022-09-30"
      );
    });
  });

  describe("getFormattedTime", () => {
    it("should return formatted time", () => {
      expect(getFormattedTime("2022-04-30T22:21:25+08:00")).toBe("10:21:25 PM");
    });

    it("should return - when datetime is an empty string", () => {
      expect(getFormattedTime("")).toBe("-");
    });

    it("should return - when datetime is null", () => {
      expect(getFormattedTime(null)).toBe("-");
    });
  });

  describe("getISOString", () => {
    it("should return date time in ISO format", () => {
      expect(getISOString("2021-06-08 23:00:00")).toBe(
        "2021-06-08T23:00:00.000Z"
      );
      expect(getISOString("2021-06-08T23:00:00")).toBe(
        "2021-06-08T23:00:00.000Z"
      );
      expect(getISOString("06 JUN 2021 23:00:00 UTC")).toBe(
        "2021-06-06T23:00:00.000Z"
      );
    });

    it("should return empty string when datetime is falsy", () => {
      expect(getISOString("")).toBe("");
      expect(getISOString(null)).toBe("");
    });

    it("should return empty string when datetime is invalid", () => {
      expect(getISOString("2021-invalid")).toBe("");
      expect(getISOString("-")).toBe("");
    });
  });

  describe("parseISODateTimeToLocal", () => {
    it("should return the expected local datetime format", () => {
      expect(
        parseISODateTimeToLocal("2021-06-08T23:00:00.000Z", FULL_DATE_TIME)
      ).toBe("2021-06-09 07:00:00");
    });

    it("should return - when the datetime is not valid", () => {
      expect(parseISODateTimeToLocal("invalid", FULL_DATE_TIME)).toBe("-");
    });

    it("should return - when the datetime is empty string", () => {
      expect(parseISODateTimeToLocal("", FULL_DATE_TIME)).toBe("-");
    });

    it("should return - when the datetime is null", () => {
      expect(parseISODateTimeToLocal(null, FULL_DATE_TIME)).toBe("-");
    });
  });

  describe("getFormattedLocalDateTime", () => {
    it("should return the expected formatted datetime", () => {
      expect(
        getFormattedLocalDateTime("2022-07-12 14:35:14", FULL_DATE_TIME_IN_SGT)
      ).toBe("12 Jul 2022, 02:35:14 PM (SGT)");
    });

    it("should return - when the datetime is not valid", () => {
      expect(getFormattedLocalDateTime("invalid", FULL_DATE_TIME_IN_SGT)).toBe(
        "-"
      );
    });

    it("should return - when the datetime is empty string", () => {
      expect(getFormattedLocalDateTime("", FULL_DATE_TIME_IN_SGT)).toBe("-");
    });

    it("should return - when the datetime is null", () => {
      expect(getFormattedLocalDateTime(null, FULL_DATE_TIME_IN_SGT)).toBe("-");
    });
  });
});
