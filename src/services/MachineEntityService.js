import axios from "axios";

const MACHINE_CALL_START = 'http://localhost:8080';

class MachineEntityService {
    call(){
        return axios.get(MACHINE_CALL_START);
    }
}

export default new MachineEntityService();
