import React from "react";
import MachineEntityService from "../../services/MachineEntityService";
import {useDispatch} from "react-redux";
import {SetMachineEntities} from "../redux/action/MachineEntitiesAction";
const ScanBtn = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        MachineEntityService.networkScan().then((response)=>{
            dispatch(SetMachineEntities(response.data));
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