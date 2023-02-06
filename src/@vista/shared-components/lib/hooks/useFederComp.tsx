// @ts-ignore
import React, { useEffect, useMemo, useState } from "react";

import { MfeName as Mfe } from "../models/enums";

import { useDynamicScript } from "./useDynamicScript";
export declare type Remotes = Record<string, string>;
declare global {
  interface Window {
    __remotes__?: Remotes;
  }
  // @ts-ignore
  const __webpack_init_sharing__: (scope: string) => Promise<void>;
  const __webpack_share_scopes__: Record<
    string,
    Record<
      string,
      {
        loaded?: 1;
        get: () => Promise<unknown>;
        from: string;
        eager: boolean;
      }
    >
  >;
}

const loadComponent = (scope: string, module: string) => {
  return async () => {
    await __webpack_init_sharing__("default");
    const container = (window as any)[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await (window as any)[scope].get(module);
    const Module = factory();
    return Module;
  };
};

/**
 *
 * @param remoteUrl
 * @param scope the `name` field in *modulefederation.config.js*
 * @param module the key of `exposes` object in *modulefederation.config.js*
 * @returns
 */
export const useFederatedComp = <P,>(
  remoteUrl?: string,
  scope?: Mfe,
  module?: string,
  refresh?: unknown
) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = useState<React.ComponentType<P> | null>(
    null
  );
  // start download dependencies
  const { ready, errorLoading, loading } = useDynamicScript(remoteUrl, refresh);
  // throw an error if get any error when downloading
  useEffect(() => {
    if (errorLoading) {
      setComponent(null);
      throw new Error("Failed to load remote module");
    }
  }, [errorLoading]);

  // return a empty lazy component when downloading dependencies so that it can trigger React.Suspence
  const InfComp = useMemo(() => {
    return React.lazy(() => {
      return new Promise<{ default: React.ComponentType<unknown> }>((res) => {
        setTimeout(() => res({ default: () => null }), 30000);
      });
    });
  }, [loading]);

  useEffect(() => {
    if (loading) {
      setComponent(InfComp);
    }
  }, [key, loading]);

  useEffect(() => {
    if (ready) {
      const Comp = React.lazy(loadComponent(scope!, module!));
      setComponent(Comp);
    }
  }, [key, ready]);

  return { errorLoading, Component };
};
