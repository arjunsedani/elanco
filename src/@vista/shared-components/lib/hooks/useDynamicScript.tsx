import { useEffect, useState } from "react";

const urlCache = new Set<string>();

export const useDynamicScript = (url?: string, refresh?: unknown) => {
  const [ready, setReady] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setLoading(false);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setLoading(true);
    setErrorLoading(false);

    const element = document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setLoading(false);
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setLoading(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      console.info("url delete ---", url);
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url, refresh]);

  return { ready, errorLoading, loading };
};
