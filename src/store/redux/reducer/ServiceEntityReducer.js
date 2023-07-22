const initialSate = {
    selectedServiceEntity:"",
};

const ServiceEntityReducer = (state = initialSate, action) => {
    switch (action.type){

        case 'SELECT-SERVICE-ENTITY':
            return {
                ...state,
                selectedServiceEntity: action.selectedServiceEntity,
            }
        default:
            return state;
    }
};
export default ServiceEntityReducer;