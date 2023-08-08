import MachineEntityMapper from "./MachineEntityMapper.js";
import {SelectMachineEntity, SetMachineEntities} from "./redux/action/MachineEntityAction.js";
import {useDispatch, useSelector} from "react-redux";

export const MachineRequestStore = ()=>{
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const dispatch = useDispatch();
    const getMachineEntities = () => {
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities);
    };

    const setMachineEntities = (entities) => {
        dispatch(SetMachineEntities(entities));
        return true;
    };

    const getSelectedMachineEntity = () => {
        return selectedMachineEntity;
    };

    const setSelectedMachineEntity = (entity) => {
        dispatch(SelectMachineEntity(entity));
        return true;
    };

    const getMachineEntityByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find((machine) => machine.hostname === hostname);
    }

    return{
        machineEntities,
        getMachineEntities,
        setMachineEntities,
        getSelectedMachineEntity,
        setSelectedMachineEntity,
        getMachineEntityByHostname
    }
}