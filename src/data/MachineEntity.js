class MachineEntity{
    constructor(macAddr,ipAddr,hostname,os,snmp) {
        this.macAddress = macAddr;
        this.ipAddress = ipAddr;
        this.hostname = hostname;
        this.os = os;
        this.snmp = snmp;
    }
    display(){
        return "macAddr : "+this.macAddress+"||ipAddr : "+this.ipAddress+"||hostname : "+this.hostname+"||os : "+this.os+"||snmp : "+this.snmp;
    }
}
export default MachineEntity;