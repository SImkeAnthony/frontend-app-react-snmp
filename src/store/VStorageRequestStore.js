import {useDispatch, useSelector} from "react-redux";
import {SelectVStorageEntity} from "./redux/action/VStorageEntityAction.js";
import MachineEntityMapper from "./MachineEntityMapper.js";

export  const  VStorageRequestStore = () => {
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const selectedVStorage = useSelector(state => state.vStorageEntityReducer.selectedVStorageEntity);
    const dispatch = useDispatch();

    const getVStorages = () => {
        if(selectedMachineEntity==="" || selectedMachineEntity==="reset"){
            return getAllVStorages();
        }else{
            return getVStoragesBySelectedMachine();
        }
    }

    const getVStoragesBySelectedMachine = () => {
        const machineEntity = MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity);
        return machineEntity.vStorages;
    }

    const getAllVStorages = () => {
        const allVStorages = [];
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            allVStorages.push(...machineEntity.vStorages);
            return machineEntity.vStorages;
        })
        return allVStorages;
    }

    const getVStorageByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===hostname).vStorages;
    }

    const getSelectedVStorageEntity = () =>{
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            return machineEntity.vStorages.find(vStorageEntity=>vStorageEntity.reference===selectedVStorage);
        })
    }
    const setSelectedVStorageEntity = (selectedVStorage) =>{
        dispatch(SelectVStorageEntity(selectedVStorage));
        return true;
    }
    return{
        getVStorages,
        getVStoragesBySelectedMachine,
        getAllVStorages,
        getVStorageByHostname,
        getSelectedVStorageEntity,
        setSelectedVStorageEntity
    }
}