import {ServiceStats} from "../components/primary/ServiceStats.js";
import ServiceList from "../components/primary/ServiceList.js";


const Service = ()=>{

    return(
        <div className="d-flex flex-row flex-wrap justify-content-around align-content-between mb-5 mt-2">
            <ServiceList/>
            <ServiceStats/>
        </div>
    )
};

export default Service;