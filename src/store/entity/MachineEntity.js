class MachineEntity{
    constructor(hostname,os,snmp) {
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
        return "hostname : "+this.hostname+"||os : "+this.os+"||snmp : "+this.snmp;
    }
}
export default MachineEntity;