import userService from '../services/userServices';
import { call, put } from 'redux-saga/effects';
import { SUBMITGPSFORM } from '../common/actionTypes'

export function* SubmitFormLogin(action) {
    try {
        const data = yield call(userService.submitGpsForm, action.formdata)
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_SUCCESS, data })
    } catch (error) {
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_FAILED, error })
    }
}