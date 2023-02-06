// import { waitFor } from "@testing-library/react";
// import { act, renderHook } from "@testing-library/react-hooks";

// // import createMockStreamingData, {
// //   cleanupWebSocketConnection,
// //   establishWDSConnection,
// //   mockWebSocketResponse,
// //   sendCloseEvent,
// // } from "../../utils/test/websocketTestUtil";

// import useStreamingMarketData from "../../hooks/useStreamingMarketData";

// import { ConnectionStatus } from "../../@types/streamingTypes";
// import {
//   SERVICE_NAME,
//   WDS_AUTH,
//   WDS_CONNECTION_STATUS_ACTIVE,
//   WDS_PRE_PROD_URL,
//   WDS_PROD_URL,
// } from "../../constants/streamingConfig";
// import WS from "jest-websocket-mock";

// const serverUrl = "wss://mockURL.com";

// let server: WS;
// const originalSls = sls;

// const mockSelectedCoins = ["BCHUSD", "BTCUSD"];
// const mockSelectedFields = ["P22", "P25"];

// const originalEnv = process.env;

// describe("useStreamingMarketData", function () {
//   beforeEach(() => {
//     jest.resetModules();
//   });

//   afterEach(() => {
//     process.env = originalEnv;
//   });

//   it("should throw error when wds script is not found", function () {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     global.sls = undefined;

//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     expect(result.error?.message).toEqual("Missing WDS script");

//     global.sls = originalSls;
//   });

//   it("should throw error when WDS script throws error on create_http_connection", function () {
//     global.sls = {
//       create_http_connection: jest.fn().mockImplementation(() => {
//         throw new Error("some create_http_connection error");
//       }),
//       RecordRequest: jest.fn(),
//       request_record: jest.fn(),
//       destroy_http_connection: jest.fn(),
//     };

//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     expect(result.error?.message).toEqual("some create_http_connection error");

//     global.sls = originalSls;
//   });

//   it("should throw error when WDS script throws error on RecordRequest", function () {
//     global.sls = {
//       create_http_connection: jest.fn(),
//       RecordRequest: jest.fn().mockImplementation(() => {
//         throw new Error("some RecordRequest error");
//       }),
//       request_record: jest.fn(),
//       destroy_http_connection: jest.fn(),
//     };

//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     expect(result.error?.message).toEqual("some RecordRequest error");
//     global.sls = originalSls;
//   });

//   it("should throw error when WDS script throws error on request_record", function () {
//     global.sls = {
//       create_http_connection: jest.fn(),
//       RecordRequest: jest.fn(),
//       request_record: jest.fn().mockImplementation(() => {
//         throw new Error("some request_record error");
//       }),
//       destroy_http_connection: jest.fn(),
//     };

//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     expect(result.error?.message).toEqual(
//       "recordRequest.setFields is not a function"
//     );
//     global.sls = originalSls;
//   });

//   it("should not call create_http_connection when enableStreaming is false", function () {
//     global.sls = {
//       create_http_connection: jest.fn(),
//       RecordRequest: jest.fn(),
//       request_record: jest.fn(),
//       destroy_http_connection: jest.fn(),
//     };

//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, false)
//     );

//     expect(global.sls.create_http_connection).toHaveBeenCalledTimes(0);
//     expect(result.current.connectionStatus).toEqual(ConnectionStatus.LOADING);
//     global.sls = originalSls;
//   });

//   it.each`
//     env           | expectedWDSPath
//     ${"non-prod"} | ${WDS_PRE_PROD_URL}
//     ${"prod"}     | ${WDS_PROD_URL}
//   `(
//     "should call $expectedWDSPath when env is $env",
//     ({ env, expectedWDSPath }) => {
//       process.env = {
//         ...originalEnv,
//         REACT_APP_ENV: env,
//         REACT_APP_ENVIRONMENT: env,
//       };
//       global.sls = {
//         create_http_connection: jest.fn(),
//         RecordRequest: jest.fn(),
//         request_record: jest.fn(),
//         destroy_http_connection: jest.fn(),
//       };

//       renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       expect(global.sls.create_http_connection).toHaveBeenCalledTimes(1);
//       expect(global.sls.create_http_connection).toHaveBeenCalledWith(
//         expectedWDSPath,
//         {
//           record_update: expect.any(Function),
//           connection_status: expect.any(Function),
//           debug_msg: expect.any(Function),
//         },
//         WDS_AUTH,
//         WDS_CONNECTION_STATUS_ACTIVE
//       );

//       global.sls = originalSls;
//     }
//   );

//   it("should call request_record with correct coins and fields", async function () {
//     const mockSetField = jest.fn();
//     const mockRecordRequest = jest.fn().mockImplementation(() => {
//       return { setFields: mockSetField };
//     });
//     const mockRequestRecord = jest.fn();

//     global.sls = {
//       create_http_connection: jest.fn(),
//       RecordRequest: mockRecordRequest,
//       request_record: mockRequestRecord,
//       destroy_http_connection: jest.fn(),
//     };

//     renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     expect(mockSetField).toHaveBeenCalledWith(mockSelectedFields);
//     expect(mockRequestRecord).toHaveBeenCalledTimes(mockSelectedCoins.length);

//     mockSelectedCoins.forEach((coin, index) => {
//       expect(mockRecordRequest).toHaveBeenNthCalledWith(
//         index + 1,
//         SERVICE_NAME,
//         coin
//       );
//     });

//     global.sls = originalSls;
//   });

//   it("should set connection status to error when initial WDS connection fails", async function () {
//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     server = new WS(serverUrl);
//     await act(async () => {
//       await server.connected;
//       server.error();
//       await server.closed;
//     });

//     await waitFor(() => {
//       expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERROR);
//     });

//     cleanupWebSocketConnection(server);
//   });

