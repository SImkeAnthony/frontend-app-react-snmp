import {useSelector} from "react-redux";
import IdentityCard from "../components/primary/IdentityCard";
import MachineEntityMapper from "../store/MachineEntityMapper";

const DeviceInfo = ()=>{
    const machineEntities = MachineEntityMapper.mapJsonEntitiesToEntities(useSelector(state => state.machineEntityReducer.machineEntities));
    return(
        <div className="mt-4 d-flex flex-row flex-wrap justify-content-around align-content-sm-around">
            {machineEntities.map(machine=>
                <IdentityCard key={machineEntities.indexOf(machine)} hostname={machine.hostname} os={machine.os} snmp={machine.snmp.toString()}/>
            )}
        </div>
    )
};

export default DeviceInfo;