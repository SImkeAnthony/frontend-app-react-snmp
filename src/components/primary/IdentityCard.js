import img from "../../assets/img/device.png";
function IdentityCard({id,hostname,os,snmp}){
    return(
        <div className="card border-2 m-3 text-center justify-content-center" style={{maxWidth:"30vh"}} testId={"IdentityCard:"+id}>
            <img src={img} className="card-img-top w-25 align-self-center" alt="Display many informatica device like computer or smartphone"/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-1 ">Hostname: {hostname}</li>
                    <li className="list-group-item p-1 ">Operating System: {os}</li>
                    <li className="list-group-item p-1 ">SNMP: {snmp}</li>
                </ul>
        </div>
    );
}
export default IdentityCard;