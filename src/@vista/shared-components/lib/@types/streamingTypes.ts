export interface FidsType {
  f: number;
  i: string;
  v: string;
}

export enum ConnectionStatus {
  LOADING,
  ERROR,
  SUCCESS,
}

export enum ENV {
  DEV = "dev",
  TEST = "test",
  SIT = "sit",
  UAT = "uat",
  DRYRUN = "dryrun",
  PROD = "prod",
}
