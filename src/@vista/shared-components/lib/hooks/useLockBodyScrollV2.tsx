import { RefObject, useEffect } from "react";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useLockBodyScrollV2 = (
  scrollableComponentRef: RefObject<HTMLElement | null>,
  isLocked = true
) => {
  useEffect(() => {
    const htmlElement = scrollableComponentRef.current;

    if (isLocked) {
      htmlElement && disableBodyScroll(htmlElement);
    }

    return () => {
      htmlElement && enableBodyScroll(htmlElement);
    };
  }, [isLocked]);
};

export default useLockBodyScrollV2;
