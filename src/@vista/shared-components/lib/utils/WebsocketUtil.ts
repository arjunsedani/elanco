function possibleWebSocketErrorCodes(): string {
  const errorCodes = [
    1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011,
    1012, 1013, 1014, 1015,
  ];
  return errorCodes.join(",");
}

export const isWebSocketError = (errorCode: string): boolean => {
  if (errorCode && errorCode.length === 4) {
    return possibleWebSocketErrorCodes().includes(errorCode);
  }
  return false;
};

export const extractWebSocketErrorCodeFromWDSDebugMsg = (
  message: any
): string | null => {
  const isNotBlankString =
    typeof message === "string" && message.trim().length > 0;
  if (isNotBlankString) {
    const firstLine = message.split("\n")[0];
    const startingIndexOfLastWord = firstLine.trim().lastIndexOf(" ") + 1;
    return firstLine.substring(startingIndexOfLastWord).trim();
  }
  return null;
};
