import NetworkStats from "../components/primary/NetworkStats";
import NetworkTrafficStats from "../components/primary/NetworkTrafficStats";
import MachineStats from "../components/primary/MachineStats";


const Dashboard = ()=>{
    return(
        <div className="d-flex flex-row flex-wrap justify-content-around align-content-between mb-5 mt-2">
            <div className="d-flex flex-column flex-wrap justify-content-around align-content-between mb-5 mt-2">
                <NetworkStats/>
                <NetworkTrafficStats/>
            </div>
            <MachineStats/>
        </div>
    )
};
export default Dashboard;
