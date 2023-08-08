import React from "react";
import MachineEntityService from "../../services/MachineEntityService.js";
import {useDispatch} from "react-redux";
import {SetMachineEntities} from "../../store/redux/action/MachineEntityAction.js";
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