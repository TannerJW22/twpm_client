import { VerifiedParadigm } from "../types";

type _AnyObject = Record<string, any>;

export class Paradigm {
  // Utility PsuedoClass Only
  private constructor() {}

  // ::: Adds new paradigm objects to Paradigm Utility PsuedoClass
  public static new<T extends _AnyObject>(paradigmObject: T, paradigmName: string): void {
    if ((this as any)[paradigmName]) {
      console.warn(`Paradigm.${paradigmName} already exists. Overwriting.`);
    }
    (this as any)[paradigmName] = paradigmObject;
  }

  // ::: Checks if string matches existing paradigm
  public static verify(key: string): VerifiedParadigm {
    if (key in this) {
      return key as VerifiedParadigm;
    }
    throw new Error(`Paradigm.verify() failed: '${key}' is not a registered Paradigm key.`);
  }
}
