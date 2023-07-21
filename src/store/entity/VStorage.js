class VStorage{
    constructor(id,reference,available,frequency,latency) {
        this.id = id;
        this.reference = reference;
        this.available = available;
        this.frequency = frequency;
        this.latency = latency;
    }
    display(){
        return "id : "+this.id+"reference : "+this.reference+"||available : "+this.available+"||frequency : "+this.frequency+"||latency : "+this.latency;
    }
}
export default VStorage;