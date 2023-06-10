import MachineEntityService from "../services/MachineEntityService";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetMachineEntities} from "../components/redux/action/MachineEntitiesAction";
import MachineEntityMapper from "../services/MachineEntityMapper";
const MachineEntityData = () => {

    const dispatch = useDispatch();
    //get state
    /*
     * first : name of reducer configured in store.js
     * second : name of variable use in the reducer (see initialState in the reducer file)
     */
    const machineEntities = useSelector(state => state.machineEntitiesReducer.machineEntities);

    useEffect(()=>{
        //get data from Api Rest
        MachineEntityService.getMachineEntities().then((response)=>{
            try{
                //perform redux action here
                let newMachineEntities = MachineEntityMapper.mapJsonEntitiesToEntities(response.data);
                dispatch(SetMachineEntities(newMachineEntities));
            }catch (Error){
                console.log("set machine entities error : "+Error);
            }
        }).catch((Error)=>{
                console.log("call api error : "+Error);
            });
    },[dispatch]);

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
                    machineEntities.map(
                        machineEntity =>
                            <tr>
                                <td>{machineEntity.macAddress}</td>
                                <td>{machineEntity.ipAddress}</td>
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