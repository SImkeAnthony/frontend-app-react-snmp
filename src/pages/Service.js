import {ServiceStats} from "../components/primary/ServiceStats";
import ServiceList from "../components/primary/ServiceList";


const Service = ()=>{

    return(
        <div className="d-flex flex-row flex-wrap justify-content-around align-content-between mb-5 mt-2">
            <ServiceList/>
            <ServiceStats/>
        </div>
    )
};

export default Service;