import React from "react";
import MachineEntityService from "../../services/MachineEntityService";
const ScanBtn = (props)=>{
    const handleClick = ()=>{
        MachineEntityService.networkScan().then((response)=>{
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