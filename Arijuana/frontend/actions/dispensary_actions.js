import * as DispensariesAPIUtil from '../util/dispenary_api_util';

const receiveDispensaries = dispensaries => {
    return {
        type: RECEIVE_DISPENSARIES,
        dispensaries
    }
}

export const fetchDispensaries = () => dispatch => {
    return DispensariesAPIUtil.fetchDispensaries()
        .then(dispensaries => dispatch(receiveDispensaries(dispensaries)))
}