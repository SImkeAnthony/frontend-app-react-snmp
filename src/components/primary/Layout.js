import NavBar from "./NavBar";
import DeviceList from "./DeviceList";

function Layout(){

    return(
        <div className="container-mt-5">
            <NavBar/>
            <DeviceList/>
        </div>
    );
};

export default Layout;