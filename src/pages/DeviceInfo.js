import {useSelector} from "react-redux";
import IdentityCard from "../components/primary/IdentityCard.js";
import MachineEntityMapper from "../store/MachineEntityMapper.js";

const DeviceInfo = ()=>{
    const machineEntities = MachineEntityMapper.mapJsonEntitiesToEntities(useSelector(state => state.machineEntityReducer.machineEntities));
    return(
        <div className="mb-5 d-flex flex-row flex-wrap justify-content-around align-content-around p-0 m-2">
                {machineEntities.map(machine=>
                    <IdentityCard key={machine.id} id={machine.id} hostname={machine.hostname} os={machine.os} snmp={machine.snmp.toString()}/>
                )}
        </div>
    )
};

export default DeviceInfo;