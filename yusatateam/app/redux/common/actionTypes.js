export const USER = {
    LOGIN: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    UPDATESCHEMA_REQUEST: 'UPDATESCHEMA_REQUEST'
};

export const DEVICE = {
    DEVICE_REQUEST: 'DEVICE_REQUEST',
    DEVICE_SUCCESS: 'DEVICE_SUCCESS',
    DEVICE_FAILED: 'DEVICE_FAILED'
};

export const CUSTOMER = {
    CUSTOMER_FETCH: 'CUSTOMER_FETCH',
    CUSTOMER_SUCCESS: 'CUSTOMER_SUCCESS',
    CUSTOMER_FAILED: 'CUSTOMER_FAILED'
}

export const TECHNICIAN = {
    TECHNICIAN_REQUEST: 'TECHNICIAN_REQUEST',
    TECHNICIAN_SUCCESS: 'TECHNICIAN_SUCCESS',
    TECHNICIAN_FAILED: 'TECHNICIAN_FAILED'
}

export const GPSDEVICE = {
    GPSDEVICE_REQUEST: 'GPSDEVICE_REQUEST',
    GPSDEVICE_SUCCESS: 'GPSDEVICE_SUCCESS',
    GPSDEVICE_FAILED: 'GPSDEVICE_FAILED',

    /**Device Info */
    DEVICEINFO_REQUEST: 'DEVICEINFO_REQUEST',
    DEVICEINFO_SUCCESS: 'DEVICEINFO_SUCCESS',
    DEVICEINFO_FAILED: 'DEVICEINFO_FAILED',

    /**Vehicle List */
    GPSDEVICEVEHICLELIST_REQUEST: 'GPSDEVICEVEHICLELIST_REQUEST',
    GPSDEVICEVEHICLELIST_SUCCESS: 'GPSDEVICEVEHICLELIST_SUCCESS',
    GPSDEVICEVEHICLELIST_FAILED: 'GPSDEVICEVEHICLELIST_FAILED',

    /**Check Device Association */
    CHECK_DEVICE_ASSOCIATION_REQUEST: 'CHECK_DEVICE_ASSOCIATION_REQUEST',
    CHECK_DEVICE_ASSOCIATION_SUCCESS: 'CHECK_DEVICE_ASSOCIATION_SUCCESS',
    CHECK_DEVICE_ASSOCIATION_FAILED: 'CHECK_DEVICE_ASSOCIATION_FAILED',

    /**Add GPS Device Association */
    ADD_GPS_DEVICE_REQUEST: 'ADD_GPS_DEVICE_REQUEST',
    ADD_GPS_DEVICE_SUCCESS: 'ADD_GPS_DEVICE_SUCCESS',
    ADD_GPS_DEVICE_FAILED: 'ADD_GPS_DEVICE_FAILED',

    /** On Create Vehicle Type*/
    CREATE_VEHICLETYPE_REQUEST: 'CREATEVEHICLETYPE_REQUEST',
    CREATE_VEHICLETYPE_SUCCESS: 'CREATEVEHICLETYPE_SUCCESS',
    CREATE_VEHICLETYPE_FAILED: 'CREATEVEHICLETYPE_FAILED',

    /** On Create Vehicle */
    CREATEVEHICLE_REQUEST: 'CREATEVEHICLE_REQUEST',
    CREATEVEHICLE_SUCCESS: 'CREATEVEHICLE_SUCCESS',
    CREATEVEHICLE_FAILED: 'CREATEVEHICLE_FAILED'
}

export const SERVICE = {
    /**Create jobs action types */
    CREATEJOB_REQUEST: 'CREATEJOB_REQUEST',
    CREATEJOB_SUCCESS: 'CREATEJOB_SUCCESS',
    CREATEJOB_FAILED: 'CREATEJOB_FAILED',

    /**Company */
    SERVICE_COMPANY_REQUEST : 'SERVICE_COMPANY_REQUEST',
    SERVICE_COMPANY_SUCCESS : 'SERVICE_COMPANY_SUCCESS',
    SERVICE_COMPANY_FAILED : 'SERVICE_COMPANY_FAILED',

    /**Vehicle */
    SERVICE_VEHICLE_REQUEST : 'SERVICE_VEHICLE_REQUEST',
    SERVICE_VEHICLE_SUCCESS : 'SERVICE_VEHICLE_SUCCESS',
    SERVICE_VEHICLE_FAILED :  'SERVICE_VEHICLE_FAILED',

    /**Service Type */
    SERVICE_TYPE_REQUEST : 'SERVICE_TYPE_REQUEST',
    SERVICE_TYPE_SUCCESS : 'SERVICE_TYPE_SUCCESS',
    SERVICE_TYPE_FAILED :  'SERVICE_TYPE_FAITYPE',

    /**Technician */
    SERVICE_TECHNICIAN_REQUEST : 'SERVICE_TECHNICIAN_REQUEST',
    SERVICE_TECHNICIAN_SUCCESS : 'SERVICE_TECHNICIAN_SUCCESS',
    SERVICE_TECHNICIAN_FAILED :  'SERVICE_TECHNICIAN_FAILED',

    /**Service List */
    SERVICE_LIST_REQUEST : 'SERVICE_LIST_REQUEST',
    SERVICE_LIST_SUCCESS : 'SERVICE_LIST_SUCCESS',
    SERVICE_LIST_FAILED :  'SERVICE_LIST_FAILED',

    /**History */
    SERVICE_HISTORY_REQUEST : 'SERVICE_HISTORY_REQUEST',
    SERVICE_HISTORY_SUCCESS : 'SERVICE_HISTORY_SUCCESS',
    SERVICE_HISTORY_FAILED :  'SERVICE_HISTORY_FAILED',

    /**Assign Device and Sim */
    EXECUTE_SERVICE_REQUEST : 'EXECUTE_SERVICE_REQUEST',
    EXECUTE_SERVICE_SUCCESS : 'EXECUTE_SERVICE_SUCCESS',
    EXECUTE_SERVICE_FAILED  : 'EXECUTE_SERVICE_FAILED',
}

