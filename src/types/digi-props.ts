import {
  AssetType,
  ChannelId,
  ChannelSite,
  corpWealthAccIndFlag,
  EquityMfePath,
  isAICustomerFlag,
  isCorporateFlag,
  Locale,
  RegionId,
  ServiceFlag,
  TradeActionFlags,
} from "types/enums";

type CountryList = "HK" | "US" | "CA" | "SG" | "AU" | "JP" | "UK";


export type DigiProps = {
  accountDetails?: Record<string, any>;
  accountId?: string;
  accountType?: string;
  assetsCode: string;
  authGWCode: string;
  buySellFlag?: TradeActionFlags;
  buySell?: TradeActionFlags;
  channel: ChannelSite;
  channelTransitId?: string;
  clientSegment: string;
  containerId?: string;
  corpWealthAccInd?: corpWealthAccIndFlag;
  deviceInfo?: DeviceInfo;
  dpsEnabledInd?: string;
  encryptedPortfolios: Record<string, any>;
  entryPoint?: string;
  exchangeCountry: CountryList;
  holdingId?: string;
  isAssocPersonInd?: string;
  jSessionId?: string;
  landingPage: string;
  locale?: Locale;
  logoutDigi?: () => void;
  portfolioNo: string;
  region: RegionId;
  rid?: string;
  serviceFlag: ServiceFlag;
  sid?: string;
  ssoSessionId?: string;
  sysGenUid: string;
  sysGenUID: string;
};

export type DigiPropsNew = SGHKDigiProps | TWDigiProps;

export type CommonDigiProps = {
  accountType?: string;
  assetsCode: string;
  channel: ChannelSite;
  clientSegment?: string;
  containerId?: string;
  corpWealthAccInd?: corpWealthAccIndFlag;
  deviceInfo?: DeviceInfo;
  entryPoint?: string;
  exchangeCountry: CountryList;
  holdingId?: string;
  landingPage: string;
  locale?: Locale;
  serviceFlag: ServiceFlag;
};

export type SGHKDigiProps = CommonDigiProps & {
  authGWCode: string;
  buySellFlag?: TradeActionFlags;
  dpsEnabledInd?: string;
  encryptedPortfolios: Record<string, any>;
  isAssocPersonInd?: string;
  jSessionId?: string;
  portfolioNo: string;
  region: RegionId.SG | RegionId.HK;
  rid?: string;
  sid?: string;
  ssoSessionId?: string;
  sysGenUid: string;
};

export type TWDigiProps = CommonDigiProps & {
  accountDetails?: Record<string, any>;
  accountId?: string;
  buySell?: TradeActionFlags;
  channelTransitId: string;
  logoutDigi?: () => void;
  region: RegionId.TW;
  sysGenUID: string;
};


export interface CommonHeaderProps {
  userId?: string;
  sessionId: string;
  sysGenUid: string;
  appVersion: string;
  osVersion: string;
  osType: string;
  channelId: ChannelId;
  clientIpAddress: string;
  longitude: string;
  latitude: string;
  locale: Locale;
  language: Locale;
  authorization: string;
  regionId: RegionId;
  clientId: string;
}

export interface ApiCommonHeaderProps {
  "user-id"?: string;
  sessionId: string;
  "cust-sysgen-id": string;
  mobile_app_version?: string;
  mobile_os_version?: string;
  mobile_os_type?: string;
  channelId: ChannelId;
  longitude: string;
  latitude: string;
  language: string;
  Authorization: string;
  regionId: RegionId;
  clientId?: string;
  "Content-Type": string;
  Accept: string;
  assetType: AssetType;
}

export type ApiCommonHeaderPropsNew =
  | ApiCommonHeaderPropsSGHK
  | ApiCommonHeaderPropsTW;

interface CommonAPIHeaderProps {
  Accept: string;
  Authorization: string;
  assetType: AssetType;
  channelId: ChannelId;
  clientId?: string;
  "Content-Type": string;
  "cust-sysgen-id": string;
  language: string;
  latitude: string;
  longitude: string;
  mobile_app_version?: string;
  mobile_os_type?: string;
  mobile_os_version?: string;
  "user-id"?: string;
}

interface ApiCommonHeaderPropsSGHK extends CommonAPIHeaderProps {
  regionId: RegionId.SG | RegionId.HK;
  sessionId: string;
}

interface ApiCommonHeaderPropsTW extends CommonAPIHeaderProps {
  regionId: RegionId.TW;
}

export type EncryptedPortfolios = {
  actualPortfolioId?: string;
  isCorporate?: isCorporateFlag;
  accountSysgenId?: string;
  accountSysgenIdEapi?: string;
  nickName?: string;
  isAICustomer?: isAICustomerFlag;
};

