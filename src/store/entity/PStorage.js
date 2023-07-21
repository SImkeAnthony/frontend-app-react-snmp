class PStorage{
    constructor(id,reference,available,used) {
        this.id = id;
        this.reference = reference;
        this.available = available;
        this.used = used;
    }
    display(){
        return "id : "+this.id+"reference : "+this.reference+"||available : "+this.available+"||used : "+this.used;
    }
}
export default PStorage;