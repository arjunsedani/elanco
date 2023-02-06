const ua = window.navigator?.userAgent?.toLowerCase();

export const isIEBrowser: boolean =
  ua.indexOf("trident/") !== -1 || ua.indexOf("msie ") !== -1;

const isIPadPro = ua.indexOf("macintosh") !== -1 && "ontouchend" in document;

const isIpadOS = () => ua === "ipad" || isIPadPro;

export const isIOS = () =>
  /(iphone|ipod)/.test(navigator?.userAgent?.toLowerCase());

export const isAndroid = () =>
  /mobi|android|blackBerry|webos|windows phone|opera mini|iemobile/i.test(
    navigator?.userAgent?.toLowerCase()
  );

export const isMobile = () => {
  return (
    /mobi|iphone|ipad|ipod|android|blackBerry|webos|windows phone|opera mini|iemobile/i.test(
      navigator?.userAgent?.toLowerCase()
    ) || isIpadOS()
  );
};

export const isInWebView = () => {
  const userAgent = navigator.userAgent;
  // is iOS
  if (/(iPhone|iPod)/.test(userAgent) || isIpadOS()) {
    // is WebView
    if (userAgent.indexOf(" Safari") === -1) {
      return true;
    }
  }

  // is Android WebView
  if (userAgent.indexOf("; wv") >= 0) {
    return true;
  }

  return false;
};

export const isUserAgentAndroid = () =>
  navigator?.userAgent?.toLowerCase().match(/android/) !== null;

export const isIphone = () => !!navigator.userAgent.match(/iPhone/i);

export const isiPhoneWithNotch = () => {
  if (isIphone()) {
    const iHeight = window.screen.height;
    const iWidth = window.screen.width;

    /** Iphone 12, 12 Pro Max, X-Xs, Xmax-Xr -- have notch */
    if (
      (iWidth === 390 && iHeight === 844) ||
      (iWidth === 428 && iHeight === 926) ||
      (iWidth === 414 && iHeight === 896) ||
      (iWidth === 375 && iHeight === 812)
    ) {
      return true;
    }
  }
  return false;
};
