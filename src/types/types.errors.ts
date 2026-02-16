import { ErrorMgr } from "../errors";

export type ValidError = (typeof ErrorMgr.VALID_ERROR_TYPES)[number];

export type ErrorMgr_ThrowParams = {
  errorType: ValidError;
  description: string;
  raw?: unknown;
};

export type TwpmError = {
  errorType: ValidError;
  description: string;
  stackTrace: string | undefined;
  raw: Error;
};
