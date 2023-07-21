class Service{
    constructor(id,name,description,port) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.port = port;
    }
    display(){
        return "id : "+this.id+"name : "+this.name+"||description : "+this.description+"||port : "+this.port;
    }
}
export default Service;