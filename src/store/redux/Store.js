import {configureStore} from "@reduxjs/toolkit";
import MachineEntityReducer from "./reducer/MachineEntityReducer";
import InterfaceEntityReducer from "./reducer/InterfaceEntityReducer";
const store = configureStore({
    reducer:{
      //add some reducers here
        /*
        * Example :
        * counter : counterReducer
        */
        machineEntityReducer : MachineEntityReducer,
        interfaceEntityReducer : InterfaceEntityReducer,
    },
});
export default store;