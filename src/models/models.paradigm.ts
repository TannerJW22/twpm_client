import { _AnyObject, VerifiedParadigm } from "../types";
import { _kxbtc15m } from "../paradigm";

// --- Abstract base class holding verified paradigms ---
export abstract class VerifiedParadigmList {
  public static VERIFIED_PARADIGM_LIST = [{ obj: _kxbtc15m, name: "kxbtc15m" }] as const;

  // Pre-init all props so TypeScript knows they exist w/o Twpm.start()
  public static kxbtc15m: typeof _kxbtc15m;
}

// --- Paradigm utility pseudo-class ---
export class Paradigm extends VerifiedParadigmList {
  // ::: Internal Constructor Method
  private static new<T extends _AnyObject>(paradigmObject: T, paradigmName: string): void {
    if ((this as any)[paradigmName]) {
      console.warn(`Error Paradigm.init() ${paradigmName} already exists. Overwriting.`);
    }
    (this as any)[paradigmName] = paradigmObject;
  }

  // ::: Init VERIFIED_PARADIGM into public class properties
  public static init(): void {
    for (const entry of this.VERIFIED_PARADIGM_LIST) {
      this.new(entry.obj, entry.name);
    }
  }

  // ::: Checks if a string matches an existing paradigm
  public static verify(key: string): VerifiedParadigm {
    if (key in this) {
      return key as VerifiedParadigm;
    }
    throw new Error(`Paradigm.verify() failed: '${key}' is not a registered Paradigm key.`);
  }

  // Disables instantiation; pseudo-class only
  private constructor() {
    super();
  }
}
