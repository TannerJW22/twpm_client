import axios from "axios";
import type { CoinDeskApi } from "../types";

export const coinDeskApi: CoinDeskApi = {
  // Standardized API Wrapper: {GET} Spot >> Historical OHLCV+
  // (Docs: https://developers.coindesk.com/documentation/data-api/spot_v1_historical_minutes)
  getMarketCandles: async (paramObj) => {
    const url = `https://data-api.coindesk.com/spot/v1/historical/${paramObj.periodInterval}?market=${paramObj.exchange}&limit=${paramObj.limit.toString()}&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=${paramObj.instrumentID}&to_ts=${paramObj.endUnix.toString()}`;
    const _res = await axios.get(url);
    const { data: _data, ..._resExData } = _res;

    const res = {
      status: _res.status,
      statusText: _res.statusText,
      cursor: "",
      data: _data.Data || [],
      raw: _resExData,
    };
    return res;
  },
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
