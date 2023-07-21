import {useDispatch, useSelector} from "react-redux";
import {SelectPStorageEntity} from "./redux/action/PStorageEntityAction";
import MachineEntityMapper from "./MachineEntityMapper";

export const PStorageRequestStore = () => {
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const selectedPStorage = useSelector(state => state.pStorageEntityReducer.selectedPStorageEntity);
    const dispatch = useDispatch();

    const getPStorages = () => {
        if(selectedMachineEntity==="" || selectedMachineEntity==="reset"){
            return getAllPStorages();
        }else{
            return  getPStoragesBySelectedMachine();
        }
    }

    const getPStoragesBySelectedMachine = () => {
        const machineEntity = MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity);
        return machineEntity.pStorages;
    }

    const getAllPStorages = () => {
        const allPStorages = [];
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            allPStorages.push(...machineEntity.pStorages);
            return machineEntity.pStorages;
        })
        return allPStorages;
    }

    const getPStorageByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===hostname).pStorages;
    }

    const getSelectedPStorageEntity = () =>{
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            return machineEntity.pStorages.find(pStorageEntity=> pStorageEntity.reference===selectedPStorage);
        })
    }
    const setSelectedPStorageEntity = (selectedPStorage) =>{
        dispatch(SelectPStorageEntity(selectedPStorage));
        return true;
    }
    return{
        getPStorages,
        getPStoragesBySelectedMachine,
        getAllPStorages,
        getPStorageByHostname,
        getSelectedPStorageEntity,
        setSelectedPStorageEntity
    }
}