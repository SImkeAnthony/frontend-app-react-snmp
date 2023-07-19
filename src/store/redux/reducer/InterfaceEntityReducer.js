const initialSate = {
    selectedInterfaceEntity:"",
};

const InterfaceEntityReducer = (state = initialSate, action) => {
    switch (action.type){

        case 'SELECT-INTERFACE-ENTITY':
            return {
                ...state,
                selectedInterfaceEntity: action.selectedInterfaceEntity,
            }
        default:
            return state;
    }
};
export default InterfaceEntityReducer;