//   it("should set connection status to error when websocket's connection status is not active", async function () {
//     const { result } = renderHook(() =>
//       useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//     );

//     server = new WS(serverUrl);
//     await establishWDSConnection(server);

//     await mockWebSocketResponse(server, '{"xc":{}}');

//     await waitFor(() => {
//       expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERROR);
//     });

//     cleanupWebSocketConnection(server);
//   });

//   describe("When websocket connection is successful", function () {
//     beforeEach(() => {
//       server = new WS(serverUrl);
//     });
//     afterEach(async () => {
//       // to clear the interval set to continuously ping the websocket
//       await mockWebSocketResponse(server, '{"xc":{}}');
//       cleanupWebSocketConnection(server);
//     });

//     it("should set all values as dash upon initial render (before message received from websocket)", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await waitFor(() => {
//         mockSelectedCoins.forEach((coin) => {
//           mockSelectedFields.forEach((field) => {
//             expect(result.current.marketDataMap.get(coin)?.get(field)).toEqual(
//               "-"
//             );
//           });
//         });
//         expect(result.current.connectionStatus).toEqual(
//           ConnectionStatus.SUCCESS
//         );
//       });
//     });

//     it("should update market data map when selected field's update received from websocket", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P22": "123.03"}')
//       );

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("BTCUSD")?.get("P22")).toEqual(
//           "123.03"
//         );
//         expect(result.current.connectionStatus).toEqual(
//           ConnectionStatus.SUCCESS
//         );
//       });
//     });

//     it("should update market data map with correct value if selected field's update received is number type", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P22": "3.03"}')
//       );

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("BTCUSD")?.get("P22")).toEqual(
//           "3.03"
//         );
//         expect(result.current.connectionStatus).toEqual(
//           ConnectionStatus.SUCCESS
//         );
//       });
//     });

//     it("should not update field in market data map when message received by server is for another field", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P22": "23.02"}')
//       );
//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BCHUSD", '{"P22": "23.04"}')
//       );
//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P25": "280.01"}')
//       );

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("BTCUSD")?.get("P22")).toEqual(
//           "23.02"
//         );
//         expect(result.current.marketDataMap.get("BCHUSD")?.get("P22")).toEqual(
//           "23.04"
//         );
//         expect(result.current.connectionStatus).toEqual(
//           ConnectionStatus.SUCCESS
//         );
//       });
//     });

//     it("should not update field in market data map when message received by server is not in correct format, has an invalid key or field", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("INVALID_KEY", '{"P22": "23.02"}')
//       );
//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BCHUSD", '{"PINVALID": "23.04"}')
//       );
//       await mockWebSocketResponse(server, '{"up":[{"pi":{}},null]}');
//       await mockWebSocketResponse(server, '{"down": []}');

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("INVALID_KEY")).toBeUndefined();
//         mockSelectedFields.forEach((field) => {
//           expect(
//             result.current.marketDataMap.get("BCHUSD")?.get(field)
//           ).toEqual("-");
//         });
//       });
//     });

//     it("should update field with dash when received value is null or undefined", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BCHUSD", '{"P22": "3.03"}')
//       );
//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P22": "3.04"}')
//       );

//       await mockWebSocketResponse(
//         server,
//         '{"up":[{"s":"Reuters","k":"BTCUSD","f":0,"fids":[{"f":0,"i":"P22"}]},null]}'
//       );
//       await mockWebSocketResponse(
//         server,
//         '{"up":[{"s":"Reuters","k":"BCHUSD","f":0,"fids":[{"f":0,"i":"P22","v": null}]},null]}'
//       );

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("BTCUSD")?.get("P22")).toEqual(
//           "-"
//         );
//         expect(result.current.marketDataMap.get("BCHUSD")?.get("P22")).toEqual(
//           "-"
//         );
//       });
//     });

//     it("should set connection status to error and showSnackbar to true when websocket closes on any error & display snackbar", async function () {
//       const { result } = renderHook(() =>
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true)
//       );

//       await establishWDSConnection(server);

//       await mockWebSocketResponse(
//         server,
//         createMockStreamingData("BTCUSD", '{"P22": 3.03}')
//       );

//       await waitFor(() => {
//         expect(result.current.marketDataMap.get("BTCUSD")?.get("P22")).toEqual(
//           "3.03"
//         );
//         expect(result.current.connectionStatus).toEqual(
//           ConnectionStatus.SUCCESS
//         );
//       });

//       // to mimic server CloseEvent (1006), though this does not really close the server
//       await sendCloseEvent(server);

//       await waitFor(() => {
//         expect(result.current.connectionStatus).toEqual(ConnectionStatus.ERROR);
//       });
//     });
//   });

//   describe("When unmounted", function () {
//     afterEach(() => {
//       global.sls = originalSls;
//     });

//     it("should call destroy_http_connection", function () {
//       global.sls = {
//         create_http_connection: jest.fn(),
//         RecordRequest: jest.fn().mockImplementation(() => {
//           return { setFields: jest.fn() };
//         }),
//         request_record: jest.fn(),
//         destroy_http_connection: jest.fn(),
//       };

//       const { unmount } = renderHook(() => {
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true);
//       });

//       unmount();

//       expect(global.sls.destroy_http_connection).toHaveBeenCalledTimes(1);
//     });

//     it("should close connection", async function () {
//       const { unmount } = renderHook(() => {
//         useStreamingMarketData(mockSelectedCoins, mockSelectedFields, true);
//       });

//       server = new WS(serverUrl);
//       await establishWDSConnection(server);

//       expect(server.server.clients().length).toEqual(1);
//       unmount();

//       await server.closed;
//       expect(server.server.clients().length).toEqual(0);
//       cleanupWebSocketConnection(server);
//     });
//   });
// });
