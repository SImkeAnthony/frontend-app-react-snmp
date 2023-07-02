import {Outlet,Link} from "react-router-dom";
import {useRef, useState} from "react";

function Layout(){

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
        <div className="container-mt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="#">Menu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#link" aria-controls="link" aria-expanded={"false"} aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="link" ref={collapseRef}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fs-3 fw-medium"> <Link to="/" className="nav-link" onClick={collapse}>dashboard</Link> </li>
                            <li className="nav-item fs-3 fw-medium"> <Link to="/network" className="nav-link" onClick={collapse}>network</Link> </li>
                            <li className="nav-item fs-3 fw-medium"> <Link to="/deviceInfo" className="nav-link" onClick={collapse}>deviceInfos</Link> </li>
                            <li className="nav-item fs-3 fw-medium"> <Link to="/service" className="nav-link" onClick={collapse}>Services</Link> </li>
                            <li className="nav-item fs-3 fw-medium"><Link to="/inventory" className="nav-link" onClick={collapse}>Inventory</Link></li>
                            <li className="nav-item fs-3 fw-medium"><Link to="/alert" className="nav-link" onClick={collapse}>Alert</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;