import { UrlConfig } from '../../base/urlconfigs';
import { AxiosService } from '../../util/axios.service';
export const payloadTypes = {
    'FETCH_PAYLOAD_SPACE_DATA': 'FETCH_PAYLOAD_SPACE_DATA',
}

export const payloadActions = dispatch => {
    return {
        fetchPayloadSpaceData: () => {
            AxiosService.httpGet(UrlConfig.GET_PAYLOAD).then(data => {
                dispatch({ type: payloadTypes.FETCH_PAYLOAD_SPACE_DATA, payload: data })
            }).catch(err => {
                dispatch({ type: payloadTypes.FETCH_PAYLOAD_SPACE_DATA, payload: [] })
                console.log(err)
            })
        }
    }
}