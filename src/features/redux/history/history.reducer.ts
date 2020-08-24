import { historyTypes } from './history.actions';

export const HistoryReduces = (state: any = {}, action: any) => {
    switch (action.type) {

        case historyTypes.FETCH_PASTSPACE_DATA:
            return {
                ...state,
                spaceDataList: action.payload
            };
        default:
            return state;
    }
};