import {Outlet} from "react-router-dom";
import {useState} from "react";
import {MachineRequestStore} from "../../store/MachineRequestStore";
const DeviceList=()=>{
    const [selectedButton, setSelectedButton] = useState(null);
    const {setSelectedMachineEntity,getMachineEntities}= MachineRequestStore();
    //dispatch is used to perform redux action (necessary)
    const generateButtonClass = (name) => {
        if (name === selectedButton) {
            return 'list-group-item list-group-item-action fs-4 btn-selected';
        }
        return 'list-group-item list-group-item-action fs-4';
    };
    const handleSelect = (event) => {
        try {
            setSelectedMachineEntity(event.target.textContent);
            setSelectedButton(event.target.textContent);
        } catch (Error) {
            console.log("Set selected machine entity error : " + Error);
        }
    };

    return(

        <div className="text-center row m-0 container-fluid p-0">
            <div className="d-flex flex-row flex-wrap justify-content-start text-center m-0 p-0">
                <div className="d-flex flex-column justify-content-start align-items-center p-3 m-0 col-12 col-md-auto col-lg-auto">
                    <button className="nav-link fs-4 dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#linkDevice" aria-expanded="true">Devices</button>
                    <div className="collapse list-group list-group-flush overflow-y-auto mt-1" id="linkDevice">
                        <button className={generateButtonClass('reset')} onClick={handleSelect}>reset</button>
                        {getMachineEntities().map(machine=>
                            <button key={getMachineEntities().indexOf(machine)} className={generateButtonClass(machine.hostname)} onClick={handleSelect}>{machine.hostname}</button>
                        )}
                    </div>
                </div>
                <div className="p-0 col-12 col-md-5 col-lg-auto flex-grow-1">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
//col-sm-12 col-md-4 col-lg-3 col-xl-2
//col-sm-12 col-md-7 col-lg-8 col-xl-9
export default DeviceList;