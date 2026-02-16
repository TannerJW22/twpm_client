import { _coinDeskApi, _kalshiApi } from "../api";
import { ErrorMgr } from "../errors";
import { _AnyObject, VerifiedApi, KalshiApi, CoinDeskApi } from "../types";

export abstract class VerifiedApiList {
  public static VERIFIED_API_LIST = [
    { obj: _kalshiApi, name: "kalshi" },
    { obj: _coinDeskApi, name: "coinDesk" },
  ] as const;

  // Pre-init all props so TypeScript knows they exist w/o Twpm.start()
  public static kalshi: KalshiApi;
  public static coinDesk: CoinDeskApi;
}

export class Api extends VerifiedApiList {
  // ::: Internal Constructor Method
  private static new<T extends _AnyObject>(ApiObject: T, ApiName: string): void {
    if ((this as any)[ApiName]) {
      console.warn(`Error Api.init() ${ApiName}`);
    }
    (this as any)[ApiName] = ApiObject;
  }

  // ::: Init VERIFIED_APIs into public class methods
  public static init(): void {
    for (const entry of this.VERIFIED_API_LIST) {
      this.new(entry.obj, entry.name);
    }
  }

  // ::: Checks if a string matches an existing paradigm
  public static verify(key: string): VerifiedApi {
    if (key in this) {
      return key as VerifiedApi;
    }
    ErrorMgr.throw({
      errorType: "VALIDATION_ERROR",
      description: `./models/api.ts | Invalid {key} in Api.verify(): '${key}'`,
    });
  }

  private constructor() {
    // Disables Instantiation; Utility PsuedoClass Only
    super();
  }
}
