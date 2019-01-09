import { takeLatest } from 'redux-saga/effects';

import {
    USER,
    INSTALLJOBS,
    UNINSTALLJOBS,
    REPAIRJOBS,
    REPLACEJOBS,
    SIM,
    CUSTOMER,
    DEVICE,
    TECHNICIAN,
    GPSDEVICE,
    GPSDEVICESEARCHCRITERIA,

    CREATEJOB,
    JOBHISTORY,
    JOBLIST,
    ADDJOBSERVICE
} from '../common/actionTypes';

/**Login Saga import */
import * as userSaga from './userSaga';

/**GPS Device import*/
import * as gpsDeviceSaga from './GPSDevice/GPSDeviceSaga';

import * as simSaga from './SIMSAGA/simSaga';
import * as deviceSaga from './deviceSaga';
// import * as jobSaga from './JOBSCHEDULESAGA/jobSaga';
import * as jobSaga from './JOBSAGA/jobsaga';
import * as cutomerSaga from './customerSaga';
import * as technicianSaga from './technicianSaga';


export default function* rootSaga() {
    /**Login */
    yield takeLatest(USER.LOGIN, userSaga.login),

        /**Region & Company Filter Schema*/
        yield takeLatest(USER.UPDATESCHEMA_REQUEST, userSaga.updateSchema),

        /**GPS Device */
        yield takeLatest(GPSDEVICE.GPSDEVICE_REQUEST, gpsDeviceSaga.gpsDeviceCountryIsd),
        yield takeLatest(GPSDEVICE.DEVICEINFO_REQUEST, gpsDeviceSaga.getDeviceInfo),
        yield takeLatest(GPSDEVICE.ADD_GPS_DEVICE_REQUEST, gpsDeviceSaga.addGPSDevice),
        yield takeLatest(GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, gpsDeviceSaga.checkGPSDeviceAssocition),
        yield takeLatest(GPSDEVICE.CREATE_VEHICLETYPE_REQUEST, gpsDeviceSaga.createVehicleType),
        yield takeLatest(GPSDEVICE.CREATEVEHICLE_REQUEST, gpsDeviceSaga.createVehicle),
        yield takeLatest(GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST, gpsDeviceSaga.searchCriteria),

        // /**  Job Schedule Info */
        // yield takeLatest(INSTALLJOBS.INSTALLJOBS_REQUEST, jobSaga.jobInstallData), 
        // yield takeLatest(REPAIRJOBS.REPAIRJOBS_REQUEST, jobSaga.jobRepairData), 
        // yield takeLatest(REPLACEJOBS.REPLACEJOBS_REQUEST, jobSaga.jobReplaceData), 
        // yield takeLatest(UNINSTALLJOBS.UNINSTALLJOBS_REQUEST, jobSaga.jobUnInstallData), 

        /**Jobs Schema */
        yield takeLatest(CREATEJOB.CREATEJOB_REQUEST, jobSaga.createJobData), 
        yield takeLatest(JOBHISTORY.JOBHISTORY_REQUEST, jobSaga.jobHistoryData), 
        yield takeLatest(JOBLIST.JOBLIST_REQUEST, jobSaga.jobListData),
        yield takeLatest(ADDJOBSERVICE.ADDJOBCOMPANY_SUCCESS,jobSaga.Addjobcompany)


        /**Sim Info */
        yield takeLatest(SIM.SIM_REQUEST, simSaga.simlogin),



        yield takeLatest(DEVICE.DEVICE_REQUEST, deviceSaga.loginDevice)
        
        yield takeLatest(CUSTOMER.CUSTOMER_FETCH, cutomerSaga.cutomerList),
        yield takeLatest(TECHNICIAN.TECHNICIAN_REQUEST, technicianSaga.technicianLogin)

}