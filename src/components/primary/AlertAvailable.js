import {AlertRequestStore} from "../../store/AlertRequestStore.js";

const AlertAvailable = () =>{
    const {getAlerts} = AlertRequestStore();

    return(
        <div className="d-flex flex-shrink-1 flex-column justify-content-start align-items-center m-3 ">
            <h2 className="m-3 mb-4">Alert Available</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Important</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {getAlerts().map(alert=>
                        <tr key={alert.id}>
                            <th scope="row">{alert.id}</th>
                            <td><button className="nav-link">{alert.name}</button></td>
                            <td>{alert.description}</td>
                            <td>{alert.important}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AlertAvailable;