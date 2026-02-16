import { AxiosResponse } from ".";

// ::: Standardized & Unified Raw CoinDesk API <-- _Multiple Raw CoinDesk Api REST Endpoints
export type CoinDeskApi = {
  getMarketCandles: (
    paramObj: CoinDeskApi_GetMarketCandlesParams,
  ) => CoinDeskApi_GetMarketCandlesResponse;

  toUrlEndpoint: (paramObj: CoinDeskApi_ToUrlEndpointParams) => string;
};

// =-=-=- getMarketCandles() <-- Standardized API Wrapper: {GET} Spot >> Historical OHLCV+ =-=-=- //
// (Docs: https://developers.coindesk.com/documentation/data-api/spot_v1_historical_minutes)
export type CoinDeskApi_GetMarketCandlesParams = {
  _type?: "CoinDeskApi_GetMarketCandlesParams";
  periodInterval: "minutes" | "hours" | "days";
  exchange: string;
  instrumentID: string;
  limit: number; // Min 1 Max 2000 Default 30
  endUnix: number;
};

export type CoinDeskApi_GetMarketCandlesResponse = Promise<{
  _type: "CoinDeskApi_GetMarketCandlesResponse";
  status: number; // HTTP status code
  statusText: string; // HTTP status text
  cursor: string;
  data: CoinDeskMarketCandlestick[];
  raw: Omit<AxiosResponse<any, any, {}>, "data">; // Raw response from CoinDesk API w/o res.data
}>;

export type CoinDeskMarketCandlestick = {
  UNIT: string;
  TIMESTAMP: number;
  TYPE: string;
  MARKET: string;
  INSTRUMENT: string;
  FIRST_TRADE_TIMESTAMP: number;
  LAST_TRADE_TIMESTAMP: number;
  FIRST_TRADE_PRICE: number;
  HIGH_TRADE_PRICE: number;
  HIGH_TRADE_TIMESTAMP: number;
  LOW_TRADE_PRICE: number;
  LOW_TRADE_TIMESTAMP: number;
  LAST_TRADE_PRICE: number;
  VOLUME: number;
  QUOTE_VOLUME: number;
  VOLUME_BUY: number;
  QUOTE_VOLUME_BUY: number;
  VOLUME_SELL: number;
  QUOTE_VOLUME_SELL: number;
  VOLUME_UNKNOWN: number;
  QUOTE_VOLUME_UNKNOWN: number;
};

export type CoinDeskApi_ToUrlEndpointParams = CoinDeskApi_GetMarketCandlesParams; // make into union as you add more
