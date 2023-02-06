export enum FallbackType {
  NO_DATA = "no_data",
  ERROR = "error",
  WARNING = "warning",
}

export enum DataType {
  DATE = "date",
}

export enum Locale {
  EN = "en",
  ZH = "zh",
}

export enum RegionId {
  SG = "SG",
  HK = "HK",
  SV = "SV",
  TW = "TW",
  US = "US",
  UK = "UK",
  CA = "CA",
  AU = "AU",
  JP = "JP",
}

export enum Site {
  IB = "ib",
  MB = "mb",
}

export enum Channel {
  ONLINE = "Online",
  OFFLINE = "Offline",
}

export enum ChannelSite {
  PB = "PB", //Private banking
  MB = "MB", //Mobile banking
}

export enum TemplateID {
  STOCK = "stock",
  FILLED_PRICE = "filledPrice",
  ORDER_PRICE = "orderPrice",
  PLACED_DATE = "placedDate",
  LAST_FILLED = "lastFilled",
  GOOD_TILL = "goodTill",
  ACTION = "action",
  STATUS = "status",
  ACTION_STATUS_MOBILE = "actionStatusMobile",
  ROW_ACTIONS = "rowActions",
  NET_QUANTITY = "netQuantity",
  UNREALISED_PL = "unrealisedPL",
  MARKET_COST_PRICE = "marketCostPrice",
  HOLDINGS_PERCENTAGE = "holdingsPercentage",
  TRADABLE_QUANTITY = "tradableQuantity",
  COIN = "coin",
  TRANSACTIONS = "transactions",
  EQUITY_TRANSACTIONS = "equityTransactions",
}

export enum TradeActionFlags {
  BUY = "buy",
  SELL = "sell",
  REVERSAL = "reversal",
}

export enum SourceChannel {
  IB = "PB",
  MB = "MB",
}

export enum ChannelId {
  IBANK = "IBANK",
  IWEB = "IWEB",
  PBSG = "PBSG",
  PBHK = "PBHK",
  PBTW = "PBTW",
  MOBILE = "MOBILE",
  MBHK = "MBHK",
  MBSG = "MBSG",
  MBTW = "MBTW",
  RMM = "RMM",
}

export enum ServiceFlag {
  CRYPTO = "crypto",
  TRADING = "trading",
}

export const regionTimeZoneLabels = {
  [RegionId.SG]: "SGT",
  [RegionId.HK]: "HKT",
  [RegionId.SV]: "",
  [RegionId.TW]: "",
  [RegionId.US]: "",
  [RegionId.UK]: "",
  [RegionId.JP]: "",
  [RegionId.CA]: "",
  [RegionId.AU]: "",
};

export const zhCountryCodes: { [key: string]: string } = {
  [RegionId.SG]: "新加坡",
  [RegionId.HK]: "香港",
  [RegionId.US]: "美国",
  [RegionId.UK]: "英國",
  [RegionId.CA]: "加拿大",
  [RegionId.AU]: "澳洲",
  [RegionId.JP]: "日本",
};

export enum FailedServices {
  MDF = "MDF",
  FX = "FX",
  YTD = "YTD",
}

export type FailedServicesTypes =
  | FailedServices.MDF
  | FailedServices.FX
  | FailedServices.YTD;

export enum MfePath {
  PLACE_TRADE = "/placeTrade",
  HOLDINGS = "/holdings",
  ORDERS = "/orders",
  CRYPTO_INFO = "/cryptoInfo",
  EADVICE = "/eadvice",
  LATEST_STORIES = "/latest-stories",
  LATEST_NEWS = "/latest-news",
  EQUITY_INFO = "/equityInfo",
}

export enum MfeName {
  CONTAINER = "container",
  CRYPTO = "crypto",
  MY_TRADES = "myTrades",
  PLACED_TRADE = "placedTrade",
  HOLDINGS = "holdings",
  ORDERS_MGT = "ordersMgt",
  CRYPTO_INFO = "cryptoInfo",
  TRADING = "trading",
  ORDERS = "orders",
  LATEST_STORIES = "latestStories",
  OVERVIEW = "dashboard-overview",
  ORDERS_ENQUIRY = "ordersEnquiry",
  STOCKSEARCH = "marketdata-stocksearch",
  WATCHLIST = "watchlist",
  EQUITY_ORDER_PLACEMENT = "order-placement",
  MARKETDATA = "marketdata-equityinfo",
  QUICKTRADE = "quickTrade",
  LATEST_NEWS = "latestNews",
  RM_ORDERS_ENQUIRY = "equity_order_enquiry_mfe",
  RM_MARKETDATA_EQUITY_INFO = "equity_marketdata_equityinfo_mfe",
  RM_DASHBOARD_OVERVIEW = "equity_overview_mfe",
  RM_ORDER_PLACEMENT = "equity_order_placement_mfe",
  RM_STOCKSEARCH = "equity_marketdata_stocksearch_mfe",
  RM_WATCHLIST = "equity_watchlist_mfe",
  RM_HOLDINGS = "equity_holdings_enquiry_mfe",
  RM_ENTL_AGMT = "equity_marketdata_entl_agmt_mfe",
  RM_LATEST_NEWS = "equity_marketdata_news_mfe",
  RM_CUSTOMER = "equity_customer_mfe",
  RM_NOTIFICATION_MFE = "equity_notification_mfe",
}

export const RemoteModule: { [key in MfeName]?: string } = {
  [MfeName.RM_ORDERS_ENQUIRY]: "./Orders",
  [MfeName.RM_MARKETDATA_EQUITY_INFO]: "./Provider",
  [MfeName.RM_DASHBOARD_OVERVIEW]: "./Provider",
  [MfeName.RM_ORDER_PLACEMENT]: "./Provider",
  [MfeName.RM_STOCKSEARCH]: "./Provider",
  [MfeName.RM_WATCHLIST]: "./Provider",
  [MfeName.RM_HOLDINGS]: "./Provider",
  [MfeName.RM_ENTL_AGMT]: "./Provider",
  [MfeName.RM_LATEST_NEWS]: "./Provider",
};

