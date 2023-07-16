import React from "react";
import MachineEntityService from "../../services/MachineEntityService";
import {useDispatch} from "react-redux";
import {SetMachineEntities} from "../redux/action/MachineEntitiesAction";
import MachineEntityMapper from "../../services/MachineEntityMapper";
const ScanBtn = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        MachineEntityService.networkScan().then((response)=>{
            let newMachineEntities = MachineEntityMapper.mapJsonEntitiesToEntities(response.data);
            dispatch(SetMachineEntities(newMachineEntities));
        })
        .catch(Error=>{
            console.log(Error);
        });
    }
    return(
        <button onClick={handleClick}>scan network</button>
    )
}
export default ScanBtn;