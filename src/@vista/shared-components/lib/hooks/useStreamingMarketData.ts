import { useCallback, useEffect, useRef, useState } from "react";

import {
  extractWebSocketErrorCodeFromWDSDebugMsg,
  isWebSocketError,
} from "../utils/WebsocketUtil";

import { ConnectionStatus, ENV, FidsType } from "../@types/streamingTypes";
import {
  DISABLE_MERGE_UPDATE,
  MARKET_DATA_EMPTY_VALUE,
  SERVICE_NAME,
  WDS_AUTH,
  WDS_CONNECTION_STATUS_ACTIVE,
  WDS_PRE_PROD_URL,
  WDS_PROD_URL,
} from "../constants/streamingConfig";

export type MarketDataFieldMapType = Map<string, string>;
export type MarketDataMapType = Map<string, MarketDataFieldMapType>;

const useStreamingMarketData = (
  selectedCoins: string[],
  selectedFields: string[],
  enableStreaming: boolean
): { marketDataMap: MarketDataMapType; connectionStatus: ConnectionStatus } => {
  const isProdEnvironment =
    String(process.env.REACT_APP_ENV).toLowerCase() === ENV.PROD ||
    String(process.env.REACT_APP_ENVIRONMENT).toLowerCase() === ENV.PROD;
  const wdsUrl = isProdEnvironment ? WDS_PROD_URL : WDS_PRE_PROD_URL;
  const auth = WDS_AUTH;

  if (!window.sls) {
    throw new Error("Missing WDS script");
  }

  const [connectionStatus, setConnectionStatus] = useState(
    ConnectionStatus.LOADING
  );

  const mountedRef = useRef(true);
  const [marketDataMap, setMarketDataMap] = useState(
    new Map<string, MarketDataFieldMapType>()
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateRecord = useCallback(
    (parsedMessage: any) => {
      const coin = parsedMessage?.k;

      if (selectedCoins.includes(coin)) {
        const fields = parsedMessage?.fids;
        const newMap = new Map(marketDataMap);
        let isMapUpdated = false;
        fields?.forEach((field: FidsType) => {
          const fieldsMapInCurrentCoin = newMap.get(coin);
          const fieldName = field.i;
          if (
            selectedFields.includes(fieldName) &&
            fieldsMapInCurrentCoin?.has(fieldName)
          ) {
            newMap.set(
              coin,
              fieldsMapInCurrentCoin?.set(
                fieldName,
                field.v === null || field.v === undefined
                  ? MARKET_DATA_EMPTY_VALUE
                  : field.v
              )
            );
            isMapUpdated = true;
          }
        });
        if (isMapUpdated) {
          setMarketDataMap(newMap);
        }
      }
    },
    [marketDataMap, selectedCoins, selectedFields]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateConnectionStatus = (status: any) => {
    if (!mountedRef.current) {
      return;
    }

    if (status === WDS_CONNECTION_STATUS_ACTIVE) {
      setConnectionStatus(ConnectionStatus.SUCCESS);
    } else {
      setConnectionStatus(ConnectionStatus.ERROR);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDebugMessage = (debugMessage: any) => {
    if (debugMessage.toString().includes("Connection broken.")) {
      setConnectionStatus(ConnectionStatus.ERROR);
    }

    const errorCode = extractWebSocketErrorCodeFromWDSDebugMsg(debugMessage);
    if (errorCode != null && isWebSocketError(String(errorCode))) {
      // eslint-disable-next-line no-console
      console.log("Unable to connect to websocket URL");
      setConnectionStatus(ConnectionStatus.ERROR);
    }
  };

  const startConnection = useCallback(() => {
    window.sls.create_http_connection(
      wdsUrl,
      {
        record_update: updateRecord,
        connection_status: updateConnectionStatus,
        debug_msg: handleDebugMessage,
      },
      auth,
      DISABLE_MERGE_UPDATE
    );

    selectedCoins.forEach((coin) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const recordRequest = new window.sls.RecordRequest(SERVICE_NAME, coin);
      recordRequest.setFields(selectedFields);
      window.sls.request_record(recordRequest);
    });
  }, [auth, selectedCoins, selectedFields, updateRecord, wdsUrl]);

  const initialiseMarketDataMap = useCallback(() => {
    setMarketDataMap((initialDataMap) => {
      selectedCoins.forEach((coin) => {
        const initialDataFieldMap = new Map<string, string>();
        selectedFields.forEach((field) =>
          initialDataFieldMap.set(field, MARKET_DATA_EMPTY_VALUE)
        );
        initialDataMap.set(coin, initialDataFieldMap);
      });
      return initialDataMap;
    });
  }, [selectedCoins, selectedFields]);

  useEffect(() => {
    if (
      window.sls &&
      enableStreaming &&
      connectionStatus !== ConnectionStatus.SUCCESS
    ) {
      initialiseMarketDataMap();
      startConnection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionStatus, enableStreaming]);

  useEffect(() => {
    return () => {
      window.sls?.destroy_http_connection();
      mountedRef.current = false;
    };
  }, []);

  return {
    marketDataMap,
    connectionStatus,
  };
};

export default useStreamingMarketData;