export const GPSDEVICETYPE = {
    GPSDEVICETYPE_REQUEST: 'GPSDEVICETYPE_REQUEST',
    GPSDEVICETYPE_SUCCESS: 'GPSDEVICETYPE_SUCCESS',
    GPSDEVICETYPE_FAILED: 'GPSDEVICETYPE_FAILED'
}

export const GPSDEVICECOUNTRYISD = {
    GPSDEVICECOUNTRYISD_REQUEST: 'GPSDEVICECOUNTRYISD_REQUEST',
    GPSDEVICECOUNTRYISD_SUCCESS: 'GPSDEVICECOUNTRYISD_SUCCESS',
    GPSDEVICECOUNTRYISD_FAILED: 'GPSDEVICECOUNTRYISD_FAILED'
}

export const GPSDEVICESEARCHCRITERIA = {
    GPSDEVICESEARCHCRITERIA_REQUEST: 'GPSDEVICESEARCHCRITERIA_REQUEST',
    GPSDEVICESEARCHCRITERIA_SUCCESS: 'GPSDEVICESEARCHCRITERIA_SUCCESS',
    GPSDEVICESEARCHCRITERIA_FAILED: 'GPSDEVICESEARCHCRITERIA_FAILED'
}

/**Job Schedule Info */
export const INSTALLJOBS = {
    INSTALLJOBS_REQUEST: 'INSTALLJOBS_REQUEST',
    INSTALLJOBS_SUCCESS: 'INSTALLJOBS_SUCCESS',
    INSTALLJOBS_FAILED: 'INSTALLJOBS_FAILED'
};
export const UNINSTALLJOBS = {
    UNINSTALLJOBS_REQUEST: 'UNINSTALLJOBS_REQUEST',
    UNINSTALLJOBS_SUCCESS: 'UNINSTALLJOBS_SUCCESS',
    UNINSTALLJOBS_FAILED: 'UNINSTALLJOBS_FAILED'
};
export const REPLACEJOBS = {
    REPLACEJOBS_REQUEST: 'REPLACEJOBS_REQUEST',
    REPLACEJOBS_SUCCESS: 'REPLACEJOBS_SUCCESS',
    REPLACEJOBS_FAILED: 'REPLACEJOBS_FAILED'
};
export const REPAIRJOBS = {
    REPAIRJOBS_REQUEST: 'REPAIRJOBS_REQUEST',
    REPAIRJOBS_SUCCESS: 'REPAIRJOBS_SUCCESS',
    REPAIRJOBS_FAILED: 'REPAIRJOBS_FAILED'
};

export const ADDJOBSERVICE = {

    ADDJOBCOMPANY_REQUEST: 'ADDJOBCOMPANY_REQUEST',
    ADDJOBCOMPANY_SUCCESS: 'ADDJOBCOMPANY_SUCCESS',
    ADDJOBCOMPANY_FAILED: 'ADDJOBCOMPANY_FAILED',

    ADDJOBSERVICETYPE_REQUEST: 'ADDJOBSERVICETYPE_REQUEST',
    ADDJOBSERVICETYPE_SUCCESS: 'ADDJOBSERVICETYPE_SUCCESS',
    ADDJOBSERVICETYPE_FAILED: 'ADDJOBSERVICETYPE_FAILED',

    ADDJOBTECHNICIAN_REQUEST: 'ADDJOBTECHNICIAN_REQUEST',
    ADDJOBTECHNICIAN_SUCCESS: 'ADDJOBTECHNICIAN_SUCCESS',
    ADDJOBTECHNICIAN_FAILED: 'ADDJOBTECHNICIAN_FAILED',
}

export const ADDJOBVEHICLE={
    ADDJOBVEHICLE_REQUEST: 'ADDJOBVEHICLE_REQUEST',
    ADDJOBVEHICLE_SUCCESS: 'ADDJOBVEHICLE_SUCCESS',
    ADDJOBVEHICLE_FAILED: ' ADDJOBVEHICLE_FAILED',

}

/**Sim Info */
export const SIM = {
    SIM_REQUEST: 'SIM_REQUEST',
    SIM_SUCCESS: 'SIM_SUCCESS',
    SIM_FAILED: 'SIM_FAILED'
};

/**Job Schema */
export const JOBLIST = {
    JOBLIST_REQUEST: 'JOBLIST_REQUEST',
    JOBLIST_SUCCESS: 'JOBLIST_SUCCESS',
    JOBLIST_FAILED: 'JOBLIST_FAILED'
};
export const CREATEJOB = {
    CREATEJOB_REQUEST: 'CREATEJOB_REQUEST',
    CREATEJOB_SUCCESS: 'CREATEJOB_SUCCESS',
    CREATEJOB_FAILED: 'CREATEJOB_FAILED'
};
export const JOBHISTORY = {
    JOBHISTORY_REQUEST: 'JOBHISTORY_REQUEST',
    JOBHISTORY_SUCCESS: 'JOBHISTORY_SUCCESS',
    JOBHISTORY_FAILED: 'JOBHISTORY_FAILED'
};