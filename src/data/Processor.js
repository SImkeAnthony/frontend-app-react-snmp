class Processor{
    constructor(reference,core,vCore,frequency) {
        this.reference = reference;
        this.core = core;
        this.vCore = vCore;
        this.frequency = frequency;
    }
    display(){
        return "reference : "+this.reference+"||core : "+this.core+"||vCore : "+this.vCore+"||frequency : "+this.frequency;
    }
}
export default Processor;