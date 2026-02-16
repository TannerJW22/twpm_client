import {
  PortfolioApi,
  EventsApi,
  MarketApi,
  ExchangeApi,
  MilestoneApi,
  StructuredTargetsApi,
  MultivariateApi,
} from "kalshi-typescript";

import { kalshiConfig } from "../config";
import { getMIDfromKalshiTicker } from "../util";
import { Paradigm } from "../models";
import type { _RawKalshiApi, KalshiApi } from "../types";

// ::: _Unified Raw Kalshi API Instance <-- _Multiple Raw Kalshi Api Instances
export const _rawKalshiApi: _RawKalshiApi = {
  portfolio: new PortfolioApi(kalshiConfig),
  events: new EventsApi(kalshiConfig),
  market: new MarketApi(kalshiConfig),
  exchange: new ExchangeApi(kalshiConfig),
  milestone: new MilestoneApi(kalshiConfig),
  structuredTargets: new StructuredTargetsApi(kalshiConfig),
  multivariate: new MultivariateApi(kalshiConfig),
};

// ::: Standardized & Filtered Kalshi API Wrapper <-- _Multiple Raw Kalshi API Query Functions
export const _kalshiApi: KalshiApi = {
  // Standardized API Wrapper: getMarketCandlesticks()
  getMarketCandles: async (paramObj) => {
    const _res = await _rawKalshiApi.market.getMarketCandlesticks(
      paramObj.seriesTicker,
      paramObj.marketTicker,
      paramObj.startUnix,
      paramObj.endUnix,
      paramObj.periodInterval,
      true,
      paramObj.options || {},
    );

    const { data: _data, ..._resExData } = _res;

    const res = {
      _type: "KalshiApi_GetMarketCandlesResponse" as const,
      seriesTicker: Paradigm.verify(paramObj.seriesTicker),
      status: _res.status,
      statusText: _res.statusText,
      cursor: "",
      data: _data.candlesticks,
      raw: _resExData,
    };
    return res;
  },

  // Standardized API Wrapper: getTrades()
  getTrades: async (paramObj) => {
    const _res = await _rawKalshiApi.market.getTrades(
      paramObj.limit,
      paramObj.cursor,
      paramObj.marketTicker,
      paramObj.startUnix,
      paramObj.endUnix,
      paramObj.options || {},
    );

    const { data: _data, ..._resExData } = _res;

    const res = {
      _type: "KalshiApi_GetTradesResponse" as const,
      seriesTicker: Paradigm.verify(getMIDfromKalshiTicker(_data.trades[0]!.ticker)),
      status: _res.status,
      statusText: _res.statusText,
      cursor: _data.cursor,
      data: _data.trades,
      raw: _resExData,
    };
    return res;
  },
};
