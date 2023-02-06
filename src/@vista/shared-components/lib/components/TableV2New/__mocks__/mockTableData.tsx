import { TemplateID } from "../../../models/enums";
import { theme } from "../../../utils/styleTheme";

import ResourceGroupCell from "../cellTemplates/ResourceGroupCell";
import SideAndStatusCell from "../cellTemplates/SideAndStatusCell";
import UnrealisedPLCellTemplate from "../cellTemplates/UnrealisedPLCell";
import TradableQuantityCellTemplate from "../cellTemplates/TradableQuantityCell";
import DateTimeCell from "../cellTemplates/DateTimeCell"
import { MockTableRowV2, Side, TableColumnV2 } from "../types";

export const getMockTableColumns = (): TableColumnV2<MockTableRowV2>[] => [
  {
    id: TemplateID.COIN,
    dataTestId: "ORDERMGT_TABLE_COIN_HEADING",
    label: "Coin",
    columnMinWidth: "82px",
    cellTemplate: (row) => (
      <ResourceGroupCell
        ResourceGroup={row.ResourceGroup}
        ResourceLocation={row.ResourceLocation}
        onClick={(e) => {
          e.stopPropagation();
          console.log("clicked on coin cell");
        }}
      />
    ),
  },
  {
    id: TemplateID.STATUS,
    dataTestId: "MY_TRADES_TABLE_HEADING_TWO",
    label: "Tags",
    columnMinWidth: "45px",
    cellTemplate: (row) => (
      <SideAndStatusCell
        sideFontColor={"green"}
        sideLabel={"row.side"}
        tag1Label={`APP NAME-${row.Tags['app-name'].toLocaleUpperCase()}`}
        tag2Label={row.Tags.environment.toLocaleUpperCase()}
        tag3Label={row.Tags['business-unit'].toLocaleUpperCase()}
        tag1BgColor={theme.color_gold100}
        tag2BgColor={theme.color_green02}
        tag3BgColor={theme.color_ruby100}
      />
    ),
  },
  {
    id: TemplateID.UNREALISED_PL,
    dataTestId: "HOLDINGS_UNREALISED_PL_HEADING",
    label: "Cost/Consumption",
    columnMinWidth: "45px",
    alignRight: true,
    cellTemplate: (row) => (
      <UnrealisedPLCellTemplate
        unrealisePLPercentage={row.ConsumedQuantity}
        unrealisePL={row.Cost}
        plCurrencyText={"USD"}
        failedServices={[]}
        toggleColor={true}
      />
    ),
  },
  {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "UnitOfMeasure",
    label: "Unit Of Measure",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.UnitOfMeasure}
      />
    ),
  },
  {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "MeterCategory",
    label: "Meter Category",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.MeterCategory}
      />
    ),
  },
  
    {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "HOLDINGS_TRADABLE_QTY_HEADING",
    label: "ServiceName",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.ServiceName}
      />
    ),
  },
  {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "Location",
    label: "Location",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.Location}
      />
    ),
  },
  
  {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "ResourceGroup",
    label: "ResourceGroup",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.ResourceGroup}
      />
    ),
  },
  {
    id: TemplateID.TRADABLE_QUANTITY,
    dataTestId: "ConsumedQuantity",
    label: "Quantity",
    alignRight: true,
    columnWidth: "45px",
    cellTemplate: (row) => (
      <TradableQuantityCellTemplate
        cellWidth={"auto"}
        tradableData={row.ConsumedQuantity}
      />
    ),
  },
   {
    id: TemplateID.PLACED_DATE,
    dataTestId: "MY_TRADES_TABLE_HEADING_FIVE",
    label: "Placed Date/ Time",
    columnMinWidth: "105px",
    alignRight: true,
    cellTemplate: (row) => (
      <DateTimeCell
        dataTestId={"lbl-placed-date"}
        dateTime={row.Date}
      />
    ),
  },
];

export const mockOrderStatusTableRowsV2: MockTableRowV2[] = [
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "29/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "30/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "13/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "14/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "15/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "16/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "05/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "09/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "06/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "07/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "08/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "10/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "01/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "02/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "25/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "11/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "26/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "27/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "17/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "18/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "03/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "04/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "12/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "21/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "22/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "28/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "19/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "20/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "23/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "24/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  }
];

export const mockTableRowV2 = mockOrderStatusTableRowsV2[0];

export const mockTableRowsV2: MockTableRowV2[] = [
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "29/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "30/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "13/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "14/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "15/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "16/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "05/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "09/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "06/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "07/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "08/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "10/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "01/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "02/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "25/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "11/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "26/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "27/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "17/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "18/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "03/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "04/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "12/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "21/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "22/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "28/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "19/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Production",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "20/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Test",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "23/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  },
  {
    "ConsumedQuantity": "24",
    "Cost": "0.464635415",
    "Date": "24/11/2020",
    "InstanceId": "RC-4969d765-08eb-4c5a-8bae-02d866498f4a",
    "MeterCategory": "Redis Cache",
    "ResourceGroup": "Computers-Fresh",
    "ResourceLocation": "EastUS",
    "Tags": {
      "app-name": "Computers-Fresh",
      "environment": "Development",
      "business-unit": "Commerical"
    },
    "UnitOfMeasure": "100 Hours",
    "Location": "US East",
    "ServiceName": "Redis Cache"
  }
];
