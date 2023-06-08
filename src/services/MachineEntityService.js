import axios from "axios";

const MACHINE_CALL_START = 'http://localhost:8080';
const RESCAN = "http://localhost:8080/scan"

class MachineEntityService {
    getMachineEntities(){
        return axios.get(MACHINE_CALL_START);
    }

    networkScan(){
        return axios.get(RESCAN);
    }
}

export default new MachineEntityService();
