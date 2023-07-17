
const initialSate = {
    machineEntities:"",
    selectedMachineEntity:"",
};
const MachineEntitiesReducer = (state = initialSate,action) => {
    switch (action.type){
        case 'SET-MACHINE-ENTITIES':
            return {
                ...state,
                machineEntities: action.machineEntities,
            }
        case 'SELECT-MACHINE-ENTITY':
            return {
                ...state,
                selectedMachineEntity: action.selectedMachineEntity,
            }
        default:
            return state;
    }
};
export default MachineEntitiesReducer;