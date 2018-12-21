import {call,put,all} from 'redux-saga/effects';
import { GPSDEVICE,GPSDEVICEDATA,GPSDEVICECOUNTRYISD } from '../common/actionTypes';
import userServices from '../services/userServices'

export function* gpsDeviceCountryIsd(action){
        try {
            const data = yield call(userServices.gpsDeviceCountryIsd);
            // alert(JSON.stringify(data))
            yield put({type: GPSDEVICECOUNTRYISD.GPSDEVICECOUNTRYISD_SUCCESS,data});
        } catch(error) {
            yield put({type: GPSDEVICE.GPSDEVICE_FAILED,error})
        }
        
    }
  
// export function* gpslogin(action){
//     try {
//     const [data1,data2] = yield all([call(userServices.gpslogin),call(userServices.deviceValue),call(userServices.gpsDeviceCountryIsd)]);
//         yield all([put({type: GPSDEVICE.GPSDEVICE_SUCCESS,data1}),put({type: GPSDEVICEDATA.GPSDEVICEDATA_SUCCESS,data2}),put({type: GPSDEVICECOUNTRYISD.GPSDEVICECOUNTRYISD_SUCCESS,data3})]);
//     } catch(error) {
//         yield put({type: GPSDEVICE.GPSDEVICE_FAILED,error})
//     }
// }