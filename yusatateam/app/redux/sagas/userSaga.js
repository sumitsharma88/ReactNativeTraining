import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { userServices } from '../services';
import { USER } from '../common/actionTypes';
import functions from '../../common/functions';

export function* login(action) {
    try {
        const data = yield call(userServices.login, action.loginCredentials);
        // alert(JSON.stringify(data))      
        if(data) {
            yield put({type: USER.LOGIN_SUCCESS, data});
            yield put(NavigationActions.navigate({ routeName: 'Dashboard' }));
        } else {
            yield put({type: USER.LOGIN_FAILED});
        }
    } catch (error) {
        yield put({type: USER.LOGIN_FAILED, error});
        functions.showToast('Something went wrong', 'danger');
    }
}


export function* updateSchema(action) {
    try {
        const data = yield call(userServices.updateSchema, action.companyId);
        if(data) {
            functions.showToast('Filtered applied successfully', 'success');
            yield put({type: USER.LOGIN_SUCCESS, data});
        } else {
            yield put({type: USER.LOGIN_FAILED});
        }
        
    } catch (error) {
        yield put({type: USER.LOGIN_FAILED, error});
        functions.showToast('Something went wrong', 'danger');
    }
}