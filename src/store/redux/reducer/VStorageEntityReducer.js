const initialSate = {
    selectedVStorageEntity:"",
};

const VStorageEntityReducer = (state = initialSate, action) => {
    switch (action.type){

        case 'SELECT-VSTORAGE-ENTITY':
            return {
                ...state,
                selectedVStorageEntity: action.selectedVStorageEntity,
            }
        default:
            return state;
    }
};
export default VStorageEntityReducer;