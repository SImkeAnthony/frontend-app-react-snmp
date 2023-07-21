import {VStorageRequestStore} from "../../store/VStorageRequestStore";


export const VStorageTable = () => {
    const {getVStorages} = VStorageRequestStore();

    return(
        <div className="d-flex flex-shrink-1 flex-column justify-content-start align-items-center no-background m-3 ">
            <h2 className="m-3 mb-4">Volatile Storage Description</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Available</th>
                        <th scope="col">Frequency</th>
                        <th scope="col">Latency</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {getVStorages().map(vStorageEntity=>
                        <tr key={vStorageEntity.id}>
                            <th scope="row">{vStorageEntity.id}</th>
                            <td><button className="nav-link">{vStorageEntity.reference}</button></td>
                            <td>{vStorageEntity.available}</td>
                            <td>{vStorageEntity.frequency}</td>
                            <td>{vStorageEntity.latency}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}