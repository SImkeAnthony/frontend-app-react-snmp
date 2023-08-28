import axios from "axios";
import {configDev} from "../properties/config.dev.js";
import {configProd} from "../properties/config.prod.js";

const config = process.env.REACT_APP_ENV === 'dev' ? configDev : configProd;
export const MACHINE_CALL_START = config.apiBaseUri;
export const RESCAN = config.apiBaseUri+"scan";

class MachineEntityService {
    static getMachineEntities(){
        return axios.get(MACHINE_CALL_START);
    }
    static networkScan(){
        return axios.get(RESCAN);
    }
}
export default MachineEntityService;
