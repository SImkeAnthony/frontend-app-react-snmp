import {ProcessorTable} from "../components/primary/ProcessorTable";
import {ProcessorStats} from "../components/primary/ProcessorStats";
import {PStorageTable} from "../components/primary/PStorageTable";
import {PStorageStats} from "../components/primary/PStorageStats";
import {VStorageTable} from "../components/primary/VStorageTable";
import {VStorageStats} from "../components/primary/VStorageStats";

const Inventory = ()=>{
    return(
        <div className="mb-5 d-flex flex-column justify-content-center align-content-center">
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between no-background">
                <ProcessorTable/>
                <ProcessorStats/>
            </div>
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between no-background">
                <PStorageTable/>
                <PStorageStats/>
            </div>
            <div className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-between no-background">
                <VStorageTable/>
                <VStorageStats/>
            </div>
        </div>
    )
};
export default Inventory;