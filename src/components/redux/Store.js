import {configureStore} from "@reduxjs/toolkit";
import MachineEntitiesReducer from "./reducer/MachineEntitiesReducer";

const store = configureStore({
    reducer:{
      //add some reducers here
        /*
        * Example :
        * counter : counterReducer
        */
        machineEntitiesReducer : MachineEntitiesReducer,
    },
});
export default store;