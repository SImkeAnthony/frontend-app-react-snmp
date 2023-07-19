import {useRef, useState} from "react";
import {Link} from "react-router-dom";

function NavBar(){
    const collapseRef = useRef(null);
    const [isMenuOpen,setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen);
    }

    const collapse = ()=>{
        if(isMenuOpen){
            if (collapseRef.current) {
                const collapsibleElement = new window.bootstrap.Collapse(collapseRef.current);
                collapsibleElement.hide();
                toggleMenu();
            }
        }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <span className="navbar-brand fs-1 navBrandText">Menu</span>
                <button className="navbar-toggler navBtn" type="button" data-bs-toggle="collapse" data-bs-target="#linkNavBar" aria-controls="link" aria-expanded={"false"} aria-label="Toggle navigation" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="linkNavBar" ref={collapseRef}>
                    <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                        <li className="nav-item fs-2 fw-medium"> <Link to="/" className="nav-link navLink" onClick={collapse}>Dashboard</Link> </li>
                        <li className="nav-item fs-2 fw-medium"> <Link to="/network" className="nav-link navLink " onClick={collapse}>Network</Link> </li>
                        <li className="nav-item fs-2 fw-medium"> <Link to="/deviceInfo" className="nav-link navLink" onClick={collapse}>DeviceInfos</Link> </li>
                        <li className="nav-item fs-2 fw-medium"> <Link to="/service" className="nav-link navLink" onClick={collapse}>Services</Link> </li>
                        <li className="nav-item fs-2 fw-medium"><Link to="/inventory" className="nav-link navLink" onClick={collapse}>Inventory</Link></li>
                        <li className="nav-item fs-2 fw-medium"><Link to="/alert" className="nav-link navLink" onClick={collapse}>Alert</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;