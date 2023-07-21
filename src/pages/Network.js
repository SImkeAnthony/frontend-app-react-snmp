import InterfaceTable from "../components/primary/InterfaceTable";
import InterfaceStats from "../components/primary/InterfaceStats";
const Network = () => {
    return(
        <div className="mt-4 mb-5 d-flex flex-sm-column flex-xl-row flex-wrap justify-content-around align-content-center p-0">
            <InterfaceTable />
            <InterfaceStats/>
        </div>
    )
};

export default Network;