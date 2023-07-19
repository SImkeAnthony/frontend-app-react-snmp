class Service{
    constructor(name,description,port) {
        this.name = name;
        this.description = description;
        this.port = port;
    }
    display(){
        return "name : "+this.name+"||description : "+this.description+"||port : "+this.port;
    }
}
export default Service;