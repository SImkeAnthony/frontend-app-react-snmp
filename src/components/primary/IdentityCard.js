import img from "../../assets/img/device.png";
function IdentityCard({hostname,os,snmp}){
    return(
        <div className="card border-2">
            <img src={img} className="card-img-top w-25 align-self-center" alt="Display many informatica device like computer or smartphone"/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">hostname: {hostname}</li>
                    <li className="list-group-item">Operating System: {os}</li>
                    <li className="list-group-item">SNMP: {snmp}</li>
                </ul>
        </div>
    );
}
export default IdentityCard;