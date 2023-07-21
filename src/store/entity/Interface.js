class Interface{
    constructor(id,description,macAddress,ipAddress) {
        this.id = id;
        this.description = description;
        this.macAddress = macAddress;
        this.ipAddress = ipAddress;
    }
    display(){
        return "id : "+this.id+"description : "+this.description+"||macAddress : "+this.macAddress+"||ipAddress : "+this.ipAddress;
    }
}
export default Interface;