import { SetSelectedRedAction, SetDepositEbtcAction, SetDepositstEthAction, SetUsdBtcAction, SetUsdStEthAction } from "@/types/types";

export const setSelectedRed = (red:string):SetSelectedRedAction=>({
    type: 'SET_SELECTED_RED',
    payload: red,
});

export const setDepositEbtc = (eBTC:string):SetDepositEbtcAction=>({
    type: 'SET_DEPOSIT_EBTC',
    payload: eBTC,
});

export const setDepositstEth = (stETH:string):SetDepositstEthAction=>({
    type: 'SET_DEPOSIT_STETH',
    payload: stETH,
});

export const setUsdBtc = (usdBTC:string):SetUsdBtcAction=>({
    type: 'SET_USD_BTC',
    payload: usdBTC,
});

export const setUsdStEth = (usdStETH:string):SetUsdStEthAction=>({
    type: 'SET_USD_STETH',
    payload: usdStETH,
});