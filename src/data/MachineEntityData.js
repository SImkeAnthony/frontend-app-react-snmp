import React from "react";
import {useSelector} from "react-redux";

//Pay attention delete this const that should be never used !!
const MachineEntityData = () => {

    const machineEntities = useSelector(state => state.machineEntitiesReducer.machineEntities);

    return (
        <div>
            <h2>Machine entities table</h2>
            <table className="table table_striped">
                <thead>
                <tr>
                    <td>Hostname</td>
                    <td>Os</td>
                    <td>Snmp</td>
                </tr>
                </thead>
                <tbody>
                {
                    machineEntities.map(
                        machineEntity =>
                            <tr>
                                <td>{machineEntity.hostname}</td>
                                <td>{machineEntity.os}</td>
                                <td>{machineEntity.snmp.toString()}</td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};


export default MachineEntityData;