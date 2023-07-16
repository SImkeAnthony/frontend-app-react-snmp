import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
function DeviceList(){
    const machineEntities = useSelector(state => state.machineEntitiesReducer.machineEntities);
    return(
        <div className="text-center">
            <div className="d-flex flex-row justify-content-sm-start flex-wrap text-center m-0">
                <div className="p-5 d-flex flex-column justify-content-start align-items-center">
                    <button className="nav-link fs-4 dropdown-toggle" data-bs-toggle="collapse"data-bs-target="#linkDevice" aria-expanded="true">Devices</button>
                    <div className="collapse list-group list-group-flush overflow-y-auto mt-1" id="linkDevice">
                        {machineEntities.map(machine=>
                            <button className="list-group-item list-group-item-action fs-5">{machine.hostname}</button>
                        )}
                    </div>
                </div>
                <div className="text-start pt-5 ms-2">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
export default DeviceList;