export enum CryptoMfePath {
  PLACE_TRADE = "/placeTrade",
  HOLDINGS = "/holdings",
  ORDERS = "/orders",
  CRYPTO_INFO = "/cryptoInfo",
  EADVICE = "/eadvice",
  LATEST_STORIES = "/latest-stories",
  STOCKSEARCH = "/stocksearch",
}

export enum EquityMfePath {
  ORDERS = "/orders",
  MY_TRADES = "/myTrades",
  OVERVIEW = "/dashboard_overview",
  WATCHLIST = "/watchlist",
  STOCKSEARCH = "/stocksearch",
  EQUITY_ORDER_PLACEMENT = "/order-placement",
  MARKETDATA_EQUITY_INFO = "/equityinfo",
  MORE = "/more",
  QUICKTRADE = "/quickTrade",
  TRADING = "/trading",
  ORDERS_ENQUIRY = "/ordersEnquiry",
  MARKETDATA = "/marketdata-equityinfo",
  LATEST_NEWS = "/latest-news",
  HOLDINGS = "/holdings",
  DASHBOARD_OVERVIEW = "/dashboard-overview",
  LATEST_STORIES = "/latest-stories",
  DEFAULT = "/",
  ENTL_AGMT = "/entitlements",
}

export enum PlaceTradeSubPath {
  TRADE_INPUT = "",
  TRADE_REVIEW = `/trade-review`,
  TRADE_COMPLETION = `/trade-completion`,
  AMEND_ORDER = `/amend`,
  AMEND_ORDER_REVIEW = `/amend-review`,
  CHANGE_COIN = `/change-coin`,
  RISK_ACCEPTANCE = `/risk-acceptance`,
  CANCEL_ORDER_REVIEW = `/cancel-order-review`,
  CANCEL_COMPLETION = `/cancel-order-completion`,
  STOCK_SEARCH = `/stock-search`,
  DEFAULT = "/",
}

export enum HoldingDrawerSubPath {
  HOLDING_DETAILS = "holding-details",
}

export enum CryptoInfoSubPath {
  COIN_DETAILS = "/coin-details",
}

export enum LatestStoriesSubPath {
  STORY_DETAILS = "/story/details",
  STORY_LIST = "/stories",
}

export enum LatestNewsSubPath {
  NEWS_DETAILS = "/news-details",
  NEWS_LIST = "/news-list",
}

export enum EquityInfoSubPath {
  EQUITY_INFO = "/equity-info",
}

export enum HistoryAction {
  REPLACEORIGIN = "replaceOrigin",
}

export enum ClientSegment {
  PB = "PB",
}

export enum ClientSegmentNames {
  PB = "private-bank",
  TPC = "TPC",
  TREASURES = "TREASURES",
  MASS = "MASS",
}

export const ServiceFlagValues = {
  [ServiceFlag.CRYPTO]: "crypto",
  [ServiceFlag.TRADING]: "equity",
};

export enum AssetType {
  CRYPTO = "Crypto",
  EQUITY = "Equity",
}

export enum isCorporateFlag {
  TRUE = "true",
  FALSE = "false",
}

export const isCorporateValues = {
  [isCorporateFlag.TRUE]: true,
  [isCorporateFlag.FALSE]: false,
};

export enum corpWealthAccIndFlag {
  Y = "Y",
  N = "N",
}

export const corpWealthAccIndStringValues = {
  [corpWealthAccIndFlag.Y]: "true",
  [corpWealthAccIndFlag.N]: "false",
};

export const corpWealthAccIndValues = {
  [corpWealthAccIndFlag.Y]: true,
  [corpWealthAccIndFlag.N]: false,
};

export enum isAICustomerFlag {
  TRUE = "true",
  FALSE = "false",
}

export const isAICustomerValues = {
  [isAICustomerFlag.TRUE]: true,
  [isAICustomerFlag.FALSE]: false,
};

export const DATE_FORMAT_DD_MMM_YYYY = "DD MMM YYYY";

export enum Environment {
  DEVELOPMENT = "development",
  SIT = "sit",
  UAT = "uat",
  TEST = "test",
  PROD = "prod",
  DRYRUN = "dryrun",
}

export enum LandingPage {
  HOLDING_DETAILS = "holdings/holding-details",
  HOLDINGS = "holdings",
  DASHBOARD = "dashboard",
  ORDER_PLACE = "order-placement",
  EQUITY_INFO = "equity-info",
}

export enum PortfolioTypes {
  WEALTH_PORTFOLIO = "WealthPortfolio",
  RELATED_PORTFOLIO = "RelatedPortfolio",
  INVESTMENT_ID = "InvestmentId",
}

export enum GroupType {
  SINGLE = "single",
  MULTI = "multi",
}

export enum Dropdown {
  SHOW = "show",
  ACTIVE = "active",
  EMPTY = "",
}

export enum WindowTriggerTypes {
  VERIFY_TRANSITID_AND_UNMOUNT = "verifyTransitIdAndUnmount",
  UNMOUNT_OET = "unmountOet",
  LOGOUT_DIGI = "logoutDigi",
}

export enum DigiPages {
  FX_TRANSFER = "fxtransfer",
  DASHBOARD = "dashboard",
  INVEST_LANDING = "investLanding",
  INVESTMENT_TRANSACTION = "investmentTransaction",
  LOGOUT_DIGI = "logoutDigi",
}
