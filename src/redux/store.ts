import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ReducerAction, AppState } from '@/types/types';


const initialState: AppState = {
    selectedRed: 'Ethereum',
    eBtcDeposit: '',
    stEthDeposit: '',
    usdBtc: '',
    usdStEth: '',
};

export const SET_SELECTED_RED = 'SET_SELECTED_RED';
export const SET_DEPOSIT_EBTC= 'SET_DEPOSIT_EBTC';
export const SET_DEPOSIT_STETH = 'SET_DEPOSIT_STETH';
export const SET_USD_BTC= 'SET_USD_BTC';
export const SET_USD_STETH = 'SET_USD_STETH';


export const selectedRedReducer = (state = initialState.selectedRed, action: ReducerAction) => {
    switch (action.type) {
      case SET_SELECTED_RED:
        return action.payload;
      default:
        return state;
    }
  }
 
export const eBtcReducer = (state = initialState.eBtcDeposit, action: ReducerAction) => {
    switch (action.type) {
      case SET_DEPOSIT_EBTC:
        return action.payload;
      default:
        return state;
    }
  }  

export const stEthReducer = (state = initialState.stEthDeposit, action: ReducerAction) => {
    switch (action.type) {
      case SET_DEPOSIT_STETH:
        return action.payload;
      default:
        return state;
    }
  }

  export const usdBtcReducer = (state = initialState.usdBtc, action: ReducerAction) => {
    switch (action.type) {
      case SET_USD_BTC:
        return action.payload;
      default:
        return state;
    }
  }  

export const usdStEthReducer = (state = initialState.usdStEth, action: ReducerAction) => {
    switch (action.type) {
      case SET_USD_STETH:
        return action.payload;
      default:
        return state;
    }
  }

export const rootReducer = combineReducers({
    selectedRed: selectedRedReducer,
    eBtcDeposit: eBtcReducer,
    stEthDeposit: stEthReducer,
    usdBtc: usdBtcReducer,
    usdStEth: usdStEthReducer,

  });

const store = configureStore({
    reducer: rootReducer,
});

export default store