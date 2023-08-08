import {Outlet} from "react-router-dom";
import {useState} from "react";
import {MachineRequestStore} from "../../store/MachineRequestStore.js";
const DeviceList=()=>{
    const [selectedButton, setSelectedButton] = useState(null);
    const {setSelectedMachineEntity,getMachineEntities}= MachineRequestStore();
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

        <div className="row m-0 p-0 m-0 p-0 list-device">
            <div className="text-center col-12 col-lg-3 d-flex flex-column justify-content-start align-content-center p-3 m-0 blue-background max-width">
                <button className="nav-link fs-4 dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#linkDevice" aria-expanded="true">Devices</button>
                <div className="collapse list-group list-group-flush overflow-y-auto mt-1 overflow-auto" id="linkDevice" style={{maxHeight:"calc(100vh - 150px)"}}>
                    <button className={generateButtonClass('reset')} onClick={handleSelect}>reset</button>
                    {getMachineEntities().map(machine=>
                        <button key={getMachineEntities().indexOf(machine)} className={generateButtonClass(machine.hostname)} onClick={handleSelect}>{machine.hostname}</button>
                    )}
                </div>
            </div>
            <div className="col-12 col-lg-8 p-0 flex-fill overflow-auto" style={{maxHeight:"calc(100vh - 50px)"}}>
                <Outlet/>
            </div>

        </div>
    );
}
export default DeviceList;