import { TwpmClient } from "./models";
import { ErrorMgr } from "./errors";

const { Api } = TwpmClient;
TwpmClient.start();

async function main() {
  // :::* Testing for kalshiApi.getMarketCandles()
  const marketCandles = await Api.coinDesk.getMarketCandles({
    periodInterval: "minutes",
    exchange: "bitstamp",
    instrumentID: "btcusd",
    limit: 5,
    endUnix: 1771085604,
  });
  console.log("|-- Market Candles --|\n", marketCandles);

  // :::* Testing for kalshiApi.getMarketCandles()
  // const marketCandles = await kalshiApi.getMarketCandles({
  //   seriesTicker: "KXBTC15M",
  //   marketTicker: "KXBTC15M-26FEB120900-00",
  //   startUnix: 1770903900,
  //   endUnix: 1770904800,
  //   periodInterval: 1,
  // });

  // console.log("|-- Market Candles --|\n", marketCandles);

  // // :::* Testing for kalshiApi.getTrades()
  // const marketTrades = await kalshiApi.getTrades({
  //   limit: 3,
  //   cursor: "",
  //   startUnix: 1770903900,
  //   endUnix: 1770904800,
  //   marketTicker: "KXBTC15M-26FEB120900-00",
  // });
  // console.log("|-- Market Trades --|\n", marketTrades);
}

main().catch((err) => {
  ErrorMgr.throw({
    errorType: "INTERNAL_ERROR",
    description: "./main.ts | Unknown Error in main()",
    raw: err,
  });
});

/////////////////////////////////////////////////////////////////
console.log(`\n\n\n\n-=-=-=-=-=-=-=-=-=  ::  CONSOLE LOG @${Date.now()} ::  -=-=-=-=-=-=-=-=-=\n`); // <<--*
/////////////////////////////////////////////////////////////////
