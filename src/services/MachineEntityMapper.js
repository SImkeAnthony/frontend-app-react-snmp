import MachineEntity from "../data/MachineEntity";
class MachineEntityMapper{
    static mapJsonEntitiesToEntities(json){
        let machineEntities=[];
        json.map(entity=>{
            let machine = new MachineEntity(entity.hostname,entity.os,entity.snmp);
            machineEntities.push(machine);
        });
        return machineEntities;
    }
};
export  default MachineEntityMapper;