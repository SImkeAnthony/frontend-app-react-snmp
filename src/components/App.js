import Layout from "../pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Network from "../pages/Network";
import DeviceInfo from "../pages/DeviceInfo";
import Service from "../pages/Service";
import Error404 from "../pages/Error404";
import Inventory from "../pages/Inventory";
import Alert from "../pages/Alert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/deviceInfo" element={<DeviceInfo/>}/>
          <Route path="/network" element={<Network/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/alert" element={<Alert/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
