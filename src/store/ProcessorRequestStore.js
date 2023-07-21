import {useDispatch, useSelector} from "react-redux";
import {SelectProcessorEntity} from "./redux/action/ProcessorEntityAction";
import MachineEntityMapper from "./MachineEntityMapper";

export const ProcessorRequestStore = () => {
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const selectedProcessor = useSelector(state => state.processorEntityReducer.selectedProcessorEntity);
    const dispatch = useDispatch();

    const getProcessors = () => {
        if(selectedMachineEntity==="" || selectedMachineEntity==="reset"){
            return getAllProcessors();
        }else{
            return getProcessorsBySelectedMachine();
        }
    }

    const getProcessorsBySelectedMachine = () => {
        const machineEntity = MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity);
        return machineEntity.processors;
    }

    const getAllProcessors = () => {
        const allProcessors=[];
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            allProcessors.push(...machineEntity.processors);
            return machineEntity.processors;
        })
        return allProcessors;
    }

    const getProcessorByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity).processors;
    }

    const getSelectedProcessorEntity = () =>{
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            return machineEntity.processors.find(processorEntity=>processorEntity.reference===selectedProcessor);
        })
    }
    const setSelectedProcessorEntity = (selectedProcessor) =>{
        dispatch(SelectProcessorEntity(selectedProcessor));
        return true;
    }
    return{
        getProcessors,
        getProcessorsBySelectedMachine,
        getAllProcessors,
        getProcessorByHostname,
        getSelectedProcessorEntity,
        setSelectedProcessorEntity
    }

}