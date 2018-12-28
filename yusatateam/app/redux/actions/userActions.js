import {
    USER,
    JOBS,
    SIM,
    DEVICE,
    CUSTOMER,
    TECHNICIAN,
    GPSDEVICE,
    SUBMITGPSFORM,
    CREATEVEHICLETYPE,
    GPSDEVICESEARCHCRITERIA
} from '../common/actionTypes';

export default {
    simRequest: () => ({ type: SIM.SIM_REQUEST }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    jobRequest: () => ({ type: JOBS.JOBS_LOGIN }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    technicianRequest: () => ({ type: TECHNICIAN.TECHNICIAN_REQUEST }),

    /**Login Request */
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),

    /**Update Schema Request */
    updateSchema: (companyId) => ({ type: USER.UPDATESCHEMA_REQUEST, companyId }),

    /**GPS Device Request */
    gpsdeviceRequest: () => ({ type: GPSDEVICE.GPSDEVICE_REQUEST }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    submitgpsFormRequest: (formdata) => ({ type: SUBMITGPSFORM.SUBMITGPSFORM_REQUEST, formdata }),
    CreatevehicletyepRequest: () => ({ type: CREATEVEHICLETYPE.CREATEVEHICLETYPE_REQUEST }),
    searchCriteria: (filterData) => ({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST, filterData }),
    checkGPSDeviceAssociation: (deviceUDID) => ({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, deviceUDID })
}