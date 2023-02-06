import { useEffect, useState } from "react";

type Orientation = "Landscape" | "Portrait";
export type Layout = Orientation | "LockLandscape";

const getSize = () =>
  [
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ] as const;

const getOrientation = (w: number, h: number) =>
  w >= h ? "Landscape" : "Portrait";

/**
 * When orienation is changed, all function in this array will be call
 */
const oriRegisty: Array<(ori: Orientation, layout: Layout) => void> = [];
/**
 * When lock is changed, all function in this array will be call
 */
const lockRegisty: Array<(isLock: boolean, layout: Layout) => void> = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeRegisty = (registy: any[], index: number) => {
  registy[index] = registy[registy.length - 1];
  registy.pop();
};

const broadcast = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: Array<(arg: any, layout: Layout) => void>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arg: any,
  layout: Layout
) => {
  for (let i = 0; i < trigger.length; i++) {
    trigger[i](arg, layout);
  }
};

class OrientationState {
  /** Save previous data */
  cache: { ori: Orientation; layout: Layout; isLock: boolean };
  constructor(ori: Orientation) {
    this.cache = {
      ori,
      layout: ori,
      isLock: false,
    };
  }
  getData() {
    return this.cache;
  }
  setLock(isLock: boolean) {
    this.cache.isLock = isLock;
    this.cache.layout = getLayout(isLock, this.cache.ori);
    broadcast(lockRegisty, this.cache.isLock, this.cache.layout);
  }
  setOri(ori: Orientation) {
    this.cache.ori = ori;
    const layout = getLayout(oriState.getData().isLock, ori);
    this.cache.layout = layout;
    broadcast(oriRegisty, ori, layout);
  }
  clear() {
    this.cache = {
      isLock: false,
      layout: "Portrait",
      ori: "Portrait",
    };
    oriRegisty.length = 0;
    lockRegisty.length = 0;
  }
}

const oriState = new OrientationState("Portrait");

const getLayout = (isLock: boolean, ori: Orientation): Layout => {
  const isLandscape = ori === "Landscape";
  let layout: Layout = ori;
  if (isLock && !isLandscape) {
    layout = "LockLandscape";
  }
  return layout;
};

const boundResize = () => {
  const win = typeof window === "undefined" ? null : window;
  win?.addEventListener("resize", () => {
    const orientation = getOrientation(...getSize());
    oriState.setOri(orientation);
  });
};

boundResize();

/**
 * Can call this hook multi times, and they will sync update
 * # Flow
 * 1. Initailze OrientationState with orientation: "Portrait"
 * 2. bound a window resize event that every time trigger the event
 * then will call all the function in `oriRegisty`
 * 3. the `setState` function will be push into `oriRegisty` once  we call `useOrientation`
 * so that we can update the view model when update window's size
 */
export const useOrientation = () => {
  const {
    ori: defaultOri,
    isLock: defaultIsLock,
    layout: defaultLayout,
  } = oriState.getData();
  const [ori, setOrientation] = useState<Orientation>(defaultOri);
  const [lock, setLock] = useState(defaultIsLock);
  const [layout, setLayout] = useState(defaultLayout);

  const setOri = (ori: Orientation, layout: Layout) => {
    setOrientation(ori);
    setLayout(layout);
  };

  useEffect(() => {
    oriRegisty.push(setOri);
    lockRegisty.push((isLock: boolean, layout: Layout) => {
      setLock(isLock);
      setLayout(layout);
    });
    return () => {
      const index = oriRegisty.indexOf(setOri);
      removeRegisty(oriRegisty, index);
      removeRegisty(lockRegisty, index);
    };
  }, []);

  /**
   * Rotate to landscape then lock direction
   */
  const lockLandscape = () => {
    oriState.setLock(true);
  };

  /**
   * Rotate to Portrait then lock direction
   */
  const unlockLandscape = () => {
    oriState.setLock(false);
  };

  /**
   * unsafe: only can use it in test
   */
  const clear = () => {
    oriState.clear();
  };

  return {
    orientation: ori,
    isLock: lock,
    layout,
    lockLandscape,
    unlockLandscape,
    clear,
  };
};
