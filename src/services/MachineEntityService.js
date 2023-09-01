import axios from "axios";
import {configDev} from "../properties/config.dev.js";
import {configProd} from "../properties/config.prod.js";

const config = process.env.REACT_APP_ENV === 'dev' ? configDev : configProd;
export const MACHINE_CALL_START = config.apiBaseUri;
export const RESCAN = config.apiBaseUri+"/scan";

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
}

class MachineEntityService {
    static getMachineEntities(){
        return axios.get(MACHINE_CALL_START, {headers});
    }
    static networkScan(){
        return axios.get(RESCAN,{headers});
    }
}
export default MachineEntityService;
