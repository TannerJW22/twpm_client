import axios from "axios";
import type { CoinDeskApi } from "../types";
import { toUrlEndpoint } from "../config";

// ::: Standardized API Wrapper: {GET} Spot >> Historical OHLCV+
export const _coinDeskApi: CoinDeskApi = {
  // (Docs: https://developers.coindesk.com/documentation/data-api/spot_v1_historical_minutes)
  getMarketCandles: async (paramObj) => {
    paramObj._type = "CoinDeskApi_GetMarketCandlesParams";
    const url = _coinDeskApi.toUrlEndpoint(paramObj);
    const _res = await axios.get(url);
    const { data: _data, ..._resExData } = _res;

    const res = {
      _type: "CoinDeskApi_GetMarketCandlesResponse" as const,
      status: _res.status,
      statusText: _res.statusText,
      cursor: "",
      data: _data.Data || [],
      raw: _resExData,
    };
    return res;
  },

  // Helper function that only returns REST API URL endpoints for CoinDesk; declared in ./config
  toUrlEndpoint: (paramObj) => toUrlEndpoint(paramObj),
};

// Bitstamp (btcusd)
// https://data-api.coindesk.com/spot/v1/historical/minutes?market=bitstamp&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=btcusd&to_ts=1771085604

// Coinbase (BTC-USD)
// https://data-api.coindesk.com/spot/v1/historical/minutes?market=coinbase&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=BTC-USD&to_ts=1771085604

// Kraken (XXBTZUSD)
// https://data-api.coindesk.com/spot/v1/historical/minutes?market=kraken&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=XXBTZUSD&to_ts=1771085604

// Gemini (btcusd)
// https://data-api.coindesk.com/spot/v1/historical/minutes?market=gemini&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=btcusd&to_ts=1771085604

// LMAX Digital (BTC_USD)
// https://data-api.coindesk.com/spot/v1/historical/minutes?market=lmax&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=BTC_USD&to_ts=1771085604
