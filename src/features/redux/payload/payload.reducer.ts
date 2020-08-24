import { payloadTypes } from './payload.actions';

export const PayloadReduces = (state: any = { invoiceList: [], vendors: [], config: {} }, action: any) => {
    switch (action.type) {

        case payloadTypes.FETCH_PAYLOAD_SPACE_DATA:
            return {
                ...state,
                spaceDataList: action.payload
            };
        default:
            return state;
    }
};