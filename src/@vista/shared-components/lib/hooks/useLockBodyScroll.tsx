import { useLayoutEffect } from "react";

export enum CssProperties {
  OVERFLOW = "overflow",
}

export const getBodyCssProperty = (property: string) =>
  window.getComputedStyle(document.body).getPropertyValue(property);

/**
 * @deprecated This hook does not cater for iOs webview, please use useLockBodyScrollV2
 */
const useLockBodyScroll = (isLocked = true) => {
  useLayoutEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
