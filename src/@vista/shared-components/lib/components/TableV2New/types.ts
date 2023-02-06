import { ReactElement } from "react";

// export type MockTableRowV2 = {
//   exchangeCountry: string;
//   stockName: string;
//   stockCode: string;
//   baseAssetCode: string;
//   baseAssetName: string;
//   side: string;
//   status: string;
//   filledPriceCurrency: string;
//   filledPrice: string | null;
//   filledQty: number;
//   orderQty: number;
//   placedDateTime: string;
//   expirationDateTime: string;
//   orderId: string;
//   orderType: string;
//   orderPriceCurrency: string;
//   orderPrice: string;
//   updatedDateTime: string | null;
//   orderMedium: string;
//   canAmendOrCancel: boolean;
//   unrealisePL: string;
//   unrealisePLPercentage: string;
//   holdingCcy: string;
//   netQuantity: string;
//   marketValue: string;
//   holdingPercentage: string;
//   marketPrice: string;
//   costPrice: string;
//   tradableQuantity: string;
// };

export type MockTableRowV2  = {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    'app-name': string;
    environment: string;
    'business-unit': string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
};


export type TableColumnV2<T> = {
  id: string;
  dataTestId?: string;
  label: string | ReactElement[];
  cellTemplate: (row: T, rowNumber?: number) => ReactElement;
  columnMinWidth?: string;
  columnWidth?: string;
  alignRight?: boolean;
};

export enum Side {
  Buy = "B",
  Sell = "S",
}
