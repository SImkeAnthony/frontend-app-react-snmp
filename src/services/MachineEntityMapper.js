import MachineEntity from "../data/MachineEntity";
import Interface from "../data/Interface";
import Processor from "../data/Processor";
import PStorage from "../data/PStorage";
import VStorage from "../data/VStorage";
import Service from "../data/Service";
class MachineEntityMapper{
    static mapJsonEntitiesToEntities(json){
        let machineEntities=[];
        for(let i=0;i<json.length;i++){
            let machine = new MachineEntity(json[i].hostname,json[i].os,json[i].snmp.toString());
            //process interfaces
            let interfaces = json[i].interfaces;
            interfaces.map(intEntity=>{
                let interfaceEntity = new Interface(intEntity.description,intEntity.macAddress,intEntity.ipAddress);
                machine.interfaces.push(interfaceEntity);
                return interfaceEntity;
            })
            //process processors
            let processors = json[i].processors;
            processors.map(procEntity=>{
                let processor = new Processor(procEntity.reference,procEntity.core,procEntity.vcore,procEntity.frequency);
                machine.processors.push(processor);
                return processor;
            })
            //process persistent storages
            let pStorages = json[i].persistentStorages;
            pStorages.map(pStorageEntity=>{
                let pStorage = new PStorage(pStorageEntity.reference,pStorageEntity.available,pStorageEntity.used);
                machine.pStorages.push(pStorage);
                return pStorage;
            })
            //process volatiles storages
            let vStorages = json[i].volatileStorages;
            vStorages.map(vStorageEntity=>{
                let vStorage = new VStorage(vStorageEntity.reference,vStorageEntity.available,vStorageEntity.frequency,vStorageEntity.latency);
                machine.vStorages.push(vStorage);
                return vStorage;
            })
            //process services
            let services = json[i].services;
            services.map(serviceEntity=>{
                let service = new Service(serviceEntity.name,serviceEntity.description,serviceEntity.port);
                machine.services.push(service);
                return service;
            })
            machineEntities.push(machine);
        }
        return machineEntities;
    }
};
export  default MachineEntityMapper;