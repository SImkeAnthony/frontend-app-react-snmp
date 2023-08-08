import {ProcessorRequestStore} from "../../store/ProcessorRequestStore.js";
export const ProcessorTable = () => {
    const {getProcessors} = ProcessorRequestStore();

    return(
        <div className="d-flex flex-shrink-1 flex-column flex-wrap justify-content-start align-items-center m-3">
            <h2 className="m-3 mb-4">Processor Description</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Core</th>
                        <th scope="col">VCore</th>
                        <th scope="col">Frequency</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {getProcessors().map(processorEntity=>
                        <tr key={processorEntity.id}>
                            <th scope="row">{processorEntity.id}</th>
                            <td><button className="nav-link">{processorEntity.reference}</button></td>
                            <td>{processorEntity.core}</td>
                            <td>{processorEntity.vCore}</td>
                            <td>{processorEntity.frequency}</td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}