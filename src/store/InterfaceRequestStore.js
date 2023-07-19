import {useDispatch, useSelector} from "react-redux";
import MachineEntityMapper from "./MachineEntityMapper";
import {SelectInterfaceEntity} from "./redux/action/InterfaceEntityAction";
export const InterfaceRequestStore = () => {
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const selectedInterface = useSelector(state => state.interfaceEntityReducer.selectedInterfaceEntity);
    const dispatch = useDispatch();

    const getInterfaces = () => {
        if(selectedMachineEntity==="" || selectedMachineEntity==="reset"){
            return getAllInterfaces();
        }else{
            return getInterfacesBySelectedMachineEntity();
        }
    }
    const getInterfacesBySelectedMachineEntity = () =>{
        const machineEntity = MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity);
        return machineEntity.interfaces;
    }
    const getAllInterfaces = () =>{
        const allInterfaces = [];
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            allInterfaces.push(...machineEntity.interfaces);
            return machineEntity.interfaces;
        })
        return allInterfaces;
    }
    const getInterfacesByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=> machineEntity.hostname===hostname).interfaces;
    }

    const getSelectedInterfaceEntity = () =>{
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            return  machineEntity.interfaces.find((interfaceEntity)=> interfaceEntity.macAddress===selectedInterface);
        })
    }
    const setSelectedInterfaceEntity = (selectedInterface) =>{
        dispatch(SelectInterfaceEntity(selectedInterface));
        return true;
    }
    return{
        getInterfaces,
        getInterfacesBySelectedMachineEntity,
        getInterfacesByHostname,
        getSelectedInterfaceEntity,
        setSelectedInterfaceEntity
    }
}