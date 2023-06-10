export const SetMachineEntities = (newMachineEntities) =>{
    return{
        type: 'SET-MACHINE-ENTITIES',
        machineEntities: newMachineEntities
    };
};