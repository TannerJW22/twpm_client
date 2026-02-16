import { ValidError, ErrorMgr_ThrowParams, TwpmError } from "../types";

export class ErrorMgr {
  public static readonly VALID_ERROR_TYPES = [
    "API_ERROR",
    "CONFIG_ERROR",
    "DATA_ERROR",
    "INTERNAL_ERROR",
    "MODEL_ERROR",
    "PARADIGM_ERROR",
    "SERVICE_ERROR",
    "VALIDATION_ERROR",
  ] as const;

  // ::: Validates string against VALID_ERROR_TYPES
  public static readonly isValidType = (type: string): type is ValidError => {
    return (this.VALID_ERROR_TYPES as readonly string[]).includes(type);
  };

  // ::: Throw a new TwpmError
  public static throw({ errorType, description, raw }: ErrorMgr_ThrowParams): never {
    const _error = raw instanceof Error ? raw : new Error(description);

    const twpmError: TwpmError = {
      errorType,
      description,
      stackTrace: _error.stack,
      raw: _error,
    };

    throw twpmError;
  }

  private constructor() {}
}
