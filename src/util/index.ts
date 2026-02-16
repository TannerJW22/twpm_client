import { ErrorMgr } from "../errors";

export function getMIDfromKalshiTicker(marketTicker: string): string {
  if (!marketTicker)
    ErrorMgr.throw({
      errorType: "VALIDATION_ERROR",
      description: `./util/index.ts | Invalid {marketTicker} in getMIDfromKalshiTicker(): ${marketTicker}`,
    });
  const hyphenIndex = marketTicker.indexOf("-");
  if (hyphenIndex === -1) {
    return marketTicker; // no hyphen found, return entire string
  }

  return marketTicker.slice(0, hyphenIndex);
}
