import AlertLog from "../components/primary/AlertLog.js";
import AlertAvailable from "../components/primary/AlertAvailable.js";
import AlertForm from "../components/primary/AlertForm.js";

const Alert = ()=>{
    return(
        <div className="d-flex flex-row flex-wrap justify-content-around align-content-between mb-5 mt-2">
            <div className="d-flex flex-column flex-wrap justify-content-around align-content-between mb-5 mt-2">
                <AlertLog/>
                <AlertAvailable/>
            </div>
            <AlertForm/>
        </div>
    )
};
export default Alert;