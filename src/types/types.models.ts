import { VerifiedApiList, VerifiedParadigmList } from "../models";

export type _AnyObject = Record<string, any>;
export type VerifiedApi = (typeof VerifiedApiList.VERIFIED_API_LIST)[number]["name"];
export type VerifiedParadigm = (typeof VerifiedParadigmList.VERIFIED_PARADIGM_LIST)[number]["name"];
