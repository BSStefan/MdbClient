export const MovieProjections  = (
    state={
        projections : [],
    }, action) => {
    let newState = {
        projections : [
            ...state.projections,
        ]
    };
    switch(action.type){
        case 'LOAD_PROJECTIONS':
            newState = {
                projections : action.payload.projections,
            };
            return newState;
        case 'DESTROY_PROJECTIONS':
            newState = {
                projections : [],
            };
            return newState;

        default:
            return state;
    }
};