import type {
  PortfolioApi,
  EventsApi,
  MarketApi,
  ExchangeApi,
  MilestoneApi,
  StructuredTargetsApi,
  MultivariateApi,
  GetMarketCandlesticksPeriodIntervalEnum,
  MarketCandlestick,
  Trade,
} from "kalshi-typescript";

import type { AxiosResponse } from "axios";

// ::: _Unified Raw Kalshi API <-- _Multiple Raw Kalshi Api Instances
export type _RawKalshiApi = {
  portfolio: PortfolioApi;
  events: EventsApi;
  market: MarketApi;
  exchange: ExchangeApi;
  milestone: MilestoneApi;
  structuredTargets: StructuredTargetsApi;
  multivariate: MultivariateApi;
};

// =-=-=- getMarketCandles() <-- getMarketCandlesticks() =-=-=- //

export type KalshiApi_GetMarketCandlesParams = {
  seriesTicker: string; // Series ticker
  marketTicker: string; //  Market ticker
  startUnix: number; // Start Unix Timestamp (inclusive)
  endUnix: number; // End Unix Timestamp (inclusive)
  periodInterval: GetMarketCandlesticksPeriodIntervalEnum;
  // Candle interval (in minutes) Valid are 1 | 60 | 1440
  options?: object; // Override http request option.
};

export type KalshiApi_GetMarketCandlesResponse = {
  status: number; // HTTP status code
  statusText: string; // HTTP status text
  cursor: "";
  data: MarketCandlestick[]; // Array of candlestick data objects
  raw: Omit<AxiosResponse<any, any, {}>, "data">; // Raw response from Kalshi API w/o res.data
};

// =-=-=- getTrades() <-- getTrades() =-=-=- //

export type KalshiApi_GetTradesParams = {
  limit: number; // Default is 100; Max is 1000
  cursor: string;
  marketTicker: string;
  startUnix: number;
  endUnix: number;
  options?: object; // Override http request option.
};

export type KalshiApi_GetTradesResponse = {
  status: number;
  statusText: string;
  cursor: string;
  data: Trade[];
  raw: Omit<AxiosResponse<any, any, {}>, "data">; // Raw response from Kalshi API w/o res.data
};
