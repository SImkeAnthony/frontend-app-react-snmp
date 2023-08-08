import {configureStore} from "@reduxjs/toolkit";
import MachineEntityReducer from "./reducer/MachineEntityReducer.js";
import InterfaceEntityReducer from "./reducer/InterfaceEntityReducer.js";
import ProcessorEntityReducer from "./reducer/ProcessorEntityReduxer.js";
import PStorageEntityReducer from "./reducer/PStorageEntityReducer.js";
import VStorageEntityReducer from "./reducer/VStorageEntityReducer.js";
import ServiceEntityReducer from "./reducer/ServiceEntityReducer.js";
import AlertReducer from "./reducer/AlertReducer.js";
const store = configureStore({
    reducer:{
      //add some reducers here
        /*
        * Example :
        * counter : counterReducer
        */
        machineEntityReducer : MachineEntityReducer,
        interfaceEntityReducer : InterfaceEntityReducer,
        processorEntityReducer : ProcessorEntityReducer,
        pStorageEntityReducer : PStorageEntityReducer,
        vStorageEntityReducer : VStorageEntityReducer,
        serviceEntityReducer : ServiceEntityReducer,
        alertReducer : AlertReducer
    },
});
export default store;