import { CoinDeskApi_ToUrlEndpointParams } from "../types";

export function toUrlEndpoint(paramObj: CoinDeskApi_ToUrlEndpointParams) {
  let urlEndpoint: string;

  switch (paramObj._type) {
    case "CoinDeskApi_GetMarketCandlesParams":
      urlEndpoint = `https://data-api.coindesk.com/spot/v1/historical/${paramObj.periodInterval}?market=${paramObj.exchange}&limit=${paramObj.limit.toString()}&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=ID,OHLC_TRADE,VOLUME&instrument=${paramObj.instrumentID}&to_ts=${paramObj.endUnix.toString()}`;
      break;

    default:
      throw new Error(
        `Invalid paramObj._type detected in .toUrlEndpoint() -> "${typeof paramObj}"`,
      );
  }
  return urlEndpoint;
}
