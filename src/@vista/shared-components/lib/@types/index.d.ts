/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  declare class RecordRequest {
    constructor(serviceName: string, recordName: string);
    setFields(fields: string[]): number;
  }

  // eslint-disable-next-line no-var
  var sls: {
    create_http_connection: (
      url: string,
      callbacks: {
        record_update: (data: any) => void;
        connection_status: (status: number) => void;
        debug_msg: (message: any) => void;
      },
      auth: string,
      connectionFlag: number
    ) => number;
    RecordRequest: new (
      serviceName: string,
      recordName: string
    ) => RecordRequest;
    request_record: (request: RecordRequest) => number;
    destroy_http_connection: () => void;
  };
}

export {};
