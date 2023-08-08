import NavBar from "./NavBar.js";
import DeviceList from "./DeviceList.js";

function Layout(){

    return(
        <div className="container-mt-5">
            <NavBar/>
            <DeviceList/>
        </div>
    );
};

export default Layout;