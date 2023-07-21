const initialSate = {
    selectedPStorageEntity:"",
};

const PStorageEntityReducer = (state = initialSate, action) => {
    switch (action.type){

        case 'SELECT-PSTORAGE-ENTITY':
            return {
                ...state,
                selectedPStorageEntity: action.selectedPStorageEntity,
            }
        default:
            return state;
    }
};
export default PStorageEntityReducer;