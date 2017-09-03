export const PersonReducer  = (
    state={
        person : {},
    }, action) => {
    let newState = {
        person : {
            ...state.person,
        }
    };
    switch(action.type){
        case 'LOAD_PERSON':
            newState = {
                person : action.payload.person,
            };
            return newState;
        case 'DESTROY_ONE':
            newState={
                person : {},
            };
            return newState;
        default:
            return state;
    }
};
