import ServiceCard from "./ServiceCard";
import {ServiceRequestStore} from "../../store/ServiceRequestStore";

const ServiceList = () => {
    const {getServices} = ServiceRequestStore();
    return(
        <div className="d-flex flex-column flex-wrap justify-content-stretch align-items-center m-2 col-lg-5">
            <h2 className="mb-4">Service List</h2>
            <div className="d-flex flex-row flex-wrap justify-content-around align-items-start overflow-auto" style={{maxHeight:"80vh"}}>
                {getServices().map(serviceEntity=>
                    <ServiceCard key={serviceEntity.id} name={serviceEntity.name} description={serviceEntity.description} port={serviceEntity.port}/>
                )}
            </div>
        </div>
    )
}
export default ServiceList;