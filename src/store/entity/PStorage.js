class PStorage{
    constructor(reference,available,used) {
        this.reference = reference;
        this.available = available;
        this.used = used;
    }
    display(){
        return "reference : "+this.reference+"||available : "+this.available+"||used : "+this.used;
    }
}
export default PStorage;