import { call, put, all } from 'redux-saga/effects';

import { GPSDEVICE, GPSDEVICESEARCHCRITERIA, SUBMITGPSFORM } from '../../common/actionTypes';
import userServices from '../../services/userServices'
import functions from '../../../common/functions';

/**CountryISD, Device Type, Vehicle List */
export function* gpsDeviceCountryIsd(action){
    try {
        const [ countryISD, deviceType,vehicleList ] = yield all([call(userServices.gpsDeviceCountryIsd),call(userServices.gpsDeviceType),call(userServices.gpsvehicleList)])
        yield put({ type: GPSDEVICE.GPSDEVICE_SUCCESS, datas: { countryISD, deviceType,vehicleList }});
    } catch(error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_FAILED, error })
        functions.showToast('Something went wrong', 'danger');
    }
}


/**GPS Device Information */
export function* getDeviceInfo(action) {
    try {
        const deviceInfo = yield call(userServices.associationDeviceInfo, action.deviceUDID)
        if (deviceInfo) {
            yield put({ type: GPSDEVICE.DEVICEINFO_SUCCESS, deviceInfo });
        } else {
            yield put({ type: GPSDEVICE.DEVICEINFO_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.DEVICEINFO_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

/**GPS Device Association List */
export function* searchCriteria(action) {
    try {
        const list = yield call(userServices.searchCriteria, action.filterData);
        // alert(JSON.stringify(list.results))
        if(list) {
            yield put({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_SUCCESS, list });
        } else {
            yield put({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

/**Add GPS Device Association */
export function* addGPSDevice(action) {
    try {
        // alert(JSON.stringify(action));
        const data = yield call(userService.addGPSDevice, action.gpsdevice)
        if(data) {
            yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_SUCCESS, data });
            functions.showToast('GPS Device added successfully', 'success');
        } else {
            yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED, error });
        functions.showToast('something Went wrong', 'danger');
    }
}

/**Check GPS Device Association */
export function* checkGPSDeviceAssocition(action) {
    try {
        const data = yield call(userServices.checkGPSDeviceAssociation, action.deviceUDID);
        if(data) {
            yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_SUCCESS, data });
            functions.showToast('Device is not engaged', 'success');
        } else {
            yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED });
        }
    } catch(error) {
        yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED, error });
        functions.showToast('something Went wrong', 'danger');
    }
}