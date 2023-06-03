import {Outlet,Link} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
            <nav>
                <ul>
                    <li> <Link to="/">network</Link> </li>
                    <li> <Link to="/dashboard">dashboard</Link> </li>
                    <li> <Link to="/statistics">statistics</Link> </li>
                    <li> <Link to="/administration">administration</Link> </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;