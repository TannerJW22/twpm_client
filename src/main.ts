import { kalshiApi } from "./api";

async function main() {
  // :::* Testing for getMarketCandles()
  const marketCandles = await kalshiApi.getMarketCandles({
    seriesTicker: "KXBTC15M",
    marketTicker: "KXBTC15M-26FEB120900-00",
    startUnix: 1770903900,
    endUnix: 1770904800,
    periodInterval: 1,
  });
  console.log("|-- Market Candles --|\n", marketCandles);

  // :::* Testing for getTrades()
  const marketTrades = await kalshiApi.getTrades({
    limit: 3,
    cursor: "",
    startUnix: 1770903900,
    endUnix: 1770904800,
    marketTicker: "KXBTC15M-26FEB120900-00",
  });
  console.log("|-- Market Trades --|\n", marketTrades);
}

main().catch((err) => {
  console.error("Unhandled error in main():", err);
});

/////////////////////////////////////////////////////////////////
console.log("\n\n\n=-=-=-=-=-=- :: CONSOLE LOG :: -=-=-=-=-=-=-=-=\n"); // <<--*
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
setTimeout(() => {
  console.log("\n\n=-=-=-=-=-=- :: END END END :: -=-=-=-=-=-=-=-=\n\n\n\n");
}, 2000); // <<--*
/////////////////////////////////////////////////////////////////
