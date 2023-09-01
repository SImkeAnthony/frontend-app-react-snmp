import axios from "axios";
import {configDev} from "../properties/config.dev.js";
import {configProd} from "../properties/config.prod.js";

const config = process.env.REACT_APP_ENV === 'dev' ? configDev : configProd;
export const MACHINE_CALL_START = config.apiBaseUri;
export const RESCAN = config.apiBaseUri+"/scan";

class MachineEntityService {
    static getMachineEntities(){
        return axios.get(MACHINE_CALL_START, (req,res)=>{
            req.withCredentials("true");
            res.headers("Access-Control-Allow-Origin", "*",);
        });
    }
    static networkScan(){
        return axios.get(RESCAN,(req,res)=>{
            req.withCredentials("true");
            res.headers("Access-Control-Allow-Origin", "*",);
        });
    }
}
export default MachineEntityService;
