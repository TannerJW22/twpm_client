export function getMIDfromKalshiTicker(marketTicker: string): string {
  if (!marketTicker)
    throw new Error(`getMIDfromKalshiTicker() | Invalid 'marketTicker' argument: ${marketTicker}`);
  const hyphenIndex = marketTicker.indexOf("-");

  if (hyphenIndex === -1) {
    return marketTicker; // no hyphen found, return entire string
  }

  return marketTicker.slice(0, hyphenIndex);
}
