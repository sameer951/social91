import { UrlConfig } from './../../base/urlconfigs';
import { AxiosService } from './../../util/axios.service';
export const historyTypes = {
    'FETCH_PASTSPACE_DATA': 'FETCH_PASTSPACE_DATA',
    'IS_LOADUNG': 'IS_LOADUNG',
}

export const HistoryActions = dispatch => {
    return {
        // dispatching plain actions
        fetchHistorySpaceData: () => {
            dispatch({ type: historyTypes.IS_LOADUNG, payload: true })
            AxiosService.httpGet(UrlConfig.GET_HISTORY).then(data => {
                dispatch({ type: historyTypes.FETCH_PASTSPACE_DATA, payload: data })
            }).catch(err => {
                dispatch({ type: historyTypes.FETCH_PASTSPACE_DATA, payload: [] })
                console.log(err)
            })
        }
    }
}