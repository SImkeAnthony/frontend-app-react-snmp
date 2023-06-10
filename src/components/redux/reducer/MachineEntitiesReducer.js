const initialSate = {
    machineEntities:[],
};
const MachineEntitiesReducer = (state = initialSate,action) => {
    switch (action.type){
        case 'SET-MACHINE-ENTITIES':
            return {
                ...state,
                machineEntities: action.machineEntities,
            }
        default:
            return state;
    }
};
export default MachineEntitiesReducer;