import React from "react";

const ScanBtn = (props)=>{
    const handleClick = ()=>{
        console.log("click");
    }
    return(
        <button onClick={handleClick}>scan network</button>
    )
}
export default ScanBtn;