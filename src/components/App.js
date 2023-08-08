import Layout from "./primary/Layout.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard.js";
import Network from "../pages/Network.js";
import DeviceInfo from "../pages/DeviceInfo.js";
import Service from "../pages/Service.js";
import Error404 from "../pages/Error404.js";
import Inventory from "../pages/Inventory.js";
import Alert from "../pages/Alert.js";
import {useDispatch} from "react-redux";
import MachineEntityService from "../services/MachineEntityService.js";
import {SetMachineEntities} from "../store/redux/action/MachineEntityAction.js";
import {useEffect} from "react";

const App = ()=> {
  const dispatch = useDispatch();

  useEffect(()=>{
    //get data from Api Rest
    MachineEntityService.getMachineEntities().then((response)=>{
      try{
        console.log(response.data);
        dispatch(SetMachineEntities(response.data));
      }catch (Error){
        console.log("set machine entities error : "+Error);
      }
    }).catch((Error)=>{
      console.log("call api error : "+Error);
    });
  },[dispatch]);
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
