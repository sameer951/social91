import { historyTypes } from './history.actions';

export const HistoryReduces = (state: any = {}, action: any) => {
    switch (action.type) {

        case historyTypes.FETCH_PASTSPACE_DATA:
            return {
                ...state,
                spaceDataList: action.payload,
                isLoading:false
            };
        case historyTypes.IS_LOADUNG:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};