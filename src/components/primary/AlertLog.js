
const AlertLog = () => {

    return(
        <div className="d-flex flex-shrink-1 flex-column justify-content-start align-items-center m-3 ">
            <h2 className="m-3 mb-4">Alert Log</h2>
            <div className="container-fluid table-responsive overflow-auto" style={{maxHeight:"50vh"}}>
                <table className="table m-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Related</th>
                        <th scope="col">Date</th>
                        <th scope="col">Important</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">

                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default AlertLog;