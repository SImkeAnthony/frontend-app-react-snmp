import {ProcessorTable} from "../components/primary/ProcessorTable.js";
import {ProcessorStats} from "../components/primary/ProcessorStats.js";
import {PStorageTable} from "../components/primary/PStorageTable.js";
import {PStorageStats} from "../components/primary/PStorageStats.js";
import {VStorageTable} from "../components/primary/VStorageTable.js";
import {VStorageStats} from "../components/primary/VStorageStats.js";

const Inventory = ()=>{
    return(
        <div className="mb-5 d-flex flex-column justify-content-center align-content-center">
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between">
                <ProcessorTable/>
                <ProcessorStats/>
            </div>
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between">
                <PStorageTable/>
                <PStorageStats/>
            </div>
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between">
                <VStorageTable/>
                <VStorageStats/>
            </div>
        </div>
    )
};
export default Inventory;