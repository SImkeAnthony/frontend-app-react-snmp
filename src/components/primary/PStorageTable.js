import {PStorageRequestStore} from "../../store/PStorageRequestStore.js";


export const PStorageTable = () => {
    const {getPStorages} = PStorageRequestStore();

    return(
        <div className="d-flex flex-shrink-1 flex-column justify-content-start align-items-center m-3 ">
            <h2 className="m-3 mb-4">Persistent Storage Description</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Available</th>
                        <th scope="col">used</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {getPStorages().map(pStorageEntity=>
                        <tr key={pStorageEntity.id}>
                            <th scope="row">{pStorageEntity.id}</th>
                            <td><button className="nav-link">{pStorageEntity.reference}</button></td>
                            <td>{pStorageEntity.available}</td>
                            <td>{pStorageEntity.used}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}