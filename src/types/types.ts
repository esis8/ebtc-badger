export interface SetSelectedRedAction{
    type: 'SET_SELECTED_RED';
    payload: string;
}

export interface SetDepositEbtcAction{
    type: 'SET_DEPOSIT_EBTC';
    payload: string;
}

export interface SetDepositstEthAction{
    type: 'SET_DEPOSIT_STETH';
    payload: string;
}

export interface SetUsdBtcAction{
    type: 'SET_USD_BTC';
    payload: string;
}

export interface SetUsdStEthAction{
    type: 'SET_USD_STETH';
    payload: string;
}

export type ReducerAction = SetSelectedRedAction | SetDepositEbtcAction | SetDepositstEthAction | SetUsdBtcAction | SetUsdStEthAction;

export interface AppState {
    selectedRed: string;
    eBtcDeposit: string;
    stEthDeposit: string;
    usdBtc: string;
    usdStEth: string;
}


export type RootState = AppState;