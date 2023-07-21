const initialSate = {
    selectedProcessorEntity:"",
};

const ProcessorEntityReducer = (state = initialSate, action) => {
    switch (action.type){

        case 'SELECT-PROCESSOR-ENTITY':
            return {
                ...state,
                selectedProcessorEntity: action.selectedProcessorEntity,
            }
        default:
            return state;
    }
};
export default ProcessorEntityReducer;