class Processor{
    constructor(id,reference,core,vCore,frequency) {
        this.id = id;
        this.reference = reference;
        this.core = core;
        this.vCore = vCore;
        this.frequency = frequency;
    }
    display(){
        return "id : "+this.id+"reference : "+this.reference+"||core : "+this.core+"||vCore : "+this.vCore+"||frequency : "+this.frequency;
    }
}
export default Processor;