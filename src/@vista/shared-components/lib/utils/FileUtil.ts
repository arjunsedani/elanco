import { Locale } from "../models/enums";

export enum FileType {
  CSV = "text/csv",
  PLAIN = "text/plain",
}

/**
 * Creates element and download file on client side
 *
 * @param {string} fileName
 * @param {string} text
 * @param {FileType} type
 */
export const downloadFile = (
  fileName: string,
  content: string,
  type: FileType,
  locale?: Locale
) => {
  const contentPrefix = locale === Locale.ZH ? "\ufeff" : "";
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:${type};charset=utf-8,${encodeURIComponent(
      `${contentPrefix}${content}`
    )}`
  );
  element.setAttribute("download", fileName);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
