import {InterfaceRequestStore} from "../../store/InterfaceRequestStore";

const InterfaceTable = () => {
    const {getInterfaces} = InterfaceRequestStore();

    return(
        <div className="d-flex flex-shrink-1 flex-column justify-content-start align-items-center m-3 ">
            <h2 className="m-3 mb-4">Interface Description</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Mac Address</th>
                        <th scope="col">Ip Address</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {getInterfaces().map(interfaceEntity=>
                        <tr key={interfaceEntity.id}>
                            <th scope="row">{interfaceEntity.id}</th>
                            <td>{interfaceEntity.description}</td>
                            <td><button className="nav-link">{interfaceEntity.macAddress}</button></td>
                            <td>{interfaceEntity.ipAddress}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default InterfaceTable;
