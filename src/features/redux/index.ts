import { HistoryReduces } from './history/history.reducer';

import { createStore, combineReducers } from "@reduxjs/toolkit";
import { PayloadReduces } from './payload/payload.reducer';

const rootReducer = combineReducers({
    past: HistoryReduces,
    payload: PayloadReduces
});

export const storeFile = (initialState = {}): any => {
    return createStore(rootReducer, initialState);
}