import {useDispatch, useSelector} from "react-redux";
import MachineEntityMapper from "./MachineEntityMapper";
import {SelectProcessorEntity} from "./redux/action/ProcessorEntityAction";

export const ServiceRequestStore = () => {
    const machineEntities = useSelector(state => state.machineEntityReducer.machineEntities);
    const selectedMachineEntity = useSelector(state => state.machineEntityReducer.selectedMachineEntity);
    const selectedServiceEntity = useSelector(state => state.serviceEntityReducer.selectedServiceEntity);
    const dispatch = useDispatch();

    const getServices = () => {
        if(selectedMachineEntity==="" || selectedMachineEntity==="reset"){
            return getAllServices();
        }else{
            return getServicesBySelectedMachine();
        }
    }

    const getServicesBySelectedMachine = () => {
        const machineEntity = MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===selectedMachineEntity);
        return machineEntity.services;
    }

    const getAllServices = () => {
        const allProcessors=[];
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            allProcessors.push(...machineEntity.services);
            return machineEntity.services;
        })
        return allProcessors;
    }

    const getServiceByHostname = (hostname) =>{
        return MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).find(machineEntity=>machineEntity.hostname===hostname).services;
    }

    const getSelectedServiceEntity = () =>{
        MachineEntityMapper.mapJsonEntitiesToEntities(machineEntities).map(machineEntity=>{
            return machineEntity.processors.find(processorEntity=>processorEntity.reference===selectedServiceEntity);
        })
    }
    const setSelectedServiceEntity = (selectedProcessor) =>{
        dispatch(SelectProcessorEntity(selectedProcessor));
        return true;
    }
    return{
        getServices,
        getServiceByHostname,
        getAllServices,
        getServicesBySelectedMachine,
        getSelectedServiceEntity,
        setSelectedServiceEntity
    }
}