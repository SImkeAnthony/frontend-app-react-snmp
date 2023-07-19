class VStorage{
    constructor(reference,available,frequency,latency) {
        this.reference = reference;
        this.available = available;
        this.frequency = frequency;
        this.latency = latency;
    }
    display(){
        return "reference : "+this.reference+"||available : "+this.available+"||frequency : "+this.frequency+"||latency : "+this.latency;
    }
}
export default VStorage;