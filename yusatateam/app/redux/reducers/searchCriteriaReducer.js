import { GPSDEVICESEARCHCRITERIA } from  '../common/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default searchCriteria = (state = initialState, action) => {
    switch(action.type) {
        case GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST :
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_SUCCESS :
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_FAILED :
            return Object.assign({}, state, {
                data: [],
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}