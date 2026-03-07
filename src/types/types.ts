export interface SetSelectedRedAction {
  type: "SET_SELECTED_RED";
  payload: string;
  [key: string]: any;
}

export interface SetDepositEbtcAction {
  type: "SET_DEPOSIT_EBTC";
  payload: string;
  [key: string]: any;
}

export interface SetDepositstEthAction {
  type: "SET_DEPOSIT_STETH";
  payload: string;
  [key: string]: any;
}

export interface SetUsdBtcAction {
  type: "SET_USD_BTC";
  payload: string;
  [key: string]: any;
}

export interface SetUsdStEthAction {
  type: "SET_USD_STETH";
  payload: string;
  [key: string]: any;
}

export type ReducerAction =
  | SetSelectedRedAction
  | SetDepositEbtcAction
  | SetDepositstEthAction
  | SetUsdBtcAction
  | SetUsdStEthAction;

export interface AppState {
  selectedRed: string;
  eBtcDeposit: string;
  stEthDeposit: string;
  usdBtc: string;
  usdStEth: string;
}

export type RootState = AppState;
