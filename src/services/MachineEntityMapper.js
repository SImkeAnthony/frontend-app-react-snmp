import MachineEntity from "../data/MachineEntity";
import Interface from "../data/Interface";
import Processor from "../data/Processor";
import PStorage from "../data/PStorage";
import VStorage from "../data/VStorage";
import Service from "../data/Service";
class MachineEntityMapper{
    static mapJsonEntitiesToEntities(json){
        let machineEntities=[];
        json.map(entity=>{
            let machine = new MachineEntity(entity.hostname,entity.os,entity.snmp);
            //process interfaces
            let interfaces = entity.interfaces;
            interfaces.map(intEntity=>{
                let interfaceEntity = new Interface(intEntity.description,intEntity.macAddress,intEntity.ipAddress);
                machine.interfaces.push(interfaceEntity);
                return interfaceEntity;
            })
            //process processors
            let processors = entity.processors;
            processors.map(procEntity=>{
                let processor = new Processor(procEntity.reference,procEntity.core,procEntity.vcore,procEntity.frequency);
                machine.processors.push(processor);
                return processor;
            })
            //process persistent storages
            let pStorages = entity.persistentStorages;
            pStorages.map(pStorageEntity=>{
                let pStorage = new PStorage(pStorageEntity.reference,pStorageEntity.available,pStorageEntity.used);
                machine.pStorages.push(pStorage);
                return pStorage;
            })
            //process volatiles storages
            let vStorages = entity.volatileStorages;
            vStorages.map(vStorageEntity=>{
                let vStorage = new VStorage(vStorageEntity.reference,vStorageEntity.available,vStorageEntity.frequency,vStorageEntity.latency);
                machine.vStorages.push(vStorage);
                return vStorage;
            })
            //process services
            let services = entity.services;
            services.map(serviceEntity=>{
                let service = new Service(serviceEntity.name,serviceEntity.description,serviceEntity.port);
                machine.services.push(service);
                return service;
            })
            machineEntities.push(machine);
            return machineEntities;
        });
        return machineEntities;
    }
};
export  default MachineEntityMapper;