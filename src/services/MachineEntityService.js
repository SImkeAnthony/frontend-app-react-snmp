import axios from "axios";

export const MACHINE_CALL_START = 'http://localhost:8080';
export const RESCAN = "http://localhost:8080/scan"

class MachineEntityService {
    static getMachineEntities(){
        return axios.get(MACHINE_CALL_START);
    }
    static networkScan(){
        return axios.get(RESCAN);
    }
}
export default MachineEntityService;
