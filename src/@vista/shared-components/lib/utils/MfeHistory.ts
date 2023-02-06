import { HistoryAction } from "../models/enums";

import {
  createBrowserHistory,
  createMemoryHistory,
  History as ReactHistory,
} from "history";

declare global {
  interface Window {
    mfeHistory?: MfeHistory;
  }
}

interface HistoryConfig {
  testMode?: boolean;
  listener?: () => void;
}

interface HistoryListener {
  action: HistoryAction;
  originHistory: History;
  actionHistory: History;
}

interface History extends ReactHistory {
  index?: number;
}

const win = typeof window && window;

class MfeHistory {
  /**
   * Haven't been used, but maybe we use it if we have some complex features
   */
  historyStack: History[];
  /**
   *  If the counter equal to 0, that's mean we arrive the origin page
   *  - `PUSH` action: counter + 1
   *  - `POP` action: counter - 1
   */
  counter: number;

  basename?: string;

  listener: Array<(arg: HistoryListener) => void>;

  private constructor() {
    this.historyStack = [];
    this.counter = 0;
    this.listener = [];
  }
  public static getInstance(): MfeHistory {
    if (!win) {
      throw new Error(
        "Error: Miss object: `window`, MfeHistory only can use in window env"
      );
    }
    if (!win.mfeHistory) {
      const customHistory = new MfeHistory();
      win.mfeHistory = customHistory;
    }
    return win.mfeHistory;
  }

  createHistory = (basename: string, testMode: boolean): History => {
    const history = !testMode
      ? createBrowserHistory({ basename })
      : createMemoryHistory();
    this.basename = basename;
    const customHistory = { ...history, index: 0 };
    // We can only listen one `History` to reduce the counter
    if (this.historyStack.length < 1) {
      customHistory.listen((_, action) => {
        if (action === "POP") {
          this.counter -= 1;
        }
      });
    }
    // Should listen every `History`'s PUSH action
    customHistory.listen((_, action) => {
      if (action === "PUSH") {
        this.counter += 1;
      }
    });
    this.historyStack.push(customHistory);
    return customHistory;
  };

  originHistory = () => {
    return this.historyStack[0];
  };

  replaceOrigin = (h: History) => {
    this.historyStack[0] = h;
    this.listener?.forEach((cb) =>
      cb({
        action: HistoryAction.REPLACEORIGIN,
        originHistory: h,
        actionHistory: h,
      })
    );
  };

  isFullUrl = (url: string) => {
    const regex = /\/(crypto|equity)\//g;
    return regex.test(url);
  };

  /**
   * merge basename and param's url then return a fixed basename
   * @param url
   * @returns a fixed basename if the param's url can be merged with basename. Otherwise, return `undefined`
   */
  fixedBasename = (url: string) => {
    const regex = /\/(crypto|equity)\//g;
    const originBasename = this.originHistory().createHref({ pathname: "/" });
    const urlServerFlag = url.match(regex);
    const originServerFlag = originBasename.match(regex);
    if (originServerFlag && urlServerFlag) {
      if (originServerFlag[0] !== urlServerFlag[0]) {
        const newBasename = originBasename.replace(regex, urlServerFlag[0]);
        return newBasename;
      }
    }
  };

  listen = (fn: (arg: HistoryListener) => void) => {
    this.listener.push(fn);
  };
}

export const createHistory = (
  basename: string,
  { testMode = false, ...restConfig }: HistoryConfig
): History => {
  const mfe = MfeHistory.getInstance();
  if (restConfig.listener) {
    mfe.listener?.push(restConfig.listener);
  }
  return mfe.createHistory(basename, testMode);
};

export const getInstance = () => {
  return MfeHistory.getInstance();
};

/**
 * Redirect between Mfes
 * @param path the path register in vanda-container-mfe
 * @param state can pass data to target mfe
 */
// @typescript-eslint/no-explicit-any
export const loadMfe = (path: string, state?: any) => {
  path = !path.startsWith("/") ? "/".concat(path) : path;
  const mfe = MfeHistory.getInstance();
  if (mfe.isFullUrl(path)) {
    const fixedBasename = mfe.fixedBasename(path);
    if (fixedBasename) {
      const newHistory = createBrowserHistory({ basename: fixedBasename });
      mfe.replaceOrigin(newHistory);
    }
    const pathSplit = path.split("/");
    const serviceFlagIndex = pathSplit.findIndex(
      (v) => v === "crypto" || v === "equity"
    );
    path = pathSplit.splice(serviceFlagIndex + 1).join("/");
  }
  const origin = mfe.originHistory();
  origin.push(path, state);
};
