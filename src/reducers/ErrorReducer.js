export const ErrorReducer  = (
    state={
        error : ''
    }, action) => {
    let newState = {
        ...state
    };
    switch(action.type){
        case 'SET_GLOBAL_ERROR':
            newState = {
                error : action.payload,
            };
            return newState;
        case 'DESTROY_GLOBAL_ERROR':
            newState = {
                error : '',
            };
            return newState;
        default:
            return state;
    }
};