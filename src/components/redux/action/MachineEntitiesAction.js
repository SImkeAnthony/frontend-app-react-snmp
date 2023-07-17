export const SetMachineEntities = (newMachineEntities) =>{
    return{
        type: 'SET-MACHINE-ENTITIES',
        machineEntities: newMachineEntities
    };
};
export const selectMachineEntity = (newSelectedMachine)=>{
    return{
        type: "SELECT-MACHINE-ENTITY",
        selectedMachineEntity : newSelectedMachine
    }
}