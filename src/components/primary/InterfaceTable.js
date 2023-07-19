import {InterfaceRequestStore} from "../../store/InterfaceRequestStore";

const InterfaceTable = () => {
    const {getInterfaces} = InterfaceRequestStore();

    return(
        <div className="table-responsive d-flex flex-grow-1 flex-column justify-content-start align-items-center no-background m-3 ">
            <h2 className="m-3 mb-4">Interface Description</h2>
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
                    <tr key={getInterfaces().findIndex(entity=>entity.macAddress===interfaceEntity.macAddress)}>
                        <th scope="row">{getInterfaces().findIndex(entity=>entity.macAddress===interfaceEntity.macAddress)}</th>
                        <td>{interfaceEntity.description}</td>
                        <td><button className="nav-link">{interfaceEntity.macAddress}</button></td>
                        <td>{interfaceEntity.ipAddress}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default InterfaceTable;
