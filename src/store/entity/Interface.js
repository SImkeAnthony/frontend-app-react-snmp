class Interface{
    constructor(description,macAddress,ipAddress) {
        this.description = description;
        this.macAddress = macAddress;
        this.ipAddress = ipAddress;
    }
    display(){
        return "description : "+this.description+"||macAddress : "+this.macAddress+"||ipAddress : "+this.ipAddress;
    }
}
export default Interface;