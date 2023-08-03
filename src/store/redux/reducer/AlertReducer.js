const initialSate = {
    alerts:""
};

const AlertReducer = (state = initialSate,action) =>{
    switch(action.type){
        case 'SET-ALERTS':
            return {
                ...state,
                alerts: action.alerts
            }
        default:
            return state;
    }
}

export default  AlertReducer;