export interface DeviceInfo {
  appVersion: string;
  osVersion: string;
  clientId: string;
  locale: Locale;
  osType: string;
  appID?: string;
  deviceCategory?: string;
  deviceId?: string;
  deviceMake?: string;
  deviceModel?: string;
  deviceOs?: string;
  deviceOsVersion?: string;
  platform?: string;
}
export interface FeatureProps {
  featureId: string;
  url: string;
  enabled: boolean;
  strategy: null;
}

/**
 *  This is for props received from digi app to base app
 */

export type BaseAppProps = DigiProps & {
  apiCommonHeader?: ApiCommonHeaderProps;
  apiDomainUrl: string;
  apiServer: string;
  assetType?: AssetType;
  authorization?: string;
  basePath?: string;
  channelId: ChannelId;
  clientIpAddress: string;
  language?: Locale;
  latitude: string;
  longitude: string;
  modifiedServiceFlag?: string;
  regionId: RegionId;
  sessionId: string;
  routeToGo?: string;
  fromLandingPage?: boolean;
};

export type BaseAppPropsNew = DigiPropsNew & {
  apiCommonHeader?: ApiCommonHeaderPropsNew;
  apiDomainUrl: string;
  apiServer: string;
  assetType: AssetType;
  authorization?: string;
  basePath?: string;
  channelId?: ChannelId;
  clientIpAddress?: string;
  language?: Locale;
  latitude?: string;
  longitude?: string;
  modifiedServiceFlag?: string;
  regionId: RegionId.SG | RegionId.HK | RegionId.TW;
  sessionId?: string;
  routeToGo?: string;
  fromLandingPage?: boolean;
};

/**
 *  This is for props received from base app to Container app
 */

export type BaseAppActions = {
  sessionExpired?: ({
    statusCode,
    message,
  }: {
    statusCode: string;
    message: string;
  }) => void;
  sessionExpiredMethod?: ({
    errorResponse,
  }: {
    errorResponse: Record<any, any>;
  }) => void;
  hideHeader?: (
    hideTabs: boolean | undefined,
    hideHeader: boolean | undefined
  ) => void;
  baseAppHandleLoading?: (val: boolean) => void;
  logoutSurveyHandle?: (val: string | undefined) => void;
  refreshPortfolios?: (val?: boolean) => void;
  unMountVanda?: (val: boolean) => void;
  refreshVanda?: () => void;
  firstEntryFromDigi?: () => void;
  navigateToDigi?: ({
    action,
    payload,
  }: {
    action: string;
    payload?: Record<string, any>;
  }) => void;
  navigateOutOfMemoryRouter?: (
    reload?: boolean,
    location?: string,
    state?: Record<string, any>
  ) => void;
  navigateIntoMemoryRouter?: (state?: Record<string, any>) => void;
  navigateIntoMemoryRouterMfe?: (
    page: EquityMfePath,
    state?: Record<string, any>
  ) => void;
  notifyHealth?: (up: boolean) => void;
  updateLastVisitedAssets?: ({
    assetsCode,
    exchangeCountry,
  }: {
    assetsCode?: string;
    exchangeCountry?: string;
  }) => void;
};

export type Account = {
  id: string;
  displayNumber: string;
  isCryptoEnabled?: boolean;
  isOETEnabled?: boolean;
  reportingCurrency?: string;
  type?: string;
  accountSysgenIdEapi?: string;
  accountSysgenId?: string;
  isCorporate?: boolean | isCorporateFlag;
  isAICustomer?: boolean | isAICustomerFlag;
  vickersAccountNumber?: string;
};

export type Portfolios = {
  portfolioNo: string;
  accounts: Array<Account> | null;
  fetching: boolean;
  error: number;
  selectedPortfolio: Account;
  hasCryptoTradingAccount: boolean | null;
  hasOETAccount: boolean | null;
  requireUpdate?: boolean;
  unMountVanda?: boolean;
};

export type SysMaintenanceData = {
  isMaintOn: boolean;
  title: string;
  content: string;
};

export type ContainerProps = BaseAppProps & {
  baseAppActions: BaseAppActions;
  features: FeatureProps[];
  portfolioAccounts: Portfolios;
  sysMaintenanceData?: SysMaintenanceData;
  unMountChildMfe?: boolean;
  unMountVanda?: boolean;
};

export type ContainerPropsNew = BaseAppPropsNew & {
  baseAppActions: BaseAppActions;
  features: FeatureProps[];
  portfolioAccounts: Portfolios;
  sysMaintenanceData?: SysMaintenanceData;
  unMountChildMfe?: boolean;
  unMountVanda?: boolean;
};

/**
 *  This is for props received from Container app to child mfe
 *  each child can extend this type
 */

export type MfeProps = ContainerProps & {
  basePath?: string;
  selectedPortfolio?: Account;
  routeToGo?: string;
};

export type MfePropsNew = ContainerPropsNew & {
  basePath?: string;
  selectedPortfolio?: Account;
  routeToGo?: string;
};
