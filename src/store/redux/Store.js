import {configureStore} from "@reduxjs/toolkit";
import MachineEntityReducer from "./reducer/MachineEntityReducer";
import InterfaceEntityReducer from "./reducer/InterfaceEntityReducer";
import ProcessorEntityReducer from "./reducer/ProcessorEntityReduxer";
import PStorageEntityReducer from "./reducer/PStorageEntityReducer";
import VStorageEntityReducer from "./reducer/VStorageEntityReducer";
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
        vStorageEntityReducer : VStorageEntityReducer
    },
});
export default store;