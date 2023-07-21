import MachineEntity from "./entity/MachineEntity";
import Interface from "./entity/Interface";
import Processor from "./entity/Processor";
import PStorage from "./entity/PStorage";
import VStorage from "./entity/VStorage";
import Service from "./entity/Service";
class MachineEntityMapper{
    static mapJsonEntitiesToEntities(json){
        let machineEntities=[];
        for(let i=0;i<json.length;i++){
            let machine = new MachineEntity(json[i].id,json[i].hostname,json[i].os,json[i].snmp.toString());
            //process interfaces
            let interfaces = json[i].interfaces;
            interfaces.map(intEntity=>{
                let interfaceEntity = new Interface(intEntity.id,intEntity.description,intEntity.macAddress,intEntity.ipAddress);
                machine.interfaces.push(interfaceEntity);
                return interfaceEntity;
            })
            //process processors
            let processors = json[i].processors;
            processors.map(procEntity=>{
                let processor = new Processor(procEntity.id,procEntity.reference,procEntity.core,procEntity.vcore,procEntity.frequency);
                machine.processors.push(processor);
                return processor;
            })
            //process persistent storages
            let pStorages = json[i].persistentStorages;
            pStorages.map(pStorageEntity=>{
                let pStorage = new PStorage(pStorageEntity.id,pStorageEntity.reference,pStorageEntity.available,pStorageEntity.used);
                machine.pStorages.push(pStorage);
                return pStorage;
            })
            //process volatiles storages
            let vStorages = json[i].volatileStorages;
            vStorages.map(vStorageEntity=>{
                let vStorage = new VStorage(vStorageEntity.id,vStorageEntity.reference,vStorageEntity.available,vStorageEntity.frequency,vStorageEntity.latency);
                machine.vStorages.push(vStorage);
                return vStorage;
            })
            //process services
            let services = json[i].services;
            services.map(serviceEntity=>{
                let service = new Service(serviceEntity.id,serviceEntity.name,serviceEntity.description,serviceEntity.port);
                machine.services.push(service);
                return service;
            })
            machineEntities.push(machine);
        }
        return machineEntities;
    }
};
export  default MachineEntityMapper;