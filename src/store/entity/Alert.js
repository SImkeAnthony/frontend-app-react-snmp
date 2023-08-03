class Alert{
    constructor(id,name,description,important) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.important = important;
    }
    display(){
        return "id : "+this.id+"||name : "+this.name+"||description : "+this.description+"||important : "+this.important;
    }
}
export default Alert;