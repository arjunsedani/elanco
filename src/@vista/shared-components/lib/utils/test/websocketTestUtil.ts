import { act } from "@testing-library/react";

// import WS from "jest-websocket-mock";

const createMockStreamingData = (coin: string, jsonString: string) => {
  const parsedJson = JSON.parse(jsonString);
  const mockData = [];
  for (const [key, value] of Object.entries(parsedJson)) {
    mockData.push(`{"f":0,"i":"${key}","v":"${value}"}`);
  }

  return `{"up":[{"s":"Reuters","k":"${coin}","f":0,"fids":[${mockData}]},null]}`;
};

// export const establishWDSConnection = async (server: WS) => {
//   await server.connected.then((client) => {
//     client.send(
//       '{"ac": {"s": "1650296600", "i": "2530", "h": "mockURL.com", "p": "10", "l": "0"}}'
//     );
//   });
// };

// const waitForConnectionOpen = async (server: WS) => {
//   let readyState = 0;
//   while (readyState !== 1) {
//     const client = server.server.clients()[0];
//     await new Promise((r) => setTimeout(r, 20));
//     readyState = client ? client.readyState : 0;
//   }
// };

// export const mockWebSocketResponse = async (server: WS, response: string) => {
//   await act(async () => {
//     await waitForConnectionOpen(server);
//     server.send(response);
//   });
// };

// export const cleanupWebSocketConnection = (server: WS) => {
//   server.close();
//   sls.destroy_http_connection();
//   WS.clean();
// };

// export const sendCloseEvent = (server: WS) => {
//   // to mimic server CloseEvent (1006), though this does not really close the server

//   act(() => {
//     // to close the client, we cannot simply dispatch a close event from the server,
//     // we need to dispatch a close event directly to the client for it to take effect
//     const client = server.server.clients()[0];
//     client.dispatchEvent(
//       new CloseEvent("close", {
//         wasClean: false,
//         code: 1006,
//         reason: "blah blah",
//       })
//     );
//   });
// };

export default createMockStreamingData;
