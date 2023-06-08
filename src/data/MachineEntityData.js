import axios from "axios";
import MachineEntityService from "../services/MachineEntityService";
import React from "react";

class MachineEntityData extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            machineEntities:[]
        }
    }
    componentDidMount() {
        MachineEntityService.getMachineEntities().then((response)=>{
            this.setState({machineEntities:response.data});
            console.log(this.state.machineEntities);
        })
        .catch(Error=>{
            console.log(Error);
        });
    }
    render() {
        return (
            <div>
                <h2>Machine entities table</h2>
                <table className="table table_striped">
                    <thead>
                        <tr>
                            <td>Mac Address</td>
                            <td>Ip Address</td>
                            <td>Hostname</td>
                            <td>Os</td>
                            <td>Snmp</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.machineEntities.map(
                            machineEntity=>
                                <tr>
                                    <td>{machineEntity.macAddr}</td>
                                    <td>{machineEntity.ipAddr}</td>
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
    }
}

export default MachineEntityData;