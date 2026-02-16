import { Api, Paradigm } from "../models";

export class TwpmClient {
  public static Api = Api;
  public static Paradigm = Paradigm;

  // ::: Root Method that Initializes All App Functionality
  public static start(): void {
    this.Api.init();
    this.Paradigm.init();
  }

  private constructor() {} // Disables Instantiation; Utility PsuedoClass Only
}
