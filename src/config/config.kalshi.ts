import { Configuration } from "../types";
import * as dotenv from "dotenv";
dotenv.config();

// :::
export const kalshiConfig = new Configuration({
  apiKey: process.env.KALSHI_API_KEY!,
  privateKeyPath: process.env.KALSHI_PRIVATE_KEY_PATH!,
  basePath: process.env.KALSHI_BASE_PATH!,
});

export const kalshiParadigms = ["kxbtc15m"];
