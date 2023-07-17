import Layout from "./primary/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Network from "../pages/Network";
import DeviceInfo from "../pages/DeviceInfo";
import Service from "../pages/Service";
import Error404 from "../pages/Error404";
import Inventory from "../pages/Inventory";
import Alert from "../pages/Alert";
import MachineEntityService from "../services/MachineEntityService";
import {SetMachineEntities} from "./redux/action/MachineEntitiesAction";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const App = ()=> {
  const dispatch = useDispatch();
  //get state
  /*
   * first : name of reducer configured in store.js
   * second : name of variable use in the reducer (see initialState in the reducer file)
   */
  useEffect(()=>{
    //get data from Api Rest
    MachineEntityService.getMachineEntities().then((response)=>{
      try{
        //perform redux action here
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
