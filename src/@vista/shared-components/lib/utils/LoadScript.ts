export const loadScript = <T = void>(
  src: string,
  success?: () => T,
  error?: () => void,
  text?: string,
  charset?: string,
  hash?: string,
  crossOrigin?: string
) => {
  const script = document.querySelector(`script[src="${src}"]`);
  if (script) {
    success?.();
  } else {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = success || null;
    script.onerror = error || null;
    if (charset) {
      script.charset = charset;
    }
    if (src) {
      script.src = src;
    } else if (text) {
      script.text = text;
    }
    if (hash) {
      script.integrity = hash;
      script.crossOrigin = crossOrigin ?? "anonymous";
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  }
};
