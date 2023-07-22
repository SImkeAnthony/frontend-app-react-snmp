import img from "../../assets/img/service.png";
function ServiceCard({name,description,port}){
    return(
        <div className="card border-2 m-3 text-center justify-content-center" style={{maxWidth:"30vh"}}>
            <img src={img} className=" m-3 card-img-top w-25 align-self-center" alt="Display a parameter logo : a gear"/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item p-1">name: <button className="nav-link d-inline">{name}</button></li>
                <li className="list-group-item p-1">description: {description}</li>
                <li className="list-group-item p-1">used port: {port}</li>
            </ul>
        </div>
    );
}
export default ServiceCard;