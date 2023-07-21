class MachineEntity{
    constructor(id,hostname,os,snmp) {
        this.id = id;
        this.hostname = hostname;
        this.os = os;
        this.snmp = snmp;
        this.interfaces = [];
        this.processors = [];
        this.pStorages = [];
        this.vStorages = [];
        this.services = [];
    }
    display(){
        return "id : "+this.id+"hostname : "+this.hostname+"||os : "+this.os+"||snmp : "+this.snmp;
    }
}
export default MachineEntity;